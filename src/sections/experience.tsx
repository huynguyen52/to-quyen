import { useRef, useEffect } from "react";
import Timeline from "../components/timeline";

const ExperienceSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      container.current.scrollLeft = container.current.scrollWidth;
    }
  }, []);

  return (
    <section className="container mx-auto py-12 md:py-24" id="work-experiences">
      <h3 className="text-center text-2xl sm:text-3xl lg:text-5xl">
        <span className="bg-gradient-to-r from-[#4242CE] to-[#939AFF] bg-clip-text text-transparent">
          Work
        </span>{" "}
        Experience
      </h3>
      <p className="md:text-md mt-3 text-center text-xs text-gray-400 sm:text-sm lg:text-lg xl:mt-6">
        Embarking on professional adventures is much like navigating the
        mysterious night. 'Who in the world am I?'{" "}
      </p>
      <div
        ref={container}
        className="scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300 scrollbar-track-gray-100 overflow-x-auto py-0 sm:py-24"
      >
        <Timeline />
      </div>
    </section>
  );
};

export default ExperienceSection;
