import lottieFiles from "../assets/lottie-files.svg";
import figma from "../assets/figma.svg";
import framer from "../assets/framer.svg";
import webflow from "../assets/webflow.svg";
import joomla from "../assets/joomla.svg";
import spline from "../assets/spline.svg";
import draw from "../assets/draw.svg";
import postman from "../assets/postman.svg";
import vscode from "../assets/vscode.svg";
import designMastery from "../assets/design-mastery.png";
import codeWizardy from "../assets/code-wizardry.png";
import digitalAlchemy from "../assets/digital-alchemy.png";
import strategicTechInsights from "../assets/strategic-tech-insights.png";
import techArtistry from "../assets/tech-artistry.png";
import arrow1 from "../assets/arrow-1.svg";
import arrow2 from "../assets/arrow-2.svg";
import ae from "../assets/ae.svg";
import ps from "../assets/ps.svg";
import ai from "../assets/ai.svg";
import protopie from "../assets/protopie.svg";
import SkillCard from "../components/skill-card";
import { Skill } from "../types/skill";
import Accordion from "../components/accordion";
import skillRun from "../assets/video-mobile720.mp4";
import useMediaQuery from "../hooks/useMediaQuery";

const skills: Skill[] = [
  {
    title: null,
    icon: null,
    image: lottieFiles,
    alt: "LottieFiles",
  },
  {
    title: null,
    icon: null,
    image: figma,
    alt: "Figma",
  },
  {
    title: null,
    icon: null,
    image: framer,
    alt: "Framer",
  },
  {
    title: null,
    icon: null,
    image: webflow,
    alt: "Webflow",
  },
  {
    title: null,
    icon: null,
    image: joomla,
    alt: "Joomla",
  },
  {
    title: null,
    icon: null,
    image: spline,
    alt: "Spline",
  },

  {
    title: null,
    icon: null,
    image: protopie,
    alt: "Protopie",
  },
  {
    title: "Draw.io",
    icon: draw,
    image: null,
    alt: "Draw.io icon",
  },
  {
    title: "Postman",
    icon: postman,
    image: null,
    alt: "Postman icon",
  },
  {
    title: "Vs Code",
    icon: vscode,
    image: null,
    alt: "Vscode icon",
  },
  {
    title: "After Effect",
    icon: ae,
    image: null,
    alt: "After Effect",
  },
  {
    title: "Photoshop",
    icon: ps,
    image: null,
    alt: "Photoshop",
  },
  {
    title: "illustrator ",
    icon: ai,
    image: null,
    alt: "illustrator",
  },
];

const data = [
  {
    title: {
      text: "Design Mastery",
      image: designMastery,
    },
    contents: [
      "Product Design",
      "UX/UI Design",
      "Responsive Design",
      "Cross-Platform Design",
      "Pixel Precision",
    ],
  },
  {
    title: {
      text: "Code Wizardry",
      image: codeWizardy,
    },
    contents: ["Mobile App Development", "Frontend Development"],
  },
  {
    title: {
      text: "Digital Alchemy",
      image: digitalAlchemy,
    },
    contents: [
      "Motion Design",
      "Animation",
      "Multimedia Creation",
      "Graphic Design",
    ],
  },
  {
    title: {
      text: "Strategic Tech Insights",
      image: strategicTechInsights,
    },
    contents: [
      "Business Analysis (IT)",
      "IT Strategy",
      "Technology Consulting",
    ],
  },
  {
    title: {
      text: "Tech Artistry",
      image: techArtistry,
    },
    contents: [
      "Computer Building",
      "System Configuration",
      "Hardware Optimization",
    ],
  },
];

const SkillSection = () => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <div>
      <section className="container mx-auto py-[48px]" id="my-skills">
        <div className="flex flex-col gap-24 py-8 md:py-32 xl:py-48">
          <div className="mx-auto flex flex-col-reverse justify-center gap-6 xl:flex-row xl:gap-12">
            <p className="md:text-md text-center text-xs lg:text-lg xl:text-right">
              Proficient in turning concepts into captivating visual narratives,{" "}
              <br />I bring ideas to life with a blend of creativity and
              technical finesse.
            </p>
            <h3 className="text-center text-2xl sm:text-3xl lg:text-5xl">
              What I{" "}
              <span className="bg-gradient-to-r from-[#4242CE] to-[#939AFF] bg-clip-text text-transparent">
                Do
              </span>
            </h3>
          </div>
          <div className="relative mx-auto flex max-w-[1200px] flex-wrap justify-center gap-6">
            <img
              src={arrow1}
              alt="arrow1"
              className="xs:w-full absolute left-[-20%] top-0 w-1/4 animate-arrow1 sm:top-[-20%]"
            />
            <img
              src={arrow2}
              alt="arrow2"
              className="xs:w-full absolute bottom-0 right-[-10%] w-1/4 animate-arrow2 sm:bottom-[-20%]"
            />
            {isDesktop ? (
              <>
                {skills.slice(0, 6).map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
                <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-6">
                  {skills.slice(6).map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                  ))}
                </div>
              </>
            ) : (
              skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))
            )}
          </div>
        </div>
      </section>
      <section className="container mx-auto lg:mx-0">
        <div className="grid grid-cols-1 py-12 sm:py-24 lg:grid-cols-2">
          <div className="py-12 pt-0 sm:py-24 md:pt-12">
            <video autoPlay loop muted src={skillRun}></video>
          </div>
          <div className="flex flex-col py-0 sm:py-24 lg:ml-32 xl:ml-48">
            <h3 className="text-2xl sm:text-3xl lg:text-5xl">
              Design{" "}
              <span className="bg-gradient-to-r from-[#4242CE] to-[#939AFF] bg-clip-text text-transparent">
                Solves
              </span>{" "}
              Problems
            </h3>
            <p className="md:text-md mb-6 mt-6 text-xs text-slate-500 sm:text-sm md:mb-0 lg:text-lg xl:text-xl">
              Ever pondered the mystery of change overnight? Well, here's a
              delightful puzzle! I confidently say, yes, I'll happily solve it
              for you!
            </p>
            <Accordion data={data} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillSection;
