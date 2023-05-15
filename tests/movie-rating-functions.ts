import prisma from './setup/client';

interface Movie {
  name: string;
  movieRating: number;
  movieId: number;
}

export async function rateMovie(movie: Movie) {
  return await prisma.movie.create({
    data: movie,
  });
}

export async function getMovieRating(movie: Movie) {
  return await prisma.movie.findUnique({
    where: { movieId: movie.movieId },
  });
}
