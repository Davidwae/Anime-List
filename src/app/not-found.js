"use client"
import { FileSearchIcon } from "@phosphor-icons/react"
import Link from "next/link"

const NotFound = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center flex-col">
            <div className="flex justify-center items-center gap-4">
                <FileSearchIcon size={32} className="text-accent" />
                <h3 className="text-accent text-2xl font-bold">NOT FOUND</h3>
            </div>
            <Link href={"/"} className="underline text-primary hover:text-accent" >Kembali</Link>
        </div>
    )
}

export default NotFound