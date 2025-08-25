import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

const MenuItem = ({ to, label, className }) => {
  return (
    <li>
      <Link
        to={to}
        className={twMerge(
          "text-gray-a hover:text-black transition duration-300",
          className
        )}
      >
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
