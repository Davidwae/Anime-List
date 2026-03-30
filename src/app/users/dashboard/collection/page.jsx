import Header from "@/components/Dashboard/header"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Image from "next/image"
import Link from "next/link"

const Page = async() => {
    const user = authUserSession()
    const collection = await prisma.collection.findMany( { 
        where: {user_email: user.email},
    })

    return (
        <section className="w-full p-4">
            <Header title={"My Collection"} />

            <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2">
                {
                    collection.map((collect, index) => {
                        return(
                            <Link 
                                key={index}
                                href={`/anime/${collect.anime_mal_id}`}
                                className="relative border-2 border-accent"
                            >
                                <Image 
                                    src={collect.image_url} 
                                    alt={`Gambar Anime ${collect.anime_title}`} 
                                    width={350} 
                                    height={350} 
                                    className="w-full"
                                    unoptimized
                                />
                                <div className="absolute flex items-center justify-center w-full bottom-0 bg-accent py-4">
                                    <h5 className="text-xl text-center">{collect.anime_title}</h5>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Page