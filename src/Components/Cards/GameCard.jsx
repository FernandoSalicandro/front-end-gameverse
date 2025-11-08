
import './GameCard.css';
import { Link } from "react-router"


const GameCard = ({ image_url, title, genre, id }) => {



    return (
        <Link to={`/${id}`} className=" group card-shadow gamecard-layout ">

            {/* Background Overlay Scuro */}
            <div
                className="gamecard-background-layer"
                style={{ backgroundImage: `url(${import.meta.env.VITE_API_URL}/storage/${image_url})` }}
            />
            {/* Fine Background Overlay Scuro */}

            {/* Overlay Informazioni Card */}
            <div className="gamecard-info-layer">
                {/* Top Card Info */}
                <div className="w-full flex justify-end p-5">
                    <span className="gamecard-top-tag">
                        Ratings
                    </span>
                </div>
                {/* Fine Top Card Info */}

                {/* Bottom Card Info */}
                <div className="p-5 w-full">
                    <h4 className="gamecard-bottom-tag">{genre}</h4>
                    <h3 className="mt-2 text-lg font-bold">{title}</h3>
                    <div className="gamecard-animated-bar" />
                </div>
                {/* Fine Bottom Card Info */}
            </div>
            
            {/* Fine Overlay Informazioni Card */}
        </Link>
    )
}

export default GameCard