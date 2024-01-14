import lottieFiles from '../assets/lottie-files.svg';
import figma from '../assets/figma.svg';
import framer from '../assets/framer.svg';
import webflow from '../assets/webflow.svg';
import joomla from '../assets/joomla.svg';
import spline from '../assets/spline.svg';
import draw from '../assets/draw.svg';
import postman from '../assets/postman.svg';
import vscode from '../assets/vscode.svg';
import ae from '../assets/ae.svg';
import ps from '../assets/ps.svg';
import ai from '../assets/ai.svg';
import protopie from '../assets/protopie.svg';
import SkillCard from '../components/skill-card';
import { Skill } from '../types/skill';
import Accordion from '../components/accordion';

const skills: Skill[] = [
  {
    title: null,
    icon: null,
    image: lottieFiles,
    alt: 'LottieFiles',
  },
  {
    title: null,
    icon: null,
    image: figma,
    alt: 'Figma',
  },
  {
    title: null,
    icon: null,
    image: framer,
    alt: 'Framer',
  },
  {
    title: null,
    icon: null,
    image: webflow,
    alt: 'Webflow',
  },
  {
    title: null,
    icon: null,
    image: joomla,
    alt: 'Joomla',
  },
  {
    title: null,
    icon: null,
    image: spline,
    alt: 'Spline',
  },

  {
    title: null,
    icon: null,
    image: protopie,
    alt: 'Protopie',
  },
  {
    title: 'Draw.io',
    icon: draw,
    image: null,
    alt: 'Draw.io icon',
  },
  {
    title: 'Postman',
    icon: postman,
    image: null,
    alt: 'Postman icon',
  },
  {
    title: 'Vs Code',
    icon: vscode,
    image: null,
    alt: 'Vscode icon',
  },
  {
    title: 'After Effect',
    icon: ae,
    image: null,
    alt: 'After Effect',
  },
  {
    title: 'Photoshop',
    icon: ps,
    image: null,
    alt: 'Photoshop',
  },
  {
    title: 'illustrator ',
    icon: ai,
    image: null,
    alt: 'illustrator',
  },
];

const data = [
  {
    title: 'Design Mastery',
    content: 'The most used programming language is JavaScript.',
  },
  {
    title: 'Design Mastery',
    content: 'The most used programming language is JavaScript.',
  },
  {
    title: 'Design Mastery',
    content: 'The most used programming language is JavaScript.',
  },
];

const SkillSection = () => {
  return (
    <div>
      <section className="container py-[48px] mx-auto" id="my-skills">
        <div className="flex gap-24 flex-col py-16 md:py-32 xl:py-48">
          <div className="flex xl:flex-row flex-col-reverse gap-6 xl:gap-12 mx-auto justify-center">
            <p className="text-center xl:text-right">
              Proficient in turning concepts into captivating visual narratives,{' '}
              <br />I bring ideas to life with a blend of creativity and
              technical finesse.
            </p>
            <h3 className="text-center">
              What I{' '}
              <span className="bg-gradient-to-r from-[#4242CE] to-[#939AFF] text-transparent bg-clip-text">
                Do
              </span>
            </h3>
          </div>
          <div className="flex flex-wrap gap-6 max-w-[1200px] mx-auto justify-center">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto lg:mx-0">
        <div className="py-24 grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#ACBDFF] min-h-96"></div>
          <div className="py-24 flex flex-col lg:ml-32 xl:ml-48">
            <h3 className="text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              Design{' '}
              <span className="bg-gradient-to-r from-[#4242CE] to-[#939AFF] text-transparent bg-clip-text">
                Solves
              </span>{' '}
              Problems
            </h3>
            <p className="text-sm lg:text-lg xl:text-xl text-slate-500 mt-3 xl:mt-6">
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
