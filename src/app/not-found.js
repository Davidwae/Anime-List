"use client"

import { FileSearchIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const NotFound = () => {
    const router = useRouter()

    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center flex-col">
            <div className="flex flex-col justify-center items-center gap-4">
                <FileSearchIcon size={32} className="text-accent" />
                <h3 className="text-accent text-2xl font-bold">NOT FOUND</h3>
                <button onClick={() => {router.back()}} className="underline text-primary hover:text-accent" >Kembali</button>
            </div>
        </div>
    )
}

export default NotFound