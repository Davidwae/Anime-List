import Link from "next/link"

const Header = ({title, linkHRef, linkTitle}) => {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="font-bold text-2xl">{title}</h1>
            {
                linkHRef && linkTitle ? 
                <Link 
                    href={linkHRef} 
                    className="md:text-xl text-sm underline hover:text-indigo-500 transition-all" >
                        {linkTitle}
                </Link>
                : null
            }
            
        </div>
    )
}

export default Header