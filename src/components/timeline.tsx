import logo1 from '../assets/logo-1.svg';
import logo2 from '../assets/logo-2.svg';
import logo3 from '../assets/logo-3.svg';
import logo4 from '../assets/logo-4.svg';
import logo5 from '../assets/logo-5.svg';
import logo6 from '../assets/logo-6.svg';
import logo7 from '../assets/logo-7.svg';
import logo8 from '../assets/logo-8.svg';
import logo9 from '../assets/logo-9.svg';
import TimelineCard from './timeline-card';

const timelines = [
  {
    title: 'Human Resources and System Integrator',
    subTitle: 'Duy Tan University',
    date: '2015',
    logo: logo1,
  },
  {
    title: 'Internships in Computer network and Communication',
    subTitle: 'Duy Tan University',
    date: '05/2018',
    logo: logo2,
  },
  {
    title: 'UXUI Designer and Android Developer',
    subTitle: 'Duy Tan University',
    date: '11/2020',
    logo: logo3,
  },
  {
    title: 'UXUI Engineer',
    subTitle: 'Baohiemso.ai',
    date: '02/2020',
    logo: logo4,
  },
  {
    title: 'UXUI Designer',
    subTitle: 'Apec Global., JSC',
    date: '11/2021',
    logo: logo5,
  },
  {
    title: 'UXUI Designer',
    subTitle: 'ITNAVI',
    date: '03/2022',
    logo: logo6,
  },
  {
    title: 'UXUI Designer',
    subTitle: 'CredShare',
    date: '04/2022',
    logo: logo7,
  },
  {
    title: 'Product Designer',
    subTitle: 'BIWOCO',
    date: '04/2022',
    logo: logo8,
  },
  {
    title: 'UXUI Designerr',
    subTitle: 'VoltaRocks',
    date: '12/2022',
    logo: logo9,
  },
];

const Timeline = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact ">
      {timelines.map((timeline, index) => (
        <li
          key={index}
          className={`${(index === 1 || index === 2) && 'ml-[-10%]'}`}
        >
          <hr className={`${index === 0 && 'hidden'} bg-[#939AFF]`} />
          <div className="timeline-middle">
            <img src={timeline.logo} alt="Logo" className="w-14" />
          </div>
          <div
            className={`${
              index % 2 === 0 ? 'timeline-start' : 'timeline-end'
            } ml-8`}
          >
            <TimelineCard
              index={index}
              title={timeline.title}
              subTitle={timeline.subTitle}
              date={timeline.date}
            />
          </div>
          <hr className="bg-[#939AFF]" />
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
