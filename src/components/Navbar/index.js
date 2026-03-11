import Link from "next/link"
import InputSearch from "./inputSearch"
import UserActionButton from "./userActionButton"

const Navbar = () => {
    return (
        <header className="bg-accent">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
                <Link href="/" className="font-bold text-2xl " >Waekaizo Anime List</Link>
                <InputSearch />
                <UserActionButton />
            </div>
        </header>
    )
}

export default Navbar