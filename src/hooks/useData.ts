import { useQuery } from '@tanstack/react-query';
import apiService from '../services/api-service';

interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const { data, error, isLoading } = useQuery<T[], Error>({
    queryKey: ['get data', endpoint],
    queryFn: () =>
      apiService
        .get<FetchDataResponse<T>>(endpoint)
        .then((response) => response.data.results),
  });
  return { data, error, isLoading };
};

export default useData;
