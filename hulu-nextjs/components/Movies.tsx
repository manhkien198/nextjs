import Link from "next/link";
import { useRouter } from "next/router";
import { Movie } from "../models";

export interface MoviesProps {
  movies: Movie[];
}

export default function Movies({ movies }: MoviesProps) {
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
  if (!movies?.length) {
    return <div className="text-3xl">No film</div>;
  }
  return (
    <section className="movies">
      {movies?.map((movie) => {
        return (
          <Link href={`/movies/${movie.id}`} key={movie.id} passHref>
            <article className="movie">
              <img
                src={
                  movie?.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`
                    : url
                }
                alt={movie?.title}
              />
              <div className="movie-info">
                <h4 className="title">{movie?.title}</h4>
                <p className="truncate">{movie?.overview}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
}
