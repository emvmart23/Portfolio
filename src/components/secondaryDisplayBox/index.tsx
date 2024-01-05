import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "../ui/separator";
import { NavLink } from "react-router-dom";
import { socialItems } from "@/constans/SocialItems";

function secondaryDisplayBox() {
  return (
    <div className="mx-auto mb-12 lg:mb-0 w-full min-w-[300px]">
      <Tabs defaultValue="socials" className="w-full h-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="socials">Redes sociales</TabsTrigger>
          <TabsTrigger value="study">Estudios</TabsTrigger>
        </TabsList>
        <TabsContent value="socials" className="h-[80%]">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-md">Sigueme!</CardTitle>
              <CardDescription>
                <p className="text-xs lg:text-[0.9rem] text-muted-foreground relative top-5">
                  Si quieres conocer más detalles sobre mi trayectoria
                  profesional y explorar mis intereses, te animo a seguirme en
                  las redes sociales. Allí encontrarás contenido exclusivo,
                  reflexiones y enlaces a recursos relevantes
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-1 relative top-">
              <Separator className="my-2 mb-7" />
              <div className="flex h-5 items-center space-x-4 text-s">
                <ul className="flex gap-3 justify-between items-center">
                  {socialItems.map((item, index) => (
                    <>
                      <NavLink
                        to={item.link}
                        key={index}
                        className="w-8 h-8 hover:scale-125 hover:transition-all delay-125"
                      >
                        {item.logo}
                      </NavLink>
                      <Separator
                        className="w-[0.1rem] h-8"
                        orientation="vertical"
                      />
                    </>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="study" className="h-[80%]">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>"</CardTitle>
              <CardDescription>""</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default secondaryDisplayBox;
