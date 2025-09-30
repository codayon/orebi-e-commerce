import { Link } from "react-router";

import cn from "@/utils/cn";

export default function MenuItem({ to = "", label = "", className = "" }) {
  return (
    <li>
      <Link
        to={to}
        className={cn(
          "text-graphite hover:text-black text-center transition-all duration-200 select-none",
          className
        )}
      >
        {label}
      </Link>
    </li>
  );
}
