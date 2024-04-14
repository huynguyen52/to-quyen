import { useEffect, useRef, useState } from "react";
import item1 from "../assets/item-1.png";
import item2 from "../assets/item-2.png";
import item3 from "../assets/item-3.png";
import item4 from "../assets/item-4.png";

const images = [
  {
    images: [
      {
        img: item1,
        title: "Project 1",
      },
      {
        img: item1,
        title: "Project 2",
      },
      {
        img: item2,
        title: "Project 3",
      },
      {
        img: item2,
        title: "Project 4",
      },
      {
        img: item2,
        title: "Project 5",
      },
      {
        img: item2,
        title: "Project 6",
      },
    ],
  },
  {
    images: [
      {
        img: item3,
        title: "Project 1",
      },
      {
        img: item4,
        title: "Project 2",
      },
      {
        img: item4,
        title: "Project 3",
      },
      {
        img: item4,
        title: "Project 4",
      },
      {
        img: item4,
        title: "Project 5",
      },
      {
        img: item4,
        title: "Project 6",
      },
    ],
  },
  {
    images: [
      {
        img: item3,
        title: "Project 1",
      },
      {
        img: item4,
        title: "Project 2",
      },
      {
        img: item3,
        title: "Project 3",
      },
      {
        img: item3,
        title: "Project 4",
      },
      {
        img: item3,
        title: "Project 5",
      },
      {
        img: item3,
        title: "Project 6",
      },
    ],
  },
];

const ProjectSection = () => {
  const container = useRef<null | HTMLDivElement>(null);
  const [deg, setDeg] = useState(45);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const top = container.current?.getBoundingClientRect().top;
      const temp = top ? (top * 45) / window.innerHeight : 45;
      setDeg(temp);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <section>
      <div className="container mx-auto py-24" id="projects">
        <div className="flex flex-col items-center justify-center gap-5 md:gap-7 xl:flex-row xl:items-baseline xl:gap-14">
          <h3 className="text-center text-xl md:text-3xl lg:text-4xl xl:text-5xl">
            Look at{" "}
            <span className="bg-gradient-to-r from-[#4242CE] to-[#939AFF] bg-clip-text text-center text-transparent">
              My Projects
            </span>
          </h3>
          <p className="md:text-md text-center text-xs sm:text-sm lg:text-lg">
            Each project is a canvas of creativity, meticulously crafted for an
            immersive user experience.
          </p>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="-rotate-0"
          ref={container}
          style={{
            transform: `rotate(${deg > 0 ? -deg : 0}deg)`,
          }}
        >
          <div className="w-full space-y-4">
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className={`flex gap-4 ${
                    index % 2 == 0
                      ? "animate-hero-transform-even"
                      : "animate-hero-transform-odd"
                  }`}
                >
                  {image.images.map((img, index) => {
                    return (
                      <img
                        className={`xs:w-full w-1/4`}
                        key={index}
                        src={img.img}
                        alt={img.title}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
