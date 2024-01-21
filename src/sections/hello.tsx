import arrowLeft from '../assets/arrow-left.svg';
import Typewriter from 'typewriter-effect';

const HelloSection = () => {
  return (
    <section className="h-[90vh] container mx-auto" id="hello">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="flex flex-col items-center md:items-start justify-center space-y-6 md:space-y-12">
          <h1 className="font-medium text-xl md:text-3xl lg:text-5xl xl:text-6xl">
            Hello, <br />
            I'm Harley - Quyen
            <br />
            <div className="bg-gradient-to-r from-[#4242CE] to-[#939AFF] text-transparent bg-clip-text leading-tight">
              <Typewriter
                options={{
                  strings: [
                    'UX/UI Designer',
                    'IT Business Analyst',
                    'Project Manager',
                    'Designer Quèn',
                    'Video Maker',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 55,
                }}
              />
            </div>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <button className="btn btn-sm lg:btn-md bg-white text-black hover:text-white btn-ghost rounded-3xl">
              GET IN TOUCH
              <img src={arrowLeft} alt="arrow left" />
            </button>
            <button className="btn btn-sm lg:btn-md btn-outline rounded-3xl text-white">
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
