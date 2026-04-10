"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
    const [comment, setComment] = useState("")
    const [isCreated, setIsCreated] = useState(false)

    const router = useRouter()
    
    const handleInput = (event) => {
        setComment(event.target.value)
    }

    const handlePosting = async(event) => {
        event.preventDefault()
        const data = { anime_mal_id, user_email, comment, username, anime_title }

        const response = await fetch("/api/v1/comment" , {
            method: "POST",
            body: JSON.stringify(data)
        })

        const postComment = await response.json()
        if (postComment.isCreated) {
            setIsCreated(true)
            setComment("")
            router.refresh()
        }
    }

    return (
        <div className="flex flex-col gap-2 items-center">
            {isCreated && <p className="text-primary">Postingan Terkirim...</p>}
            <textarea 
                onChange={handleInput} 
                value={comment} 
                className="w-full bg-primary h-32 px-2 text-2xl"/>
            <button 
                onClick={handlePosting} 
                className="bg-accent px-2 py-3 font-bold md:w-1/3 w-full" >
                Posting Komentar
            </button>
        </div>
    )
}

export default CommentInput