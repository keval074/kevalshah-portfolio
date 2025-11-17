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
import { 
  generatePersonSchema, 
  generateWebSiteSchema, 
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateProfessionalServiceSchema 
} from '../src/utils/seo';

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kevalshahportfolio.vercel.app';
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  const personSchema = generatePersonSchema({
    name: contentConfig.name,
    jobTitle: contentConfig.title,
    description: contentConfig.summary,
    email: contentConfig.email,
    url: siteUrl,
    sameAs: contentConfig.socialLinks.map(link => link.url),
    image: `${siteUrl}/profile.jpg`,
    location: contentConfig.location,
  });

  const websiteSchema = generateWebSiteSchema({
    name: contentConfig.name,
    url: siteUrl,
    description: contentConfig.summary,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
  ]);

  const organizationSchema = generateOrganizationSchema({
    name: contentConfig.name,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: contentConfig.summary,
    email: contentConfig.email,
    sameAs: contentConfig.socialLinks.map(link => link.url),
  });

  const professionalServiceSchema = generateProfessionalServiceSchema({
    name: `${contentConfig.name} - ${contentConfig.title}`,
    description: contentConfig.summary,
    url: siteUrl,
    provider: contentConfig.name,
    areaServed: 'Worldwide',
    serviceType: 'Software Development',
  });

  return (
    <>
      <Head>
        <title>{`${contentConfig.name} - ${contentConfig.title} | React.js & Next.js Expert`}</title>
        <meta name="description" content={`${contentConfig.summary} Specializing in healthcare & government web applications. Available for hire.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Enhanced SEO Meta Tags */}
        <meta name="author" content={contentConfig.name} />
        <meta name="keywords" content={`${contentConfig.name}, ${contentConfig.title}, React.js Developer, Next.js Developer, Frontend Engineer, Full Stack Developer, ${contentConfig.skills.slice(0, 15).map(s => s.name).join(', ')}, Web Development, Software Engineer, Healthcare Software, Government Applications, ${contentConfig.location}, Hire React Developer, Portfolio`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content={contentConfig.location} />
        
        {/* Professional Tags */}
        <meta property="profile:first_name" content={contentConfig.name.split(' ')[0]} />
        <meta property="profile:last_name" content={contentConfig.name.split(' ')[1]} />
        <meta property="profile:username" content={contentConfig.name.toLowerCase().replace(' ', '')} />
        
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#0EA5E9" />
        <meta name="msapplication-TileColor" content="#0EA5E9" />
        
        {/* Open Graph */}
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={`${contentConfig.name} - ${contentConfig.title} | React.js & Next.js Expert`} />
        <meta property="og:description" content={`${contentConfig.summary} Specializing in healthcare & government web applications.`} />
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${contentConfig.name} - Portfolio`} />
        <meta property="og:site_name" content={contentConfig.name} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kevalshah" />
        <meta name="twitter:creator" content="@kevalshah" />
        <meta name="twitter:title" content={`${contentConfig.name} - ${contentConfig.title} | React.js & Next.js Expert`} />
        <meta name="twitter:description" content={`${contentConfig.summary} Specializing in healthcare & government web applications.`} />
        <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
        <meta name="twitter:image:alt" content={`${contentConfig.name} - Portfolio`} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: personSchema }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: websiteSchema }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationSchema }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: professionalServiceSchema }}
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
