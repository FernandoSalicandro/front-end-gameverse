


const BottomDetails = ({ game }) => {
    return (

        <>
        
        <div className="bottomDetails-layout">
            <div className="bottomDetails_title-sub-container">
                <h2>Descrizione</h2>
                <p>{game ? game.description : 'Descrizione non disponibile'}</p>
            </div>


            {/* colonna di destra */}
            <div className="bottomDetails_right-col-layout">
                <div className="bottomDetails_right-title-container">
                    <h2>Informazioni</h2>
                </div>

                {/* Genere */}
                <div className="flex flex-col">
                    <small className="text-white/70">Genere</small>
                    <p className="text-white font-bold">{game.genre ? game.genre.name : 'genere non disponibile'}</p>
                </div>
                {/* Fine Genere */}

                {/* Piattaforme */}
                    <div className="flex flex-col w-full gap-2 mt-5">
                        <small className="text-white/70">Piattaforme Disponibili</small>
                        <div className="bottomDetails_tags-layout">
                            {game.consoles && game.consoles.map(currentConsole => (

                                    <span className="text-pink-500 text-sm border text-center px-1">{currentConsole.name}</span>
                            ))
                            }
                        </div>
                    </div>
                {/* Fine Piattaforme */}





            </div>
            {/* Fine colonna di destra */}
        </div>
        

        
        </>
        
    )
}

export default BottomDetails