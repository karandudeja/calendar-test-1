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
                <div className="flex font-medium justify-between">
                    <p className="text-zinc-400">You only live once.</p>
                    <p className="text-rose-900">{daysRemaining} days remaining this year</p>
                    <div className="flex xl:gap-8 text-zinc-600">
                        <Link href="/plan">Plan</Link>
                        <Link href="/about">About YoLo</Link>
                    </div>
                </div>
                <div className="flex text-zinc-400 text-xs xl:gap-6 xl:mt-12">
                    <p>Copyright {today.getFullYear()}.</p>
                    <p>Terms & Conditions.</p>
                </div>
            </div>
        </footer>
    );
}

export default FooterTest;