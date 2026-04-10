import prisma from "@/libs/prisma"
import { comment } from "postcss"

const CommentBox = async({ anime_mal_id }) => {
    const comments = await prisma.comment.findMany({
        where: { anime_mal_id }
    })

    return (
        <div className="grid grid-cols-4 gap-2 mb-4">
            {comments.map(comment => {
                return (
                    <div key={comment.id} className="bg-accent text-dark p-2 rounded-2xl">
                        <p className="font-bold">{comment.username}</p>
                        <p className="">{comment.comment}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentBox