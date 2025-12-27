import Image from "next/image"
import Link from "next/link"

const AnimeList = ({title, images, id}) => {
    if (!images) return <p>Loading...</p>;

    return (
        <Link href={`/${id}`} className="cursor-pointer">
            <Image src={images} alt="Gambar Anime" width="350" height="350" className="w-full h-64 object-cover" />
            <h3 className="font-bold md:text-2xl text-sm p-4">{title}</h3>
        </Link>
    )
}

export default AnimeList