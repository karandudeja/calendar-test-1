import Image from "next/image";
import Today from "../../components/Today";
import CalDaysPassed from "../../components/CalDaysPassed";
import WeeksPassed from "../../components/WeeksPassed";

export default function Home() {
  return (
    <div className="w-full lg:w-2/3 lg:mx-auto lg:py-8 font-[family-name:var(--font-geist-sans)]">
      <div>
        <p className="text-center font-bold">YoLo App</p>
        <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
      </div>
      <div className="grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_2fr] xl:gap-20">
          <Today />
          <CalDaysPassed initialDate={new Date()} />
          <WeeksPassed />
      </div>
    </div>
  );
}
