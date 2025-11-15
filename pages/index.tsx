import Head from 'next/head';
import { Box } from '@mui/material';
import NavBar from '../src/components/NavBar';
import Hero from '../src/components/Hero';
import AboutSection from '../src/sections/AboutSection';
import SkillsSection from '../src/sections/SkillsSection';
import ExperienceSection from '../src/sections/ExperienceSection';
import ProjectsSection from '../src/sections/ProjectsSection';
import TestimonialsSection from '../src/sections/TestimonialsSection';
import CertificationsSection from '../src/sections/CertificationsSection';
import ContactSection from '../src/sections/ContactSection';
import Footer from '../src/components/Footer';
import BackToTop from '../src/components/BackToTop';
import CursorFollower from '../src/components/CursorFollower';
import AnimatedBackground from '../src/components/AnimatedBackground';
import { contentConfig } from '../src/content';
import { generatePersonSchema, generateWebSiteSchema } from '../src/utils/seo';

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfolio.com';
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  const personSchema = generatePersonSchema({
    name: contentConfig.name,
    jobTitle: contentConfig.title,
    description: contentConfig.summary,
    email: contentConfig.email,
    url: siteUrl,
    sameAs: contentConfig.socialLinks.map(link => link.url),
  });

  const websiteSchema = generateWebSiteSchema({
    name: contentConfig.name,
    url: siteUrl,
    description: contentConfig.summary,
  });

  return (
    <>
      <Head>
        <title>{`${contentConfig.name} - ${contentConfig.title}`}</title>
        <meta name="description" content={contentConfig.summary} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content={contentConfig.name} />
        <meta name="keywords" content={`${contentConfig.title}, ${contentConfig.skills.map(s => s.name).join(', ')}, portfolio, web developer`} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#0EA5E9" />
        <meta name="msapplication-TileColor" content="#0EA5E9" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={`${contentConfig.name} - ${contentConfig.title}`} />
        <meta property="og:description" content={contentConfig.summary} />
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
        <meta property="og:site_name" content={contentConfig.name} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${contentConfig.name} - ${contentConfig.title}`} />
        <meta name="twitter:description" content={contentConfig.summary} />
        <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </Head>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <AnimatedBackground />
        <NavBar name={contentConfig.name} resumeUrl={contentConfig.resumeUrl} />
        
        <Box 
          component="main" 
          id="main-content"
          sx={{
            flex: 1,
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
            pt: 0, // No padding needed for floating navbar
          }}
        >
        
        <Hero
          name={contentConfig.name}
          title={contentConfig.title}
          summary={contentConfig.summary}
          tagline={contentConfig.hero.tagline}
          ctaButtons={contentConfig.hero.ctaButtons}
          location={contentConfig.location}
        />
        
        <AboutSection about={contentConfig.about} />
        
        <SkillsSection skills={contentConfig.skills} />
        
        <ExperienceSection experience={contentConfig.experience} />
        
        <ProjectsSection projects={contentConfig.projects} />
        
        <TestimonialsSection testimonials={contentConfig.testimonials} />
        
        <CertificationsSection certifications={contentConfig.certifications} />
        
        <ContactSection
          formEndpoint={formEndpoint}
        />
        
        <BackToTop />
        <CursorFollower />
      </Box>
      
      <Footer
        name={contentConfig.name}
        email={contentConfig.email}
        socialLinks={contentConfig.socialLinks}
      />
    </Box>
    </>
  );
}
