"use client"

import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/utilities/HeaderMenu"
import Pagination from "@/components/utilities/Pagination"
import { useEffect, useState } from "react"
import { getApiAnime } from "../api-config/api-config"

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async() => {

        const populer = await getApiAnime("top/anime", `page=${page}`)

        setTopAnime(populer)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <>
            <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
            <AnimeList api={topAnime} />
            <Pagination 
                page={page} 
                lastPage={topAnime?.pagination?.last_visible_page}
                setPage={setPage}
                />
        </>
    )
}

export default Page