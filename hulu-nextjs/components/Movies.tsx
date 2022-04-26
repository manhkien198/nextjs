import Link from "next/link";
import { Movie } from "../models";

export interface MoviesProps {
  movies: Movie[];
}

export default function Movies({ movies }: MoviesProps) {
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
  if (!movies.length) {
    return <div>No film</div>;
  }
  return (
    <section className="movies">
      {movies?.map((movie) => {
        const { id, poster_path: poster, title, overview } = movie;

        return (
          <Link href={`/movies/${id}`} key={id} passHref>
            <article className="movie">
              <img
                src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : url}
                alt={title}
              />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p className="truncate">{overview}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
}
