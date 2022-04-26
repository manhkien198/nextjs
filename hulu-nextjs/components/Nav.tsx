import { useRouter } from "next/router";
import request from "../ultis/request";

export interface NavProps {}
export default function Nav() {
  const router = useRouter();

  return (
    <nav>
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(request).map(([key, { title, url }]) => (
          <button
            key={key}
            className="last:pr-24 cursor-pointer transiton duration-100 transform hover:scale-125 hover:text-white  active:text-red-500"
            onClick={() => router.push(`?genre=${key}`)}
          >
            {title}
          </button>
        ))}
      </div>
    </nav>
  );
}
