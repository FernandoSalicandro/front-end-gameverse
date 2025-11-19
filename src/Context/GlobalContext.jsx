import { createContext, useContext, useState } from 'react';
import useGamesFetch from '../Utils/Hooks/useGamesFetch';
import useDebounce from '../Utils/Hooks/useDebounce';

const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
    // State per ricerca e filtri
    const [searchTerms, setSearchTerms] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    
    // Debounce solo per la ricerca testuale
    const debouncedSearch = useDebounce(searchTerms, 500);
    
    // Fetch con entrambi i parametri
    const { games, loading, error } = useGamesFetch(debouncedSearch, selectedGenre);

    return (
        <GamesContext.Provider value={{
            games,
            loading,
            error,
            searchTerms,
            setSearchTerms,
            selectedGenre,
            setSelectedGenre
        }}>
            {children}
        </GamesContext.Provider>
    );
};

export const useGames = () => {
    const context = useContext(GamesContext);
    if (!context) {
        throw new Error('useGames deve essere usato dentro GamesProvider');
    }
    return context;
};