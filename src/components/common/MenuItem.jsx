import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

const MenuItem = ({ to = "", label = "", className = "" }) => {
  return (
    <li>
      <Link
        to={to}
        className={twMerge(
          "text-graphite hover:text-black text-center transition-all duration-200 select-none",
          className
        )}
      >
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
