import { useQuery } from '@tanstack/react-query';
import apiService from '../services/api-service';

interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, page: number = 1) => {
  const { data, error, isLoading } = useQuery<T[], Error>({
    queryKey: ['get data', endpoint, page],
    queryFn: () =>
      apiService
        .get<FetchDataResponse<T>>(endpoint, {
          params: {
            page,
          },
        })
        .then((response) => response.data.results),
  });
  return { data, error, isLoading };
};

export default useData;
