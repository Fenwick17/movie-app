import { useRouter } from 'next/router';
import useSWR, { Fetcher } from 'swr';
import MovieListItem from '../components/MovieListItem';
import prisma from '@/lib/prisma';
import { GetServerSideProps } from 'next';

const fetcher: Fetcher<string, string> = (...args) =>
  fetch(...args).then((res) => res.json());

type MovieUserData = {
  id: number;
  movieId: number;
  movieRating: number;
  anem: string;
};

export const getServerSideProps: GetServerSideProps<{
  movieUserData: MovieUserData;
}> = async (context) => {
  const movieId = Number(context.query.id);
  const movieUserData = await prisma.movie.findUnique({
    where: {
      movieId: movieId,
    },
  });
  return {
    props: { movieUserData },
  };
};

const Movie: React.FC = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
  const { data: result, error } = useSWR(id ? url : null, fetcher);
  const { movieUserData }: any = props;

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;
  return (
    <div>
      <MovieListItem movie={result} movieUserData={movieUserData} />
    </div>
  );
};

export default Movie;
