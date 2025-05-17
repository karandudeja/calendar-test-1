import Image from "next/image";
import Today from "../../components/Today";
import CalDaysPassed from "../../components/CalDaysPassed";

export default function Home() {
  return (
    <div className="p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="grid grid-cols-[1fr_1fr] gap-4">
          <Today />
          <CalDaysPassed initialDate={new Date()} />
        </div>
    </div>
  );
}
