import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

interface ContactSectionProps {
  formEndpoint?: string;
}

export default function ContactSection({ formEndpoint }: ContactSectionProps) {
  return (
    <Section id="contact" title="Contact" alternate>
      <ContactForm formEndpoint={formEndpoint} />
    </Section>
  );
}
