import axios from 'axios';
import { useEffect, useState } from "react"
import { useParams } from "react-router"


const useDetailsFetch = () => {

    const [game, setGame] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const api = import.meta.env.VITE_API_URL;
    useEffect(() => {

        const getDetails = async () => {




            try {

                const response = await axios.get(`${api}/api/games/${id}`);
                setGame(response.data.currentGame);


            } catch (error) {

                console.error('Error fetching details', error);

            } finally {
                setLoading(false);
            }



        }

        getDetails();



    }, [])


    return { game, loading };

}

export default useDetailsFetch