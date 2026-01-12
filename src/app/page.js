import Link from "next/link";
import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getApiAnime, getNestedAnimeResponse } from "../libs/api-config";
import { generateRandomNumber, reproduce } from "@/libs/libs";

const Page = async() => {

  const topAnime = await getApiAnime("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")

  recommendedAnime = reproduce(recommendedAnime, 4)
  
  return (
    <>
      <section>
        <Header title="Anime Populer" linkHRef="/populer" linkTitle="Lihat Semua" />
        <AnimeList api={topAnime} />
      </section>

      <section>
        <Header title="Rekomendasi" linkHRef="/populer" linkTitle="Lihat Semua" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
}

export default Page