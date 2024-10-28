import BarIcon from "@/components/Icons";
import { useTitle } from "@/hooks/useTitle";
import { data } from "../data/data";

function Experience() {
  useTitle("Experiencia");
  return data?.map((ex) => (
    <div className="flex gap-x-6">
      <div>
        <BarIcon className="h-[315px] md:h-[250px] lg:h-[220px]"/>
      </div>
      <div className="md:pt-6 lg:w-[45%]">
        <h2 className="font-semibold mb-2">{ex.role}</h2>
        <p className="font-medium">{ex.factory} :</p>
        <p className="text-[0.9rem]">{ex.description}</p>
      </div>
    </div>
  ));
}

export default Experience;
