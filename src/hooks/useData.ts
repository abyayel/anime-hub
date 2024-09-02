import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<H> {
  data: H[];
}

function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState(" ");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((response) => {
        {
          setData(response.data.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
}

export { useData };
