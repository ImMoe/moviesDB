import { Movie } from '../components/MovieItem';
import useData from './useData';

const useMovies = () => {
  const { data, error, isLoading } = useData<Movie>('/movie/popular');

  return { data, error, isLoading };
};

export default useMovies;
