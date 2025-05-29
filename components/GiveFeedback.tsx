import Image from "next/image";

function GiveFeedback(){
    return (
        <div className="xl:w-1/2">
            <div className="flex items-center">
                <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
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
            <p className="mt-8">Your feedback improves it for others!</p>
            <p className="">Please let us know, how this thing can be improved for you.</p>
            <button className="bg-zinc-900 text-white px-4 py-2 mt-8 rounded">Go to Feedback</button>
        </div>
    );
}

export default GiveFeedback;