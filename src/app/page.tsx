import Image from "next/image";
import Today from "../../components/Today";
import CalDaysPassed from "../../components/CalDaysPassed";
import WeeksPassed from "../../components/WeeksPassed";
import DaysPassed from "../../components/DaysPassed";
import InfoAbout from "../../components/InfoAbout";
import SuggestedReading from "../../components/SuggestedReading";
import OtherInfo from "../../components/OtherInfo";
import FooterTest from "../../components/FooterTest";

export default function Home() {
  return (
    <div className="w-full lg:w-2/3 lg:mx-auto lg:py-8 font-[family-name:var(--font-geist-sans)]">
      <div>
        <p className="text-center font-bold">YoLo</p>
        <div className="mt-6 mb-20 h-px w-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent"></div>
      </div>
      <div className="grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_2fr] xl:gap-20">
          <Today />
          <CalDaysPassed initialDate={new Date()} />
          <WeeksPassed />
      </div>
      <div className="xl:mt-12">
        <DaysPassed />
      </div>
      <div>
        <InfoAbout />
      </div>
      <div>
        <SuggestedReading />
      </div>
      <OtherInfo />
      <FooterTest />
    </div>
  );
}
