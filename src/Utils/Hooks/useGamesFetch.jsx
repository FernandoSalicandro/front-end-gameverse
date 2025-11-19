import axios from 'axios';
import { useState, useEffect } from 'react';

const useGamesFetch = (title, genre_id) => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            setError(null);
            try {
                const api = import.meta.env.VITE_API_URL;
                const url = `${api}/api/games`;
                const response = await axios.get(url, {
                    params: {
                        ...(title && { title }),
                        ...(genre_id && { genre_id }),

                    }
                });
                setGames(response.data.games);
            } catch (error) {
                console.error('Error fetching games:', error);
                setError(error.message); // errore nello state
                setGames([]); //reset games in caso di errore
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [title, genre_id]);

    return { games, loading,error };
}

export default useGamesFetch