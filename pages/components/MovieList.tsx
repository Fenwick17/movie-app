import Link from 'next/link';
import { Movie, Movies } from '..';

const MoviesList: React.FC<Movies> = ({ movies }) => {
  return (
    <div className="page-container">
      <h1>List of movies</h1>
      <ul className="movie-list">
        <div className="movie-list-grid-container">
          {movies.map((movie: Movie) => {
            const formattedDate = new Date(movie.release_date).getFullYear();
            console.log(movie)
            return (
              <li key={movie.id} className="movie-list-item">
                <Link href={`/movie?id=${movie.id}`}>
                  <img
                    loading="lazy"
                    src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    width="299px"
                    height="auto"
                    alt="Movie poster"
                  />
                  <p>{movie.original_title} ({formattedDate})</p>
                </Link>
              </li>
            )
          }
          )}
        </div>
      </ul>
    </div>
  );
};

export default MoviesList;
