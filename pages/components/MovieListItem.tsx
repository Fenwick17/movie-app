import MovieRatingForm from './MovieRatingForm';

const MovieListItem: React.FC = ({ movie, movieUserData }: any) => {
  const formattedDate = new Date(movie.release_date).getFullYear();
  return (
    <div>
      <img
        loading="lazy"
        src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
      />
      <h1>{movie.original_title}</h1>
      <p>{movie.overview}</p>
      <p>{movie.original_language} / {movie.runtime} / {formattedDate}</p>
      <p>Average rating: {movie.vote_average}</p>
      {movieUserData?.movieRating
        ? <p>Your rating: {movieUserData.movieRating}</p>
        : <MovieRatingForm movie={movie} />
      }
      <p>Genres</p>
      <ul class="genres-list">
        {movie.genres.map((genre: { name: string }) => (
          <li key={`${movie.id}-${genre.name}`}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieListItem;
