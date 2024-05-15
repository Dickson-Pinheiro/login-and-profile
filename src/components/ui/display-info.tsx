export default function DisplayInfo({name, content}: {name: string, content: string}){
    return(
        <div className="text-black2">
            <span className="text-[14px]">Your <strong className="font-bold">{name}</strong></span>
            <div className="w-full h-11 rounded-lg bg-white4 p-4">
                <p className="text-xs">{content}</p>
            </div>
        </div>
    )
}