import { useState } from "react";
import { Outlet } from "react-router-dom";
import { BreadcrumbNames, DropdownProfile, Navbar } from "..";

function AppLayout() {
  const [isExpanded, setIsExpanded] = useState(false);

  const btnHandleMenuBlock = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="bg-background h-16 relative border-b-2 z-50 min-w-[530px] md:min-w-[540px]">
        <div className="h-full flex items-center justify-end p-6 gap-16">
          <div
            className={`flex gap-16 justify-between w-full items-center pl-32 ${isExpanded && "pl-[21rem]"
              }`}
          >
            <BreadcrumbNames />
            <div className="relative right-10">
              <DropdownProfile />
            </div>
          </div>
        </div>
        <div
          className={` ${isExpanded ? "w-[15.4rem] h-[1280px]" : "w-20 h-screen"
            } duration-200 bg-background lg:h-screen absolute top-0 border-r`}
        >
          <Navbar
            isExpanded={isExpanded}
            btnHandleMenuBlock={btnHandleMenuBlock}
          />
        </div>
      </div>
      <div
        className={`${isExpanded &&
          "lg:left-[12rem] lg:w-[82%] xl:left-[12rem] xl:w-[85%] lg:scale-95 lg:origin-right"
          } transition-all relative duration-200 h-screen px-16 py-16 left-[4.6rem] w-[85%] md:left-[7rem] md:w-[85%] lg:left-[6rem] lg:w-[90%] min-w-[460px]`}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
