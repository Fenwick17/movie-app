import prisma from '../../../lib/prisma';

// POST /api/post
export default async function handle(req: any, res: any) {
  const result = await prisma.movie.findUnique({
    where: {
      movieId: Number(req.query.movieId),
    },
  });

  console.log('RESULT ', result);
  res.json(result);
}
