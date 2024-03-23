import { Skill } from '../types/skill';

type SkillCardProps = {
  skill: Skill;
};

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row bg-black/20 rounded-[6px] border border-slate-500 justify-center items-center h-[84px] w-[84px] sm:h-[144px] sm:w-[144px] p-1 sm:p-3">
      {skill.image && <img src={skill.image} alt={skill.alt} />}
      {!skill.image && skill.icon && (
        <>
          <img src={skill.icon} alt={skill.alt} />
          <p className="ml-[6px] text-black text-xs sm:text-base">
            {skill.title}
          </p>
        </>
      )}
    </div>
  );
};

export default SkillCard;
