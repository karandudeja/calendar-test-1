import BuyCoffee from "./BuyCoffee";
import GiveFeedback from "./GiveFeedback";


function OtherInfo() {
    return (
        <div className="mt-20 mb-32">
            <div className="w-full h-0.25 bg-zinc-950 dark:bg-zinc-100"></div>
            <p className="font-semibold mt-8 mb-12">Other Info.</p>
            <div className="flex gap-8">
                <GiveFeedback />
                <BuyCoffee />
            </div>
        </div>
    );
}

export default OtherInfo;