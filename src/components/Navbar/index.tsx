import { SectionsItems } from "@/constans/SectionItems";
import NavbarItems from "./NavbarItems";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/Tooltip";
import { ArrowRightToLine } from "lucide-react";

interface NavbarProps {
  isExpanded: boolean;
  btnHandleMenuBlock: () => void;
}

function Navbar({ btnHandleMenuBlock, isExpanded }: NavbarProps) {
  return (
    <nav className="mt-16">
      {SectionsItems.map((links, index) => (
        <NavbarItems {...links} key={index} isExpanded={isExpanded} />
      ))}

      <TooltipProvider>
        <Tooltip delayDuration={5}>
          <TooltipTrigger asChild className="hidden">
            <Button
              className="w-[3rem] absolute top-[45rem] lg:top-[49rem] -right-[2rem]"
              onClick={btnHandleMenuBlock}
            >
              <ArrowRightToLine
                width={24}
                height={24}
                className={`${isExpanded && "rotate-180"}`}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>{isExpanded ? "close" : "open"}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  );
}

export default Navbar;
