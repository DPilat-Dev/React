import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface Genre{
    id: number;
    name: string;
    slug: string;
}

interface FetchGenresResponse{
    count: number;
    results:Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
            .get<FetchGenresResponse>("/genres", {signal: controller.signal})
            .then((res) => {
                setGenres(res.data.results);
                setLoading(false); // In dev enviroment you want to do it here other wise put this in the .finally()
            })
            .catch((err) => {
                if(err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false); // In dev enviroment you want to do it here other wise put this in the .finally()
            });
        
        return () => controller.abort();
    }, []);

    return {genres, error, isLoading};
};

export default useGenres;