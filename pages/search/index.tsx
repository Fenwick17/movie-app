import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import MovieList from '../components/MovieList';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Search: React.FC = () => {
  const router = useRouter();
  const { searchTerm } = router.query;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${searchTerm}`;
  const { data: result, error } = useSWR(url, fetcher);

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Search results</h1>
      <MovieList movies={result.results} />
    </div>
  );
};

export default Search;
