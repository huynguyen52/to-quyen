import arrowLeft from '../assets/arrow-left.svg';

const HelloSection = () => {
  return (
    <section className="h-[90vh] container mx-auto" id="hello">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="flex flex-col items-center md:items-start justify-center space-y-6 md:space-y-12">
          <h1 className="font-medium text-xl md:text-3xl lg:text-5xl xl:text-6xl">
            Hello, <br />
            I'm Harley - Quyen
            <br />
            <span id="typed-strings">
              <b>UX/UI Designer</b>
              {/* <b>IT Business Analyst</b>
                      <b>Project Manager</b>
                      <b>Designer Quèn</b>
                      <b>Video Maker</b> */}
            </span>
            <span id="typed"></span>
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
