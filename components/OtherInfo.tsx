import BuyCoffee from "./BuyCoffee";
import GiveFeedback from "./GiveFeedback";


function OtherInfo() {
    return (
        <div className="mt-20 mb-40">
            <div className="w-full h-0.25 bg-zinc-950 dark:bg-zinc-400"></div>
            <p className="font-semibold mt-8 mb-12 cursor-default">Other Info.</p>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
                <GiveFeedback />
                <div className="w-full lg:hidden h-0.25 bg-zinc-300 dark:bg-zinc-700"></div>
                <BuyCoffee />
            </div>
        </div>
    );
}

export default OtherInfo;