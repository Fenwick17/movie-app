import prisma from '../../../lib/prisma';

// POST /api/post
export default async function handle(req, res) {
  const { movieName, movieRating, movieId } = req.body;
  const result = await prisma.movie.create({
    data: {
      name: movieName,
      movieRating: Number(movieRating),
      movieId: Number(movieId),
    },
  });

  res.json(result);
}
