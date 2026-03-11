import Header from "@/components/Dashboard/header"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    return (
        <section className="w-full p-4">
            <Header title={"My Collection"} />

            <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2">
                <Link 
                    href={"/"}
                    className="relative border-2 border-accent"
                >
                    <Image src="/" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex items-center justify-center w-full bottom-0 bg-accent py-4">
                        <h5 className="text-xl text-center">Judul Anime Judul Anime</h5>
                    </div>
                </Link>
                <Link 
                    href={"/"}
                    className="relative border-2 border-accent"
                >
                    <Image src="/" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex items-center justify-center w-full bottom-0 bg-accent py-4">
                        <h5 className="text-xl text-center">Judul Anime Judul Anime</h5>
                    </div>
                </Link>
                <Link 
                    href={"/"}
                    className="relative border-2 border-accent"
                >
                    <Image src="/" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex items-center justify-center w-full bottom-0 bg-accent py-4">
                        <h5 className="text-xl text-center">Judul Anime Judul Anime</h5>
                    </div>
                </Link>
                <Link 
                    href={"/"}
                    className="relative border-2 border-accent"
                >
                    <Image src="/" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex items-center justify-center w-full bottom-0 bg-accent py-4">
                        <h5 className="text-xl text-center">Judul Anime Judul Anime</h5>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Page