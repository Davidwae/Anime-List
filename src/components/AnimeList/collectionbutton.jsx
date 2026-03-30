"use client"

import { useState } from "react"

const CollectionButton = ({ anime_mal_id, user_email, image_url, anime_title }) => {
    const [isCreated, setIsCreated] = useState(false)

    const handleCollection = async(event) => {
        event.preventDefault()
        
        const data = { anime_mal_id, user_email, image_url, anime_title }

        const response = await fetch("/api/v1/collection" , {
            method: "POST",
            body: JSON.stringify(data)
        })

        const collection = await response.json()
        if (collection.isCreated) {
            setIsCreated(true)
        }
    }

    return (
        <>
            {
                isCreated ?
                <p className="text-primary">Berhasil Ditambahkan ke Collection</p>
                :
                <button 
                    onClick={handleCollection} 
                    className="px-2 py-1 bg-accent">
                    Add to Collection
                </button>

            }
        </>
    )
}

export default CollectionButton