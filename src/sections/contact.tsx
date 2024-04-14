import arrowRight from "../assets/arrow-right.svg";
import union from "../assets/union.svg";
import avatar from "../assets/avatar.svg";

const ContactSection = () => {
  return (
    <section className="container mx-auto mb-20">
      <div className="grid grid-cols-1 gap-24 lg:grid-cols-2 lg:gap-48">
        <div className="avatar justify-center lg:justify-start">
          <div className="w-80 rounded-full md:w-[420px] xl:w-[512px]">
            <img src={avatar} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:items-start">
          <h5 className="text-2xl sm:text-3xl lg:text-5xl">
            <span className="bg-gradient-to-r from-[#4242CE] to-[#939AFF] bg-clip-text text-transparent">
              Contact
            </span>{" "}
            With Me
          </h5>
          <p className=" md:text-md mt-3 text-xs leading-[30px] text-gray-400 sm:text-sm lg:mt-6 lg:text-lg lg:leading-[60px]">
            I appreciate your time exploring my digital showcase. If you're
            interested in discussing potential collaborations or{" "}
            <a
              href="#"
              className="bg-gradient-to-r from-[#4242CE] to-[#939AFF] bg-clip-text text-transparent"
            >
              viewing more details about my work, portfolio, and CV
            </a>
            , I'd love to hear from you. Let's connect and explore the
            possibilities together!
          </p>
          <div className="mt-6 flex gap-6 md:gap-12">
            <button
              className="btn btn-ghost rounded-3xl bg-gradient-to-r from-[#4242CE] to-[#939AFF] text-xs
 md:text-sm"
            >
              GET IN TOUCH
              <img src={arrowRight} alt="Arrow Right" />
            </button>
            <button
              className="gradi btn btn-outline rounded-3xl border-[#4242CE] bg-gradient-to-r from-[#4242CE] to-[#939AFF] bg-clip-text text-xs text-transparent hover:border-[#939AFF] hover:text-[#939AFF]
 md:text-sm"
            >
              Pour a Glass
              <img src={union} alt="Union" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
