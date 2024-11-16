import { useQuery } from '@tanstack/react-query';

export function useCountries(query?: string, sort?: string) {
  return useQuery<any[]>({
    queryKey: ['countries', query, sort],
    queryFn: async () => {
      const url = query?.length
        ? `https://restcountries.com/v3.1/name/${query}`
        : 'https://restcountries.com/v3.1/all';

      const res = await fetch(url);
      const data = await res.json();

      // Ensure data is sorted by population if sort is provided
      if (sort) {
        return data.sort((a: any, b: any) => {
          if (!a.population || !b.population) return 0; // Handle cases with missing population
          return sort === 'asc'
            ? a.population - b.population
            : b.population - a.population;
        });
      }

      return data;
    },
  });
}
