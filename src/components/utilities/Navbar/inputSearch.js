"use client"

import { MagnifyingGlassIcon } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            const keyword = searchRef.current.value
            router.push(`/search/${keyword}`)
        }
    }

    return (
        <div className="relative">
            <input 
                placeholder="cari anime..." 
                className="border-black border-2 w-full bg-white p-2 rounded-2xl"
                ref={searchRef} 
                onKeyDown={handleSearch}
                />
            <button type="submit" className="absolute top-2 end-4" onClick={handleSearch}>
                <MagnifyingGlassIcon size={24} />
            </button>
        </div>
    )
}

export default InputSearch