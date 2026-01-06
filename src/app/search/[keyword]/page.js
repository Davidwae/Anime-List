import { getApiAnime } from "@/app/api-config/api-config";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async({params}) => {
    const {keyword} = await params

    const decodedKeyword = decodeURI(keyword)
    
    const searchAnime = await getApiAnime("anime", `q=${decodedKeyword}`)

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