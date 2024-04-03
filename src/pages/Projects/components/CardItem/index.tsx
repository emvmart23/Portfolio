import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { useState } from "react";
import { data as dataProjets } from "../../data/dataProjects";
import { Github } from "lucide-react";

interface CardProps {
  isOpenDrawer: boolean;
  setIsOpenDrawer: (value: boolean) => void;
  setProject: (value: null) => void;
}

function CardItem({ isOpenDrawer, setIsOpenDrawer, setProject }: CardProps) {
  const [isHover, setIsHover] = useState(false);

  const handlerProject = (dataCard: any) => {
    setProject(dataCard);
    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <div className="flex flex-wrap items-center gap-y-12 gap-x-9 justify-center relative min-w-[11rem] pb-8">
      {dataProjets.map((data, index) => (
        <Card
          key={index}
          className={`rounded-[0.2rem] max-w-[23rem] min-h-[30.8rem] hover:scale-105 duration-500 transition-all bg-muted shadow-xl filter grayscale hover:grayscale-0${isHover && " shadow-2xl"
            }`}
          onMouseOut={() => setIsHover(false)}
          onMouseOver={() => setIsHover(true)}
          onClick={() => handlerProject(data)}
        >
          <CardContent className="p-0 w-[22rem] h-[17.8rem] relative flex justify-center items-center">
            <img
              src={data.image}
              alt={data.image}
              className="rounded-t-sm object-cover w-full h-full"
            />
          </CardContent>
          <CardFooter className="flex flex-col justify-start items-start gap-1">
            <h1 className="mt-3 font-[600] text-xs md:text-base flex justify-between items-center w-full">
              <span>{data.name}</span>
              <Github className="w-6 h-6 text-foreground/60" />
            </h1>
            <p className="w-64 truncate">{data.description}</p>
          </CardFooter>
          <div className="grid grid-cols-3 gap-x-2 gap-y-2 p-5">
            {data.lenguages.map(({ name }, index) => (
              <span key={index} className="font-semibold shadow-xl border rounded-full p-[0.3rem] text-center">{name}</span>
            )
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}

export default CardItem;
