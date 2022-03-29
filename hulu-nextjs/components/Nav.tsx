import * as React from "react";
import requests from "../ultis/request";
export default function Nav() {
  return (
    <nav>
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title }]) => (
          <h2
            key={key}
            className="last:pr-24 cursor-pointer transiton duration-100 transform hover:scale-125 hover:text-white  active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}
