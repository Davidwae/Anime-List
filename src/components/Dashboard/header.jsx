"use client"

import { ArrowSquareLeftIcon } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"

const Header = ({ title }) => {
    const router = useRouter()

    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }

    return (
        <div className="flex justify-between items-center my-4">
            <button className="text-primary" onClick={handleBack}>
                <ArrowSquareLeftIcon size={32} />
            </button>
            <h3 className="text-primary font-bold text-2xl">{title}</h3>
        </div>
    )
}

export default Header