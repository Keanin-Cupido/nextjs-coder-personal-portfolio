export default function SkillLevel({skill, progress, colour}) {
    const percentageLevel = String(Math.round(648 * (progress/100)));
    console.log(percentageLevel);
    return (
        <div className="flex flex-col items-start justify-start gap-2">
            <p className="">{skill}</p>
            <div className="w-[648px] h-[8px] rounded-md bg-gray-500">
            </div>
            <div className={`w-[${percentageLevel}px] h-[8px] rounded-md bg-[orange]`}></div>
        </div>
    )
}