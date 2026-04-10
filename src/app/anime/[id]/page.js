import { getApiAnime } from "@/libs/api-config"
import VideoPlayer from "@/components/utilities/VideoPlayer"
import Image from "next/image"
import CollectionButton from "@/components/AnimeList/collectionbutton"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import CommentInput from "@/components/AnimeList/CommentInput"
import CommentBox from "@/components/AnimeList/CommentBox"

const Page = async({params}) => {

    const { id } = await params
    const anime = await getApiAnime(`anime/${id}`)
    const user = await authUserSession()
    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id}
    })

    return(
        <>
            <div className="pt-4 px-4">
                <h3 className="text-2xl text-primary">{anime.data.title} - {anime.data.year} </h3>
                {
                    !collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} 
                    image_url={anime.data.images.webp.image_url} anime_title={anime.data.title}  />
                }
            </div>
            <div className="pt-4 px-4 flex text-primary gap-4 overflow-x-auto">
                <div className="w-36 flex flex-col justify-center items-center rounded-2xl border border-primary p-2">
                    <h3>PERINGKAT</h3>
                    <p> {anime.data.rank} </p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded-2xl border border-primary p-2">
                    <h3>SKOR</h3>
                    <p>{anime.data.score} </p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded-2xl border border-primary p-2">
                    <h3>ANGGOTA</h3>
                    <p>{anime.data.members} </p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded-2xl border border-primary p-2">
                    <h3>EPISODE</h3>
                    <p>{anime.data.episodes} </p>
                </div>
            </div>
            <div className="pt-4 px-4 text-primary flex sm:flex-nowrap flex-wrap gap-10">
                <Image 
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width="350" 
                    height="350"
                    className="lg:w-1/5 w-full rounded-2xl object-cover "
                    unoptimized
                />
                <p className="text-2xl lg:w-4/5 text-justify">{anime.data.synopsis} </p>
            </div>
            <div className="p-4">
                <h3 className="text-2xl text-primary mb-4">Komentar</h3>
                <CommentBox 
                    anime_mal_id={id} />
                
                {
                    user &&
                    <CommentInput 
                        anime_mal_id={id} 
                        user_email={user?.email} 
                        username={user?.name} 
                        anime_title={anime.data.title} />
                }
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.embed_url} />
            </div>
        </>
    )
}

export default Page