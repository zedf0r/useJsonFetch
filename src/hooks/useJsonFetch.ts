import { useEffect, useState } from "react";

export const useJsonFetch = (url: string) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          setError("Ошибка загрузки данных");
          setData(undefined);
          return;
        }

        const responseData = await response.json();
        setData(responseData);
      } catch (e) {
        setError("Ошибка загрузки данных" + e);
        setData(undefined);
        return;
      } finally {
        setLoading(false);
      }
    };

    fetchResponse();
  }, [url]);

  return [data, loading, error];
};
