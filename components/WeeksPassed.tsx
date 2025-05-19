import { getISOWeek, getISOWeeksInYear } from "date-fns";

function WeeksPassed() {
    const weekNumber = getISOWeek(new Date());
    const today = new Date();
    const janFirst = new Date(today.getFullYear(), 0, 1);
    const totalISOWeeks = getISOWeeksInYear(janFirst);
    const weeksRemaining = totalISOWeeks - weekNumber;

    let weeksVisArray = [];

    for(let i=1; i <= totalISOWeeks; i++){
        if(i < weekNumber){
            weeksVisArray.push(
                { week: i, passed: true, isCurrent: false}
            )
        }
        else if(i === weekNumber){
            weeksVisArray.push(
                { week: i, passed: false, isCurrent: true}
            )
        }
        else{
            weeksVisArray.push(
                { week: i, passed: false, isCurrent: false}
            )
        }   
    }
  return (
    <div>
        <div>
            <div className="flex justify-between text-zinc-500 dark:text-zinc-600">
                <p>Week</p>
                <p>Weeks left</p>
            </div>
            <div className="flex justify-between">
                <p className="font-normal text-2xl ">{weekNumber} <span className="font-normal text-sm text-zinc-400 dark:text-zinc-600">of {totalISOWeeks}</span></p>
                <p className="font-bold text-2xl ">{weeksRemaining}</p>
            </div>
            <div className="flex justify-around mt-4">
                {weeksVisArray.map((week, index) => (
                    <div key={index} className={`flex items-center justify-center lg:h-9 w-0.75 rounded-sm ${week.passed ? 'bg-rose-100 dark:bg-rose-300' : week.isCurrent ? 'lg:h-9 w-1.5 bg-rose-600 dark:bg-rose-700' : 'bg-rose-800 dark:bg-rose-900'}`}>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}
export default WeeksPassed;