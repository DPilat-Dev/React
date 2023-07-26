import { useState, useEffect } from "react";
import apiClient, { CanceledError } from "../services/api-client";

    export interface Platform{
        id:number;
        name:string;
        slug:string;
    } 

    export interface Game {
        id: number;
        name: string;
        background_image: string;
        parent_platforms: {platform: Platform}[];
        metacritic: number;
    }
  
    interface FetchGamesResponse {
        count: number;
        results: Game[];
    }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
            .get<FetchGamesResponse>("/games", {signal: controller.signal})
            .then((res) => {
                setGames(res.data.results);
                setLoading(false); // In dev enviroment you want to do it here other wise put this in the .finally()
            })
            .catch((err) => {
                if(err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false); // In dev enviroment you want to do it here other wise put this in the .finally()
            });
        
        return () => controller.abort();
    }, []);

    return {games, error, isLoading};
}

export default useGames;