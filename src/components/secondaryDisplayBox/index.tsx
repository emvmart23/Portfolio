import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "../ui/separator";
import { NavLink } from "react-router-dom";
import { socialItems } from "@/constans/SocialItems";
import { Calendar, CalendarCheck, Framer } from "lucide-react";

function secondaryDisplayBox() {
  return (
    <div className="mx-auto mb-12 lg:mb-0 w-full min-w-[300px] shadow-xl">
      <Tabs defaultValue="socials" className="w-full h-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="socials">Redes sociales</TabsTrigger>
          <TabsTrigger value="study">Estudios</TabsTrigger>
        </TabsList>
        <TabsContent value="socials" className="h-[82%]">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-md">Sigueme!</CardTitle>
              <p className="text-sm lg:text-[0.9rem] text-muted-foreground relative top-5">
                Si quieres conocer más detalles sobre mi trayectoria y explorar
                mis intereses, te animo a seguirme en las redes sociales. Allí
                encontrarás mas informacion y enlaces.
              </p>
            </CardHeader>
            <CardContent className="space-y-1">
              <Separator className="my-2 mb-7" />
              <div className="flex h-5 items-center space-x-4">
                <ul className="flex gap-3 justify-between items-center">
                  {socialItems.map((item, index) => (
                    <div key={index} className="flex">
                      <NavLink
                        key={index}
                        to={item.link}
                        className="w-8 h-8 hover:scale-125 hover:transition-all delay-125"
                      >
                        {item.logo}
                      </NavLink>
                      <Separator
                        className="w-[0.1rem] h-8"
                        orientation="vertical"
                      />
                    </div>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="study" className="h-[82%]">
          <div className="flex flex-col sm:flex-row gap-2 h-full">
            <Card className="h-full w-full lg:w-[50%]">
              <CardHeader>
                <CardTitle className="flex">
                  <img
                    src="./logoTecsup.webp"
                    alt="Tecsup"
                    className="w-[10rem] h-[2.5rem]"
                  />
                  <Framer className="relative top-1 left-2" />
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm lg:text-[0.9rem] text-muted-foreground">
                <span className="xl:ml-[1rem] mb-3 flex gap-2 items-center">
                  <Calendar className="" />
                  Desde diciembre del 2022
                </span>
                <span className="xl:ml-[1rem] flex gap-2 items-center">
                  <CalendarCheck />
                  Hasta marzo del 2023
                </span>
              </CardContent>
            </Card>
            <Card className="w-full lg:w-[50%]">
              <CardHeader>
                <CardTitle className="flex">
                  <img
                    src="./logoAws.webp"
                    alt="AWS"
                    className="w-[7rem] h-[3.6rem] relative bottom-[0.5rem]"
                  />
                  <Framer className="relative top-1 right-4" />
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm lg:text-[0.9rem] bottom-4 relative text-muted-foreground">
                <span className="xl:ml-[1rem] flex gap-2 items-center ">
                  <CalendarCheck />
                  En junio 12 del 2023
                </span>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default secondaryDisplayBox;
