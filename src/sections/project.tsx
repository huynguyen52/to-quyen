import item1 from '../assets/item-1.png';
import item2 from '../assets/item-2.png';
import item3 from '../assets/item-3.png';
import item4 from '../assets/item-4.png';

const images = [
  {
    images: [
      {
        img: item1,
        title: 'Project 1',
      },
      {
        img: item1,
        title: 'Project 2',
      },
      {
        img: item2,
        title: 'Project 3',
      },
      {
        img: item2,
        title: 'Project 4',
      },
      {
        img: item2,
        title: 'Project 5',
      },
      {
        img: item2,
        title: 'Project 6',
      },
    ],
  },
  {
    images: [
      {
        img: item3,
        title: 'Project 1',
      },
      {
        img: item4,
        title: 'Project 2',
      },
      {
        img: item4,
        title: 'Project 3',
      },
      {
        img: item4,
        title: 'Project 4',
      },
      {
        img: item4,
        title: 'Project 5',
      },
      {
        img: item4,
        title: 'Project 6',
      },
    ],
  },
  {
    images: [
      {
        img: item3,
        title: 'Project 1',
      },
      {
        img: item4,
        title: 'Project 2',
      },
      {
        img: item3,
        title: 'Project 3',
      },
      {
        img: item3,
        title: 'Project 4',
      },
      {
        img: item3,
        title: 'Project 5',
      },
      {
        img: item3,
        title: 'Project 6',
      },
    ],
  },
];

const ProjectSection = () => {
  return (
    <section>
      <div className="mx-auto container py-24" id="projects">
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
      </div>
      <div className="space-y-4 w-full">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={`flex gap-4 ${
                index % 2 == 0
                  ? 'animate-hero-transform-even'
                  : 'animate-hero-transform-odd'
              }`}
            >
              {image.images.map((img, index) => {
                return <img key={index} src={img.img} alt={img.title} />;
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
