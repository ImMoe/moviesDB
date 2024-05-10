import apiService from '../services/api-service';
import { useQuery } from '@tanstack/react-query';

export interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  genres: Genre[];
}

const useGenres = () => {
  const {
    data: genres,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      apiService
        .get<FetchGenresResponse>('/genre/movie/list')
        .then((response) => response.data.genres),
  });
  return { genres, error, isLoading };
};

export default useGenres;
