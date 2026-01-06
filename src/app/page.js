import Link from "next/link";
import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getApiAnime } from "./api-config/api-config";

const Page = async() => {
  const topAnime = await getApiAnime("top/anime", "limit=8")

  return (
    <>
      <section>
        <Header title="Anime Populer" linkHRef="/populer" linkTitle="Lihat Semua" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
}

export default Page