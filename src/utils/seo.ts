/**
 * SEO utility functions for generating JSON-LD structured data and meta tags
 */

export interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description: string;
  email: string;
  url: string;
  sameAs?: string[];
  image?: string;
  location?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo?: string;
  description: string;
  email: string;
  sameAs?: string[];
}

export interface ProfessionalServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider: string;
  areaServed: string;
  serviceType: string;
}

export interface WebSiteSchemaProps {
  name: string;
  url: string;
  description: string;
}

/**
 * Generate Person JSON-LD schema for structured data
 * Helps search engines understand personal/professional information
 * 
 * @param props - Person schema properties
 * @returns JSON-LD script content as string
 */
export function generatePersonSchema(props: PersonSchemaProps): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: props.name,
    jobTitle: props.jobTitle,
    description: props.description,
    email: props.email,
    url: props.url,
    ...(props.sameAs && props.sameAs.length > 0 && { sameAs: props.sameAs }),
    ...(props.image && { image: props.image }),
    ...(props.location && { 
      address: {
        '@type': 'PostalAddress',
        addressLocality: props.location,
        addressCountry: 'IN'
      }
    }),
    knowsAbout: [
      'React.js',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Web Development',
      'Frontend Development',
      'Full Stack Development'
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Software Engineering'
    }
  };

  return JSON.stringify(schema);
}

/**
 * Generate WebSite JSON-LD schema for structured data
 * Helps search engines understand the website structure
 * 
 * @param props - WebSite schema properties
 * @returns JSON-LD script content as string
 */
export function generateWebSiteSchema(props: WebSiteSchemaProps): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: props.name,
    url: props.url,
    description: props.description,
  };

  return JSON.stringify(schema);
}

/**
 * Helper function to generate meta tag props for Open Graph
 * 
 * @param title - Page title
 * @param description - Page description
 * @param url - Canonical URL
 * @param image - OG image URL
 * @returns Object with Open Graph meta properties
 */
export function generateOpenGraphTags(
  title: string,
  description: string,
  url: string,
  image?: string
) {
  return {
    'og:title': title,
    'og:description': description,
    'og:url': url,
    'og:type': 'website',
    ...(image && { 'og:image': image }),
  };
}

/**
 * Helper function to generate meta tag props for Twitter Card
 * 
 * @param title - Page title
 * @param description - Page description
 * @param image - Twitter card image URL
 * @returns Object with Twitter Card meta properties
 */
export function generateTwitterCardTags(
  title: string,
  description: string,
  image?: string
) {
  return {
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    ...(image && { 'twitter:image': image }),
  };
}

/**
 * Helper function to generate all SEO meta tags
 * Combines basic, Open Graph, and Twitter Card tags
 * 
 * @param title - Page title
 * @param description - Page description
 * @param url - Canonical URL
 * @param image - Social sharing image URL
 * @returns Object with all meta tag properties
 */
export function generateAllMetaTags(
  title: string,
  description: string,
  url: string,
  image?: string
) {
  return {
    title,
    description,
    canonical: url,
    ...generateOpenGraphTags(title, description, url, image),
    ...generateTwitterCardTags(title, description, image),
  };
}

/**
 * Generate Breadcrumb JSON-LD schema for structured data
 * Helps search engines understand site navigation hierarchy
 * 
 * @param items - Array of breadcrumb items
 * @returns JSON-LD script content as string
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return JSON.stringify(schema);
}

/**
 * Generate Organization JSON-LD schema for structured data
 * Helps search engines understand the organization/business
 * 
 * @param props - Organization schema properties
 * @returns JSON-LD script content as string
 */
export function generateOrganizationSchema(props: OrganizationSchemaProps): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: props.name,
    url: props.url,
    ...(props.logo && { logo: props.logo }),
    description: props.description,
    email: props.email,
    ...(props.sameAs && props.sameAs.length > 0 && { sameAs: props.sameAs }),
  };

  return JSON.stringify(schema);
}

/**
 * Generate ProfessionalService JSON-LD schema for structured data
 * Helps search engines understand the professional services offered
 * 
 * @param props - Professional service schema properties
 * @returns JSON-LD script content as string
 */
export function generateProfessionalServiceSchema(props: ProfessionalServiceSchemaProps): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: props.name,
    description: props.description,
    url: props.url,
    provider: {
      '@type': 'Person',
      name: props.provider,
    },
    areaServed: props.areaServed,
    serviceType: props.serviceType,
    priceRange: '$$',
  };

  return JSON.stringify(schema);
}
