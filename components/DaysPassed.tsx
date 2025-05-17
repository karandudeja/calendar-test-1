import { isLeapYear, differenceInCalendarDays } from "date-fns";

function DaysPassed(){
    const today = new Date();
    const daysThisYear = isLeapYear(today) ? 366 : 365;
    const yearStart = new Date(today.getFullYear(), 0, 1);
    const daysPassed = differenceInCalendarDays(today, yearStart);
    const daysRemaining = daysThisYear - daysPassed;
    const percentPassed = Math.round((daysPassed/daysThisYear)*100);
    const percentRemaining = 100 - percentPassed;
    
    
    return(
        <div>
            <div className="flex justify-between">
                <p className="font-medium text-zinc-500">Day</p>
                <p className="font-medium text-zinc-500">Days left</p>
            </div>
            <div className="flex justify-between">
                <p className="font-medium text-2xl ">{daysPassed} <span className="font-normal text-lg text-zinc-400">of {daysThisYear}</span></p>
                <p className="font-bold text-2xl ">{daysRemaining}</p>
            </div>
            <div className="w-full h-3 xl:mt-2 rounded bg-zinc-100 flex">
                <div className="h-full rounded-tl-full rounded-bl-full bg-rose-100" style={{width:`${percentPassed}%`}}></div>
                <div className="h-full rounded-tr-full rounded-br-full bg-rose-800 border-0 border-l-3 border-rose-500" style={{width:`${percentRemaining}%`}}></div>
            </div>
            <div className="flex justify-between xl:mt-2 text-xs text-zinc-400">
                <p>Gone: {percentPassed}%</p>
                <p className="text-zinc-500">Remains: {percentRemaining}%</p>
            </div>
        </div>
    );
}

export default DaysPassed;