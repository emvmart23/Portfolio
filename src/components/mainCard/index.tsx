import dataExperience from "../../data/dataExperiencie.json";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

function MainCard() {
  return (
    <div className="w-[15rem] sm:w-[80%] max-w-xl min-w-[300px] lg:min-w-[409px] mx-auto">
      <Card className="w-full h-full">
        <CardHeader className="mb-2">
          <CardTitle>Experiencia Laboral</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-3">
          {dataExperience.map(({ company, email, responsible_by }, index) => (
            <div key={index} className="flex items-center space-x-3 justify-between mb-4">
              <div className="flex items-center space-x-2 mb-5">
                <Avatar>
                  <AvatarImage src="/avatars/01.png" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{company}</p>
                  <p className="text-[0.5rem] sm:text-[0.9rem] text-muted-foreground">
                    {email}
                  </p>
                </div>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="w-12 md:w-28" size="icon">
                    <span className="invisible md:visible">Referencia</span>
                    <ChevronDown height={20} width={20} className=""/>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-64 ">
                  <p
                    className="leading-5 p-3 text-sm font-medium text-muted-foreground"
                  >
                    {responsible_by}
                  </p>
                </PopoverContent>
              </Popover>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default MainCard;
