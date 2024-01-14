import { Skill } from '../types/skill';

type SkillCardProps = {
  skill: Skill;
};

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="flex bg-black/20 rounded-[6px] border border-slate-500 justify-center items-center h-[144px] w-[144px] p-3">
      {skill.image && <img src={skill.image} alt={skill.alt} />}
      {!skill.image && skill.icon && (
        <>
          <img src={skill.icon} alt={skill.alt} />
          <p className="ml-[6px] text-black">{skill.title}</p>
        </>
      )}
    </div>
  );
};

export default SkillCard;
