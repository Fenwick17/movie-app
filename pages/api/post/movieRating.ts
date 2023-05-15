import prisma from '../../../lib/prisma';

// POST /api/post
export default async function handle(req: any, res: any) {
  const result = await prisma.movie.findUnique({
    where: {
      movieId: Number(req.query.movieId),
    },
  });

  res.json(result);
}
