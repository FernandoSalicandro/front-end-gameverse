const SearchBar = ({name, searchTerms, setSearchTerms}) => {
    return (


        <>
            <div className="w-full flex justify-center items-center">
                <label htmlFor="search" className='w-[30%] sm:w-[20%]  border border-white text-white text-center'>Cerca Gioco</label>
                <input
                    className='w-[70%] sm:w-[80%] border border-white text-white caret-fuchsia-500 focus-within:outline-fuchsia-400 focus-within:outline-2 pl-5'
                    type="text"
                    id="search"
                    name={name}
                    value={searchTerms}
                    onChange={(e) => setSearchTerms(e.target.value)}
                />
            </div>
        </>

    )
}

export default SearchBar