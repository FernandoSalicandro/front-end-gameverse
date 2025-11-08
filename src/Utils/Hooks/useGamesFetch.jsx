import axios from 'axios';
import { useState, useEffect } from 'react';

const useGamesFetch = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const api = import.meta.env.VITE_API_URL;
                const response = await axios.get(`${api}/api/games`);
                setGames(response.data.games);
            } catch (error) {
                console.error('Error fetching games:', error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    return { games, loading };
}

export default useGamesFetch