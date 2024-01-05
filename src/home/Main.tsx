import MainCard from "@/components/mainCard";
import MainDisplayBox from "@/components/mainDisplayBox";
import SecondaryDisplayBox from "@/components/secondaryDisplayBox";
export function Main() {
  return (
    <>
      <MainDisplayBox />
      <div className="flex flex-col lg:flex-row gap-x-12">
        <SecondaryDisplayBox />
        <MainCard />
      </div>
    </>
  );
}
