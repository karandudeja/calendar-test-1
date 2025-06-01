import Image from "next/image";

function BuyCoffee(){
    return (
        <div className="lg:w-1/2">
            <div className="flex items-center">
                <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                    <Image
                    src="/coffee-white.svg"
                    alt="Feedback Illustration"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain p-1.75"
                    />
                </div>
                <p className="ml-3 text-2xl font-bold">Support with Love</p>
            </div>
            <p className="mt-8">Small contributions, big impact!</p>
            <p className="">Your support means a lot.</p>
            <button className="bg-zinc-900 text-white px-4 py-2 mt-8 rounded">Buy me a Coffee</button>    
        </div>
    );
}

export default BuyCoffee;