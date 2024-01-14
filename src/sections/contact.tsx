import arrowRight from '../assets/arrow-right.svg';
import union from '../assets/union.svg';
import avatar from '../assets/avatar.svg';

const ContactSection = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48">
        <div className="avatar justify-center lg:justify-start">
          <div className="w-80 md:w-[420px] xl:w-[512px] rounded-full">
            <img src={avatar} />
          </div>
        </div>
        <div className="flex flex-col justify-center lg:items-start items-center">
          <h5 className="lg:text-5xl sm:text-3xl text-2xl">
            <span>Contact</span> With Me
          </h5>
          <p className="lg:text-lg text-md lg:mt-6 mt-3 text-gray-400">
            I appreciate your time exploring my digital showcase. If you're
            interested in discussing potential collaborations or viewing more
            details about my work, portfolio, and CV, I'd love to hear from you.
            Let's connect and explore the possibilities together!
          </p>
          <div className="flex md:flex-row flex-col gap-6 md:gap-12 mt-6">
            <button className="btn bg-gradient-to-r from-[#4242CE] to-[#939AFF] btn-ghost rounded-3xl">
              GET IN TOUCH
              <img src={arrowRight} alt="Arrow Right" />
            </button>
            <button className="btn gradi border-[#4242CE] hover:text-[#939AFF] hover:border-[#939AFF] btn-outline bg-gradient-to-r from-[#4242CE] to-[#939AFF] text-transparent bg-clip-text rounded-3xl">
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
