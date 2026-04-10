import Header from "@/components/Dashboard/header"
import { authUserSession } from "@/libs/auth-libs"
import Link from "next/link"

const Page = async() => {

    const user = await authUserSession()

    const comments = await prisma.comment.findMany({
        where: {user_email: user.email}
    })
    

    return (
        <section className="w-full p-4">
            <Header title={"My Comment"} />

            <div className="grid grid-cols-1 gap-4">
                {
                    comments.map((comment, index) => {
                        return(
                            <Link 
                                key={index}
                                href={comment.anime_mal_id}
                                className="bg-accent p-4"
                            >
                                <p className="font-bold">{comment.anime_title}</p>
                                <p className="italic">{comment.comment}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Page