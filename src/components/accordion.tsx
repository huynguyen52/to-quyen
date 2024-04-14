import { useState } from "react";
import upArrow from "../assets/up-arrow.svg";
import downArrow from "../assets/down-arrow.svg";
import preview from "../assets/preview.svg";

type AccordionProps = {
  data: {
    title: {
      image: string;
      text: string;
    };
    contents: string[];
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
            <div className="collapse-title pl-0 text-lg font-medium lg:text-xl">
              <img src={item.title.image} alt={item.title.text} />
              <img
                src={active === index ? upArrow : downArrow}
                alt="collapse icon"
                className="absolute end-3 top-1/4 w-[25px]"
              />
            </div>
            <div className="collapse-content">
              <div className="pl-6">
                <div className="flex flex-col gap-2">
                  {item.contents.map((content, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-[#939AFF]"
                    >
                      <img src={preview} alt="list icon" />
                      <p className="sm:text-md text-sm md:text-lg lg:text-xl">
                        {content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
