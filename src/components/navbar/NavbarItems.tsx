import  { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface ItemProps {
  name: string;
  url: string;
  icon: any;
  isExpanded: boolean;
}

function NavbarItems({ name, url, icon, isExpanded }: ItemProps) {
  const [isHover, setIsHover] = useState(false);
  const location = useLocation();
  const isActive = location.pathname.split("/")[1] === url.split("/")[1];
  return (
    <NavLink
      to={url}
      className={`group flex relative ${
        isExpanded
          ? "w-[12rem] ml-4 origin-left transition-all duration-75"
          : "w-[2.6rem]"
      } h-[3.8rem] mx-auto`}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <div
        className={`${
          isActive && "bg-primary text-muted"
        } p-2 w-full group-hover:bg-primary group-hover:text-muted  rounded transition-all duration-75 origin-left mt-5 flex gap-5 ${
          isActive && isExpanded && "bg-primary origin-left text-muted"
        }`}
      >
        <span>{icon}</span>
        <span className={`${!isExpanded && "scale-0"} origin-left`}>
          {name}
        </span>
      </div>
      {isHover && !isExpanded && (
        <p className=" absolute top-3 bg-muted border left-[3.8rem] w-36 h-full flex items-center pl-2 text-[1.2rem] rounded-r-xl">
          {name}
        </p>
      )}
    </NavLink>
  );
}

export default NavbarItems;
