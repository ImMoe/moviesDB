import { Movie } from '../components/MovieItem';
import useData from './useData';

const useMovies = (page: number) => {
  const { data, error, isLoading } = useData<Movie>('/movie/popular', page);

  return { data, error, isLoading };
};

export default useMovies;
