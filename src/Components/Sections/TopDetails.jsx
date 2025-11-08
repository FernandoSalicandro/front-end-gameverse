import { Play, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';



const TopDetails = ({ game }) => {

    let navigate = useNavigate();

    return (

        <>
            <button onClick={() => navigate(-1)} className='backBtn'><ArrowLeft />Indietro</button>

            <div className="topDetails-layout">

                <div

                    className='topDetailsBg-layer' style={{ backgroundImage: `url(${import.meta.env.VITE_API_URL}/storage/${game.image_url})` }} >
                    <div className='topDetailsBg-dark_overlay' />

                    
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'linear', delay:1 }}
                        className='topDetails_details-layout'>
                        <span className='topDetails_game-tag'>{game.genre ? game.genre.name : 'Nessun Genere per questo Gioco'}</span>
                        <div className='topDetails_title-container'>
                            <h1>{game.title}</h1>

                        </div>
                        <button className='topDetails_ctaBtn'> <Play />Gioca Ora</button>

                    </motion.div>
                </div>






            </div>
        </>

    )
}

export default TopDetails