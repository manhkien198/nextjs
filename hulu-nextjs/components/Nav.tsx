import useSWR from "swr";
import fetch from "unfetch";
export interface NavProps {}
export default function Nav({ handleClickCate }) {
  const fetcher = async (url) => {
    const res = await fetch(url);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      // Attach extra info to the error object.
      // error.info = await res.json()
      // error.status = res.status
      throw error;
    }

    return res.json();
  };
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=6563c3cef5083ff24c5f426a28004f38&language=en-US",
    fetcher
  );
  return (
    <nav>
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {data?.genres.map((item) => (
          <button
            key={item.id}
            className="last:pr-24 cursor-pointer transiton duration-100 transform hover:scale-125 hover:text-white  active:text-red-500"
            onClick={() => handleClickCate(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
