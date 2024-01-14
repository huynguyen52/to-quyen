import { useState } from 'react';
import upArrow from '../assets/up-arrow.svg';
import downArrow from '../assets/down-arrow.svg';

type AccordionProps = {
  data: {
    title: string;
    content: string;
  }[];
};

const Accordion = ({ data }: AccordionProps) => {
  const [active, setActive] = useState(-1);

  const toggle = (index: number) => {
    if (active === index) {
      return setActive(-1);
    }
    setActive(index);
  };
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index} className="collapse ">
            <input
              type="checkbox"
              className="peer"
              checked={active === index}
              onChange={() => toggle(index)}
            />
            <div className="collapse-title text-lg lg:text-xl font-medium pl-0">
              {item.title}
              <img
                src={active === index ? upArrow : downArrow}
                alt="collapse icon"
                className="absolute top-1/4 end-3 w-[25px]"
              />
            </div>
            <div className="collapse-content">
              <div className=" pl-6">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
