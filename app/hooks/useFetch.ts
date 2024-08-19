import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    // Handle Axios error
                    setError(err.response?.data?.message || err.message);
                } else if (err instanceof Error) {
                    // Handle JavaScript Error
                    setError(err.message);
                } else {
                    // Handle(unknown errors)
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
