import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import { data as dataProjets } from "../data/dataProjects";
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
    <div className="flex flex-wrap items-center gap-y-5 gap-x-6 justify-center relative min-w-[11rem]">
      {dataProjets.map((data, index) => (
        <Card
          key={index}
          className={`rounded-[0.2rem] max-w-[23rem] min-h-50 hover:scale-105 duration-500 transition-all bg-muted shadow-xl filter grayscale hover:grayscale-0${
            isHover && " shadow-2xl"
          }`}
          onMouseOut={() => setIsHover(false)}
          onMouseOver={() => setIsHover(true)}
          onClick={() => handlerProject(data)}
        >
          <CardContent className="p-0 w-[22.8rem] h-[17.8rem]">
            <img
              src={data.image}
              alt={data.image}
              className="rounded-t-sm object-cover w-full h-full"
            />
          </CardContent>

          <CardFooter>
            <h1 className="mt-3 font-[600] text-xs md:text-base">
              {data.name}
            </h1>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default CardItem;
