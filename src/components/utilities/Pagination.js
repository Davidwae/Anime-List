const Pagination = ({page, lastPage, setPage}) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0,
        })
    }

    const handleNextPage = () => {
        if (page >= lastPage) return

        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        if (page <= 1) return

        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-primary text-2xl">
            <button
                onClick={handlePrevPage} 
                className="transition-all hover:text-accent"
                >
                    Prev
                </button>
            <p>{page} of {lastPage}</p>
            <button
                onClick={handleNextPage}
                className="transition-all hover:text-accent"
            >
                Next
            </button>
        </div>
    )
}

export default Pagination