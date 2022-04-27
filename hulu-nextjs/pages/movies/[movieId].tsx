import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import * as React from "react";
import { Movie } from "../../models";

export interface MovieDetailProps {
  movie: Movie;
}

export default function MovieDetail({ movie }) {
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
  return (
    <div>
      <article className="flex flex-row items-center w-8/12 mt-10 m-auto justify-between relative">
        <img
          src={
            movie?.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`
              : url
          }
          alt={movie?.title}
        />
        <div className="ml-20">
          <h4 className="text-3xl mb-10">{movie?.title}</h4>
          <p className="w-full leading-10">{movie?.overview}</p>
          <p className="mt-5">Releases : {movie?.release_date}</p>
          <p className="mt-5">Vote count : {movie?.vote_count}</p>
          <p className="mt-5">Vote average : {movie?.vote_average}</p>
        </div>
      </article>
      <button className="rounded bg-sky-500 p-2 absolute top-3/4 right-1/3">
        <Link href="/" passHref>
          Back to Movies
        </Link>
      </button>
    </div>
  );
}
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const movieId = context.params.movieId;

  if (!movieId) return { notFound: true };
  const resp = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=6563c3cef5083ff24c5f426a28004f38&language=en-US`
  );
  const data = await resp.json();
  return {
    props: {
      movie: data,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
