import axios from "axios";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";

type Currencies = {
  success: boolean;
  symbols: Record<string, string>;
};

type Error = {
  message: string;
};

const FetchCurrencies: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currencies | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get<Currencies>(
          "https://data.fixer.io/api/symbols",
          {
            params: {
              access_key: import.meta.env.VITE_API_KEY,
            },
          },
        );
        setCurrencies(response.data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        }
        setLoading(false);
      } finally {
        console.table("call to currencies API");
      }
      <CircleLoader loading={loading}></CircleLoader>;
    };

    fetchCurrencies();
  }, [loading]);

  return (
    <div>
      <ul>
        {currencies && currencies.success ? (
          Object.entries(currencies.symbols).map(([code, name]) => (
            <li key={code}>
              {code}: {name}
            </li>
          ))
        ) : (
          <li>No currencies found.</li>
        )}
      </ul>
    </div>
  );
};

export default FetchCurrencies;
