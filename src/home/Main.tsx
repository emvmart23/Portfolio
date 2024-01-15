import MainCard from "@/components/mainCard";
import MainDisplayBox from "@/components/mainDisplayBox";
import SecondaryDisplayBox from "@/components/secondaryDisplayBox";
import { useTitle } from "@/hooks/useTitle";

function Main() {
  useTitle("Inicio");
  return ( 
    <>
      <MainDisplayBox />
      <div className="flex flex-col lg:flex-row gap-x-4">
        <SecondaryDisplayBox />
        <MainCard />
      </div>
    </>
  );
}

export default Main
