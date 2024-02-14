import { MainCard, MainDisplayBox, SecondaryDisplayBox } from "@/common/components";
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
