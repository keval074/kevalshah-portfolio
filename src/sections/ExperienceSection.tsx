import Section from '../components/Section';
import ExperienceTimeline from '../components/ExperienceTimeline';
import { ExperienceItem } from '../content';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <Section id="experience" title="Experience">
      <ExperienceTimeline experience={experience} />
    </Section>
  );
}
