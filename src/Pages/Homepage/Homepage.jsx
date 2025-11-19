// React core
import { useEffect, useRef,useState } from 'react';

// External libraries
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Components
import Section from '../../Components/Sections/Section';
import GameCard from '../../Components/Cards/GameCard.jsx';
import PrimaryButton from '../../Components/Ui/PrimaryButton';
import SecondaryButton from '../../Components/Ui/SecondaryButton';
import SearchBar from '../../Components/SearchBar/SearchBar.jsx';

// Context
import { useGames } from '../../Context/GlobalContext.jsx';

// Custom hooks (solo quello per scroll)
import useScrollY from '../../Utils/Hooks/useScrollY.jsx';

// Styles
import './Homepage.css';

const Homepage = () => {
    // State globale dal Context
    const { games, loading, error, searchTerms, setSearchTerms, selectedGenre, setSelectedGenre } = useGames();
    
    // UI locale
    const scrollY = useScrollY();
    const gamesRef = useRef();
    
    //Scroll alla sezione
    const scrollToGames = () => {
        if (gamesRef.current) {
            gamesRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <>
            <Section classes="relative items-center justify-center overflow-hidden z-10">
                {/* Parallax Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        transform: `translateY(${scrollY * 0.8}px)`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="w-full h-full background" />
                </div>

                {/* Animated Glow Effects */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/30 rounded-full blur-[100px] animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1s" }} />

                {/* Content */}
                <motion.div

                    initial={{ opacity: 0, y: '5vh' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'linear' }}

                >
                    {/* Titolo + desc hero */}
                    <div className="title-subtitle-container">
                        <h1 className='text-glow-cyan-purple'>GAMEVERSE</h1>
                        <p>Immergiti nel futuro del gaming. Scopri, esplora, domina.</p>
                    </div>
                    {/* Fine Titolo + desc hero */}

                    {/* Buttons CTA */}
                    <div className='w-full flex justify-center gap-3 mt-10'>
                        <PrimaryButton onClick={scrollToGames} text={'Esplora Giochi'} />
                        <SecondaryButton text={'Scopri Di Più'} />
                    </div>
                    {/* Fine Buttons CTA */}

                    {/* Scroll Indicator */}
                    <ChevronDown className='hero-scroll-indicator' />
                    {/* Fine Scroll indicator */}
                </motion.div>

            </Section>

            {/* Game Preview Section */}
            <Section ref={gamesRef} classes='relative items-center z-10 py-20'>
                <div className="w-full flex flex-col">

                    {/* Titolo + descr di sezione */}
                    <div className='gamepreview-title-container'>
                        <h2 className='gamepreview-title'>Giochi in evidenza</h2>
                    </div>
                    <p className='text-center text-gray-400 mt-3'>Scopri la nostra selezione curata dei migliori titoli gaming</p>
                    {/* Fine Titolo + descr di sezione */}

                    
                      {/* Search Bar */}
                    <SearchBar name={'search'} searchTerms={searchTerms} setSearchTerms={setSearchTerms} />
                    {/* Fine Search Bar */}
                    
                    {/* Genre Filter */}
                    <select 
                        name="genre" 
                        value={selectedGenre} 
                        onChange={(e) => setSelectedGenre(e.target.value)} 
                        className='text-black border bg-white px-4 py-2 rounded mt-4'
                    >
                        <option value="">Tutti i generi</option>
                        <option value="1">Action</option>
                        <option value="2">Adventure</option>
                        <option value="3">RPG</option>
                        <option value="4">Strategy</option>
                        <option value="5">Sports</option>
                        <option value="6">Shooter</option>
                        <option value="7">Puzzle</option>
                        <option value="8">Simulation</option>
                        <option value="9">Racing</option>
                        <option value="10">Horror</option>
                    </select>
                    {/* Fine Genre Filter */}                    
                    
                    {/* Griglia Card Giochi */}
                    <div className="preview-grid-layout">

                        {loading ? (
                            <p className="text-center text-gray-400 col-span-full">Caricamento giochi...</p>
                        ) : error ? (
                            <p className="text-center text-red-400 col-span-full">Errore: {error}</p>
                        ) : games.length > 0 ? (
                            games.map((currentGame) => (
                                <GameCard key={currentGame.id} image_url={currentGame.image_url} title={currentGame.title} genre={currentGame.genre.name} id={currentGame.id} />
                            ))
                        ) : (
                            <p className="text-center text-gray-400 col-span-full">Nessun gioco trovato per questa ricerca</p>
                        )}

                    </div>
                    {/* Fine Griglia Card Giochi */}

                </div>
            </Section>
            {/* Fine Game Preview Section */}
        </>


    )
}

export default Homepage