import { useQuery } from "@tanstack/react-query";

export const useApi = (queryKey, queryFn, options = {}) => {
  return useQuery({
    queryKey,
    queryFn,
    retry: 1,
    ...options,
  });
};
