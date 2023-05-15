import { getMovieRating, rateMovie } from './movie-rating-functions';
import { prismaMock } from './setup/singleton';
import prisma from './setup/client';

describe('Movie rating tests', () => {
  test('should add movie rating', async () => {
    const movie = {
      name: 'Clownado',
      movieId: 12345,
      movieRating: 1,
    };

    prismaMock.movie.create.mockResolvedValue(movie);

    await expect(rateMovie(movie)).resolves.toEqual({
      name: 'Clownado',
      movieId: 12345,
      movieRating: 1,
    });
  });

  test('should get movie rating', async () => {
    const movie = {
      name: 'Clownado',
      movieId: 12345,
      movieRating: 1,
    };

    prismaMock.movie.findUnique.mockResolvedValue(movie);

    await expect(getMovieRating(movie)).resolves.toEqual({
      name: 'Clownado',
      movieId: 12345,
      movieRating: 1,
    });
  });
});
