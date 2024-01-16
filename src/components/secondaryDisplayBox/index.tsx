import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
              <CardTitle className="text-md mb-1">Sígueme!</CardTitle>
              <p className="text-sm lg:text-[0.9rem] text-muted-foreground relative top-5">
                Si quieres conocer más detalles sobre mi trayectoria y explorar
                mis intereses, te animo a seguirme en las redes sociales. Allí
                encontrarás más información y enlaces.
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
              <CardHeader className="mb-4">
                <CardTitle className="flex gap-x-[0.1rem]">
                  <span>Tecsup</span>

                  <Framer color="#1d4ed8" />
                </CardTitle>
                <span className="text-sm lg:text-[0.9rem] text-muted-foreground">
                  Diseño y Desarrollo de Software
                </span>
              </CardHeader>
              <CardContent className="text-sm lg:text-[0.9rem] text-muted-foreground">
                <span className="xl:ml-[1rem] mb-3 flex gap-2 items-center">
                  <Calendar className="" />
                  Desde marzo del 2021
                </span>
                <span className="xl:ml-[1rem] flex gap-2 items-center">
                  <CalendarCheck />
                  Hasta diciembre del 2023
                </span>
              </CardContent>
            </Card>
            <Card className="w-full lg:w-[50%]">
              <CardHeader className="mb-4">
                <CardTitle className="flex gap-x-[0.1rem] items-center">
                  <span className="">AWS</span>
                  <Framer color="#fbbf24" />
                </CardTitle>
                <span className="text-sm lg:text-[0.9rem] text-muted-foreground">
                  AWS Academy Cloud Foundations
                </span>
              </CardHeader>
              <CardContent className="text-sm lg:text-[0.9rem] text-muted-foreground">
                <span className="xl:ml-[1rem] mb-3 flex gap-2 items-center">
                  <Calendar className="" />
                  Desde mayo del 2023
                </span>
                <span className="xl:ml-[1rem] flex gap-2 items-center ">
                  <CalendarCheck />
                  Hasta junio del 2023
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
