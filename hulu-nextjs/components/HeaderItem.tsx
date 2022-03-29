import * as React from "react";

export interface HeaderItemProps {
  Icon: React.ElementType;
  title: string;
}

export default function HeaderItem({ Icon, title }: HeaderItemProps) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}
