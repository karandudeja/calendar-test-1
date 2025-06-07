import Link from "next/link";
import { isLeapYear, differenceInCalendarDays } from "date-fns";

const FooterTest = () => {
    const today = new Date();
    const daysThisYear = isLeapYear(today) ? 366 : 365;
    const yearStart = new Date(today.getFullYear(), 0, 1);
    const daysPassed = differenceInCalendarDays(today, yearStart);
    const daysRemaining = daysThisYear - daysPassed;
    
    return(
        <footer className="text-sm cursor-default">
            <div className="w-full h-0.25 bg-zinc-900 dark:bg-zinc-500 mb-4"></div>
            <div className="py-4">
                <div className="flex flex-col font-medium">
                    <div className="flex justify-between">
                        <p className="text-zinc-400 dark:text-zinc-600">You only live once.</p>
                        <p className="text-rose-800 dark:text-zinc-400 text-right">{daysRemaining} days <br/><span className="text-zinc-400 dark:text-zinc-600 font-normal text-xs lg:text-sm">remaining this year</span></p>
                    </div>
                
                    <div className="w-full h-0.25 mt-8 bg-zinc-300 dark:bg-zinc-700"></div>
                    
                    <div className="flex gap-8 text-zinc-600 dark:text-zinc-400 mt-8">
                        <Link href="/plan">Plan</Link>
                        <Link href="/about">About YoLo</Link>
                    </div>
                </div>
                <div className="flex text-zinc-400 dark:text-zinc-700 text-xs font-normal gap-8 my-10 xl:mt-12">
                    <p>Copyright {today.getFullYear()}.</p>
                    <p>Terms & Conditions.</p>
                </div>
            </div>
        </footer>
    );
}

export default FooterTest;