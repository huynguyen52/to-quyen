import { useRef, useEffect } from 'react';
import Timeline from '../components/timeline';

const ExperienceSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      container.current.scrollLeft = container.current.scrollWidth;
    }
  }, []);

  return (
    <section className="container mx-auto py-24" id="work-experiences">
      <h3 className="text-center text-3xl lg:text-5xl">
        <span className="bg-gradient-to-r from-[#4242CE] to-[#939AFF] text-transparent bg-clip-text">
          Work
        </span>{' '}
        Experience
      </h3>
      <p className="text-center text-md lg:text-lg text-gray-400 mt-3 xl:mt-6">
        Embarking on professional adventures is much like navigating the
        mysterious night. 'Who in the world am I?'{' '}
      </p>
      <div
        ref={container}
        className="overflow-x-auto py-0 sm:py-24 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      >
        <Timeline />
      </div>
    </section>
  );
};

export default ExperienceSection;
