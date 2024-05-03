import { useEffect, useState } from 'react';
import apiService from '../services/api-service';
import { CanceledError } from 'axios';

export interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  genres: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiService
      .get<FetchGenresResponse>('/genre/movie/list', {
        signal: controller.signal,
      })
      .then((res) => {
        setGenres(res.data.genres);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;
