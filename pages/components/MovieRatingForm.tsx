import { useState } from 'react';

const MovieRatingForm: React.FC = ({ movie }) => {
  const [movieRating, setMovieRating] = useState('');
  const movieName = movie.original_title;
  const movieId = movie.id;

  const submitMovie = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { movieName, movieRating, movieId };
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

export default MovieRatingForm;
