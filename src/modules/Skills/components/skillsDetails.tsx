import { BatteryFull } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export const levelSkills = [
  {
    name: "React & JavaScript & HTML & CSS",
    service: "Desarrollo de paginas web",
    level: (
      <Slider className="w-[40%]" disabled defaultValue={[100]} step={1} />
    ),
  },
  {
    name: "ViteJS & NextsJS & NodeJS",
    service: "",
    level: (
      <Slider className="w-[35%]" disabled defaultValue={[100]} step={1} />
    ),
  },
  {
    name: "Tailwind CSS & Chakra-UI",
    service: "Colaborador (Proyectos externos)",
    level: (
      <Slider className="w-[30%]" disabled defaultValue={[100]} step={1} />
    ),
  },
  {
    name: "Git & Github & Scrum & Jest",
    service: "Integracion de API",
    level: (
      <Slider className="w-[48%]" disabled defaultValue={[100]} step={1} />
    ),
  },
];

function SkillsDetails() {
  return (
    <>
      <div className="w-full md:min-w-[453px]">
        <h2 className="font-bold text-[1.4rem] mb-7">
          Acerca de mi habilidades...
        </h2>
        <ul className="w-full">
          {levelSkills.map((level, index) => (
            <li key={index} className="flex items-center gap-8 mb-4">
              {level.level}
              {level.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:min-w-[270px]">
        <h2 className="font-bold text-[1.4rem] mb-7">
          Acerca de mis servicios...
        </h2>
        <ul className="font-semibold text-center">
          {levelSkills.map((servi, index) => (
            <li key={index} className="mb-4 flex gap-10">
              <BatteryFull />
              {servi.service}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SkillsDetails;
