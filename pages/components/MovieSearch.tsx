import { Router, useRouter } from 'next/router';
import { useState } from 'react';

const MovieSearch: React.FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: '/search',
      query: {
        searchTerm: searchTerm,
      },
    });
  };

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="movie-search">Movie title</label>
      <input
        type="text"
        name="movieSearch"
        id="movie-search"
        onChange={onInputChange}
        value={searchTerm}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieSearch;
