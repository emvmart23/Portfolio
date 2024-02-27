import { BatteryFull } from "lucide-react";
import { Slider } from "@/components/ui/Slider";
import { AnimatedParagraph, AnimatedTitle } from "@/components/Animation";

export const levelSkills = [
  {
    name: "React & JavaScript & HTML & CSS",
    service: "Desarrollo de paginás web",
    level: (
      <Slider className="w-[48%]" disabled defaultValue={[95]} step={1} />
    ),
  },
  {
    name: "ViteJS & NextsJS & NodeJS",
    service: "Herramientas de base de datos(MongoDB, etc)",
    level: (
      <Slider className="w-[48%]" disabled defaultValue={[70]} step={1} />
    ),
  },
  {
    name: "Tailwind CSS & Chakra-UI",
    service: "Colaborador (Proyectos externos)",
    level: (
      <Slider className="w-[48%]" disabled defaultValue={[70]} step={1} />
    ),
  },
  {
    name: "Git & Github & Scrum & Jest",
    service: "Integración de API",
    level: (
      <Slider className="w-[48%]" disabled defaultValue={[80]} step={1} />
    ),
  },
];

function SkillsDetails() {
  return (
    <>
      <div className="w-full md:min-w-[453px]">
        <AnimatedTitle text="Acerca de mi habilidades..." className="font-bold text-[1.4rem] mb-7"/>
        <ul className="w-full">
          {levelSkills.map((level, index) => (
            <li key={index} className="flex items-center gap-8 mb-4">
              {level.level}
              <AnimatedParagraph text={level.name}/>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:min-w-[270px]">
        <AnimatedTitle text="Acerca de mis servicios..." className="font-bold text-[1.4rem] mb-7"/>
        <ul className="font-semibold text-center">
          {levelSkills.map((servi, index) => (
            <li key={index} className="mb-4 flex gap-10">
              <BatteryFull />
              <AnimatedParagraph text={servi.service}/>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SkillsDetails;
