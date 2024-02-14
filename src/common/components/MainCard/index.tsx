import dataExperience from "../../../data/dataExperiencie.json"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Briefcase, CalendarDays } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/Tooltip";

function MainCard() {
  return (
    <div className="w-[15rem] sm:w-[80%] max-w-xl min-w-[300px] lg:min-w-[409px] mx-auto shadow-xl">
      <Card className="w-full h-full">
        <CardHeader className="mb-2">
          <CardTitle>Experiencia Laboral</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-3">
          {dataExperience.map(({ company, email, responsible_by, date, lider }, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 justify-between mb-4"
            >
              <div className="flex items-center space-x-2 mb-5">
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{company}</p>
                  <p className="text-[0.5rem] sm:text-[0.9rem] text-muted-foreground">
                    {email}
                  </p>
                </div>
              </div>
              <TooltipProvider>
                <Tooltip delayDuration={1}>
                  <TooltipTrigger asChild>
                    <Button className="w-12 md:w-28" size="icon">
                      <span className="invisible md:visible">Referencia</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-primary" side="bottom">
                    <div className="w-[16rem] p-3 flex justify-between space-x-4">
                      <Avatar className="p-0">
                        <Briefcase className="w-full " />
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">{lider}</h4>
                        <p className="text-sm">{responsible_by}</p>
                        <div className="flex items-center pt-2">
                          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                          <span className="text-xs text-muted-foreground">
                            {date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default MainCard;
