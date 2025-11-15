import Section from '../components/Section';
import SkillsGrid from '../components/SkillsGrid';
import { Skill } from '../content';

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <Section id="skills" title="Skills" alternate>
      <SkillsGrid skills={skills} />
    </Section>
  );
}
