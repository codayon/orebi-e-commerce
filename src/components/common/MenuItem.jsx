import cn from "@/utils/cn";
import { Link } from "react-router";

const MenuItem = ({ to = "", label = "", className = "" }) => {
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
};

export default MenuItem;
