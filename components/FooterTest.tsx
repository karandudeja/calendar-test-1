import Link from "next/link";
import { isLeapYear, differenceInCalendarDays } from "date-fns";

const FooterTest = () => {
    const today = new Date();
    const daysThisYear = isLeapYear(today) ? 366 : 365;
    const yearStart = new Date(today.getFullYear(), 0, 1);
    const daysPassed = differenceInCalendarDays(today, yearStart);
    const daysRemaining = daysThisYear - daysPassed;
    
    return(
        <footer className="text-sm">
            <div className="w-full h-0.25 bg-zinc-900 dark:bg-zinc-200"></div>
            <div className="py-4">
                <div className="flex flex-col lg:flex-row lg:justify-between font-medium">
                    <div className="flex justify-between lg:min-w-4/7">
                        <p className="text-zinc-300">You only live once.</p>
                        <p className="text-rose-900 text-right lg:text-center">{daysRemaining} days <br/><span className="text-zinc-400 dark:text-zinc-600 text-xs lg:text-sm">remaining this year</span></p>
                    </div>
                
                    <div className="w-full h-0.25 my-6 bg-zinc-200 dark:bg-zinc-700 block lg:hidden"></div>
                    
                    <div className="flex gap-8 text-zinc-600">
                        <Link href="/plan">Plan</Link>
                        <Link href="/about">About YoLo</Link>
                    </div>
                </div>
                <div className="flex text-zinc-400 text-xs gap-6 mt-10 xl:mt-12">
                    <p>Copyright {today.getFullYear()}.</p>
                    <p>Terms & Conditions.</p>
                </div>
            </div>
        </footer>
    );
}

export default FooterTest;