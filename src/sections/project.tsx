const ProjectSection = () => {
  return (
    <section className="mx-auto container py-24" id="projects">
      <div className="flex gap-5 md:gap-7 xl:gap-14 justify-center xl:flex-row flex-col items-center xl:items-baseline">
        <h3 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
          Look at{' '}
          <span className="bg-gradient-to-r from-[#4242CE] to-[#939AFF] text-transparent bg-clip-text text-center">
            My Projects
          </span>
        </h3>
        <p className="text-center">
          Each project is a canvas of creativity, meticulously crafted for an
          immersive user experience.
        </p>
      </div>
    </section>
  );
};

export default ProjectSection;
