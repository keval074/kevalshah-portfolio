import Section from '../components/Section';
import Testimonials from '../components/Testimonials';
import { Testimonial } from '../content';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <Section id="testimonials" title="Testimonials">
      <Testimonials testimonials={testimonials} />
    </Section>
  );
}
