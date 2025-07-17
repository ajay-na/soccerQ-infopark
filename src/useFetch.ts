import { useEffect, useState } from "react";

export default function useFetch(url: string, makeCall: boolean = true) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    makeCall &&
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((res) => {
          setLoading(false);
          res && setData(res);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
  }, [url]);
  return { data, loading, error };
}
