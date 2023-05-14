import { useState } from 'react';

const Form: React.FC = () => {
  const [movieName, setMovieName] = useState('');
  const [movieRating, setMovieRating] = useState('');

  const submitMovie = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { movieName, movieRating };
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={submitMovie}>
      <label htmlFor="movie-name">Movie name</label>
      <input
        type="text"
        id="movie-name"
        name="movieName"
        onChange={(e) => setMovieName(e.target.value)}
        value={movieName}
      />
      <label htmlFor="rating">Movie rating</label>
      <input
        type="text"
        id="rating"
        name="movieRating"
        onChange={(e) => setMovieRating(e.target.value)}
        value={movieRating}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
