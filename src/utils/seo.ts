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
