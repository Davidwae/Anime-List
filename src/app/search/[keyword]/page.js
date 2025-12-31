import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async({params}) => {
    const {keyword} = await params

    const decodedKeyword = decodeURI(keyword)
    

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)

    const searchAnime = await response.json()

    return (
        <>
            <section>
                <Header title={`Pencarian untuk ${decodedKeyword}`} />
                <AnimeList api={searchAnime} />
            </section>
        </>
    );
}

export default Page