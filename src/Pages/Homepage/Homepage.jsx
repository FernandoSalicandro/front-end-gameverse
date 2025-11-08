import './Homepage.css';
import { motion } from 'framer-motion';
import Section from '../../Components/Sections/Section';
import PrimaryButton from '../../Components/Ui/PrimaryButton';
import SecondaryButton from '../../Components/Ui/SecondaryButton';
import useScrollY from '../../Utils/Hooks/useScrollY.jsx'
import { ChevronDown } from 'lucide-react';
import GameCard from '../../Components/Cards/GameCard.jsx';
import useGamesFetch from '../../Utils/Hooks/useGamesFetch.jsx';
import { useRef } from 'react';



const Homepage = () => {

    //custom hook per la chiamata GET/index all'API al backend
    const { games, loading } = useGamesFetch();
    
    //funzione per ottenere il valore di scroll verticale
    const scrollY = useScrollY();
    
    
    //referenziamento sezione preview 
    const gamesRef = useRef();
    //funzione per scrollare alla sezione preview
    const scrollToGames = () => {

        if (gamesRef.current) {
            gamesRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }

    }


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


                    {/* Griglia Card Giochi */}
                    <div className="preview-grid-layout">

                        {loading ? (
                            <p className="text-center text-gray-400 col-span-full">Caricamento giochi...</p>
                        ) : games.length > 0 ? (
                            games.map((currentGame) => (
                                <GameCard key={currentGame.id} image_url={currentGame.image_url} title={currentGame.title} genre={currentGame.genre.name} id={currentGame.id} />
                            ))
                        ) : (
                            <p className="text-center text-gray-400 col-span-full">Nessun gioco disponibile</p>
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