type TimelineCardProps = {
  title: string;
  subTitle: string;
  date: string;
  index: number;
};

const TimelineCard = ({ title, subTitle, date, index }: TimelineCardProps) => {
  return (
    <div
      className={`flex flex-col justify-start pl-2 border-dashed border-[#939AFF] border-l ${
        index % 2 === 0 ? 'pb-4' : 'pt-4'
      }`}
    >
      <h1 className="text-sm text-gray-400">{title}</h1>
      <h2 className="text-sm text-[#939AFF]">{subTitle}</h2>
      <time className="text-sm text-gray-400">{date}</time>
    </div>
  );
};

export default TimelineCard;
