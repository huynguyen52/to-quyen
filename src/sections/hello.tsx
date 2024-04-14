import arrowLeft from "../assets/arrow-left.svg";
import Typewriter from "typewriter-effect";

const HelloSection = () => {
  return (
    <section className="container mx-auto h-[90vh]" id="hello">
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center space-y-6 md:items-start md:space-y-12">
          <h1 className="text-xl font-medium md:text-3xl lg:text-5xl xl:text-6xl">
            Hello, <br />
            I'm Harley - Quyen
            <br />
            <div className="bg-gradient-to-r from-[#4242CE] to-[#939AFF] bg-clip-text leading-tight text-transparent">
              <Typewriter
                options={{
                  strings: [
                    "UX/UI Designer",
                    "IT Business Analyst",
                    "Project Manager",
                    "Designer Quèn",
                    "Video Maker",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 55,
                }}
              />
            </div>
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <button className="btn btn-ghost btn-sm rounded-3xl bg-white text-xs text-black lg:btn-md hover:text-white md:text-sm">
              GET IN TOUCH
              <img src={arrowLeft} alt="arrow left" />
            </button>
            <button className="btn btn-outline btn-sm rounded-3xl text-xs text-white lg:btn-md md:text-sm">
              VIEW ALL WORK
            </button>
          </div>
        </div>
        <div className="bg-[#ACBDFF]"></div>
      </div>
    </section>
  );
};

export default HelloSection;
