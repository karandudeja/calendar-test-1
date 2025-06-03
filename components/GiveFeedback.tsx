import Image from "next/image";
import { Button } from "@/components/ui/button"

function GiveFeedback(){
    return (
        <div className="lg:w-1/2">
            <div className="flex items-center">
                <div className="w-7 h-7 rounded-full bg-black dark:bg-zinc-300 flex items-center justify-center animate-rotate-infinite">
                    <Image
                    src="/like-white.svg"
                    alt="Feedback Illustration"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain p-2"
                    />
                </div>
                <p className="ml-3 text-2xl font-bold">Give Feedback</p>
            </div>
            <p className="mt-8">Your feedback makes stuff better!</p>
            <p className="">Let me know, how can this thing be improved for you.</p>
            <div className="mt-8">
                <Button>Go to Feedback</Button>
            </div>
        </div>
    );
}

export default GiveFeedback;