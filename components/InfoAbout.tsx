function InfoAbout() {

    const arrGifLinks = [
        {
            creator: "Will Kim",
            url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHhndnN1eWppdTc4cjZ1MzNuMzNmcm1mb2lobGlvMGx0aTd3azhnMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h00IVlxNjPxdu/giphy.gif",
            creatorURL: "https://giphy.com/gifs/willkim-art-film-animation-h00IVlxNjPxdu"
        },
        {
            creator: "GIF IT UP",
            url : "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2F6Yzd2a2l3eXN4d2V5bzNhdmg5aDVpazhxdWJ3YXlpdzV1d2UzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8sXM8Noz17e7E5QZ6W/giphy.gif",
            creatorURL: "https://giphy.com/gifs/gifitup-seasons-gifitup2024-gifitup-2024-8sXM8Noz17e7E5QZ6W"
        },
        {
            creator: "Nino Paulito",
            url: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTNnMjU3M2toOHB0NnVkMG9sZ3A2dzhxZG52aXJneDFteXFtOXh2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0BKANEFmmlYCWm1q/giphy.gif",
            creatorURL: "https://giphy.com/gifs/nino-paulito-lurk-melissa-choong-xT0BKANEFmmlYCWm1q"
        },
        {
            creator: "Miranda Javid",
            url: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjJ0MmQycm0zMjUzZ2Z5bXBmYWNzaXY2NHIzdWozMmNodThmejJuaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kIL1DN9XCtxfxF5mMR/giphy.gif",
            creatorURL: "https://giphy.com/gifs/kIL1DN9XCtxfxF5mMR"
        }
    ];

    const randomIndex = Math.floor(Math.random() * arrGifLinks.length);
    const randomGif = arrGifLinks[randomIndex];
    const randomGifUrl = randomGif.url;
    const randomGifCreator = randomGif.creator;
    const randomGifCreatorURL = randomGif.creatorURL;
  
    return (
    
    <div className="info-about xl:mt-36  w-full flex justify-center">
        
            <div className="flex items-center">
                <div className="w-16 aspect-square overflow-hidden rounded-full">
                    <img src={randomGifUrl} alt="Random GIF" className="w-full h-full rounded-lg" />
                </div>
                <div className="ml-6 flex flex-col">
                    <p className="lg:text-lg">More on this experiment in the ABOUT section.</p>
                    <p className="text-xs text-zinc-400 mt-2">Gif from <a href={randomGifCreatorURL} target="_blank">{randomGifCreator}</a></p>
                </div>
        </div>
    </div>
  );
}
export default InfoAbout;