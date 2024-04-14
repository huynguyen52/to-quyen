type TimelineCardProps = {
  title: string;
  subTitle: string;
  date: string;
  index: number;
};

const TimelineCard = ({ title, subTitle, date, index }: TimelineCardProps) => {
  return (
    <div
      className={`flex flex-col justify-start border-l border-dashed border-[#939AFF] pl-2 text-[#AAAAAA] hover:border-solid hover:text-[#FFFFFF] ${
        index % 2 === 0 ? "pb-4" : "pt-4"
      }`}
    >
      <h1 className="text-xs sm:text-sm">{title}</h1>
      <h2 className="text-xs text-[#939AFF] sm:text-sm">{subTitle}</h2>
      <time className="text-xs sm:text-sm">{date}</time>
    </div>
  );
};

export default TimelineCard;
