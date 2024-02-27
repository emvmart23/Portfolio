import { AnimatedParagraph, AnimatedTitle } from "@/components/Animation";
import { Card, CardContent, CardHeader } from "../../../components/ui/Card";
function mainDisplayBox() {
  return (
    <div className="mx-auto mb-16 w-full min-w-[300px] h-[18.1rem] shadow-xl">
      <Card className="h-full lg:flex">
        <CardHeader className="md:flex md:flex-col">
          <AnimatedTitle text="Marzo 29, 2002" className="text-sm font-medium mb-32" />
          <AnimatedTitle text="Hola, Soy Max Martinez Saavedra" className="text-md 2xl:text-[1.7rem] font-bold" />
          <AnimatedParagraph text="Desarrollador de software, estoy constantemente actualizando mis
            conocimientos sobre las últimas tendencias y tecnologías para
            ofrecer soluciones eficientes." className="text-xs md:text-[0.9rem] text-muted-foreground  min-w-[320px]" />
        </CardHeader>
        <CardContent className="invisible lg:visible p-0 w-full h-full">
          <img
            src="./faceFormat.svg"
            alt="myface"
            className="w-full h-full"
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default mainDisplayBox;
