import cn from "@/utils/cn";

const DropdownItem = ({ divClass = "", labelClass = "", label = "" }) => {
  return (
    <div
      className={cn(
        "bg-onyx border-obsidian border cursor-pointer",
        divClass
      )}
    >
      <h4
        className={cn(
          "text-white opacity-70 hover:opacity-100 hover:font-bold px-8 py-3 transition-all duration-200 ease-in-out",
          labelClass
        )}
      >
        {label}
      </h4>
    </div>
  );
};

export default DropdownItem;
