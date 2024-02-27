import { useTitle } from "@/hooks/useTitle";
import DevelopmentCycle from "../components/DevelopmentCycle";
import SkillsDetails from "../components/SkillsDetails";
import { BugOff } from "lucide-react";

function Skills() {
  useTitle("Habilidades");
  return (
    <section className="w-full h-full min-w-[355px]">
      <div className="mx-auto relative xl:w-[90%] h-[60%] hidden xl:block">
        <DevelopmentCycle />
      </div>
      <div className="mx-auto relative w-[90%] h-[55%] xl:hidden">
        <BugOff className=" w-[8rem] h-[8rem] mx-auto top-[25%] relative" />
      </div>
      <div className="flex flex-col lg:flex-row gap-[4rem] xl:gap-[12rem] relative md:left-[1rem] xl:left-[5rem] ">
        <SkillsDetails />
      </div>
    </section>
  );
}

export default Skills;
