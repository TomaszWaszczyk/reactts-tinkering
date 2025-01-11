import axios from "axios";
import { useEffect, useState } from "react";

type Currencies = {
    success: boolean,
    symbols: Record<string, string>;
};

type Error = {
    message: string
};

const FetchCurrencies: React.FC = () => {
    
    const [currencies, setCurrencies] = useState<Currencies | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await axios.get<Currencies>('https://data.fixer.io/api/symbols');
                setCurrencies(response.data);
            } catch (error: unknown) {
                if (error instanceof Error){
                setError(error.message)
                }
            } finally {
                console.log('call to currencies API');
            }
        };
        
        fetchCurrencies();
    }, []);

    return (
        <div>
            <ul>
                {}
            </ul>
        </div>
    )


};

export default FetchCurrencies;