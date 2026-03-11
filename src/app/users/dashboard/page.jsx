import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async() => {
    const user = await authUserSession()

    return (
        <div className="text-primary flex flex-col justify-center items-center">
            <h3 className="mt-5 mb-4 font-bold text-2xl">WELCOME, {user.name}</h3>
            <Image src={user.image} width={250} height={250} alt="..." />

            <div className="flex gap-4 my-5">
                <Link 
                    href="/users/dashboard/collection" 
                    className="bg-accent text-dark px-4 py-2 font-bold text-xl">
                    My Collection
                </Link>
                <Link 
                    href="/users/dashboard/comment" 
                    className="bg-accent text-dark px-4 py-2 font-bold text-xl">
                    My Comment
                </Link>
            </div>
        </div>
    )
}

export default Page