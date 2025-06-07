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
    <div className="w-full md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl mx-auto py-6 lg:px-0 lg:py-8 font-[family-name:var(--font-geist-sans)]">
      <div>
        <p className="mb-4 md:mb-6 lg:mb-8 text-center font-bold">YoLo</p>
        {/* <div className="mt-6 mb-20 h-px w-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent"></div> */}
      </div>
      <div className="bg-white dark:bg-black px-8 py-16 rounded cursor-none">
        <div className="grid grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_2fr] gap-4 xl:gap-20">
          <div className="col-start-1">
            <Today />
          </div>
          <div className="col-start-2">
            <CalDaysPassed initialDate={new Date()} />
          </div>
          <div className="col-span-full xl:col-span-1 xl:col-start-3 mt-12 xl:mt-0">
            <WeeksPassed />
          </div>
        </div>
        <div className="mt-16 xl:mt-12">
          <DaysPassed />
        </div>
      </div>
      <div className="px-8 md:px-0 mt-24 xl:mt-36">
        <InfoAbout />
      </div>
      <div className="px-8 md:px-0 mt-24 xl:mt-36">
        <SuggestedReading />
      </div>
      <div className="px-8 md:px-0">
        <OtherInfo />
      </div>
      <div className="px-8 md:px-0">
        <FooterTest />
      </div>
    </div>
  );
}
