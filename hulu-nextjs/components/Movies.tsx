import Link from "next/link";
import { Movie } from "../models";

export interface MoviesProps {
  movies: Movie[];
  isLoading: boolean;
}

export default function Movies({ isLoading, movies }: MoviesProps) {
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies?.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;

        return (
          <Link href={`/movies/${id}`} key={id} passHref>
            <article className="movie">
              <img src={poster === "N/A" ? url : poster} alt={title} />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
}
