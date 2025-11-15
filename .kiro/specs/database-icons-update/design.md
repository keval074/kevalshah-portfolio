# Design Document

## Overview

This design document outlines the approach for updating the database technology icons in the SkillsGrid component. The solution involves adding three new entries to the existing `logoMap` object to properly map MongoDB, MySQL, and DBeaver to their respective colored brand logos from CDN sources.

The implementation is straightforward and follows the existing pattern already established in the codebase for other technology logos. No architectural changes are required, and the existing error handling and fallback mechanisms will continue to work as designed.

## Architecture

### Current Architecture

The SkillsGrid component (`src/components/SkillsGrid.tsx`) currently implements:

1. A `getSkillLogo()` function that accepts a skill name and returns a CDN URL
2. A `logoMap` Record object that maps normalized skill names to logo paths
3. Logic to handle both DevIcons CDN paths and direct URLs
4. Fallback error handling when logos fail to load

### Proposed Changes

No architectural changes are needed. The solution involves adding three new key-value pairs to the existing `logoMap` object within the `getSkillLogo()` function.

## Components and Interfaces

### Modified Component: SkillsGrid.tsx

**Location:** `src/components/SkillsGrid.tsx`

**Function:** `getSkillLogo(skillName: string): string`

**Changes Required:**

Add the following entries to the `logoMap` object:

```typescript
const logoMap: Record<string, string> = {
  // ... existing entries ...
  
  // Database icons
  'mongodb': 'mongodb/mongodb-original.svg',
  'mysql': 'mysql/mysql-original.svg',
  'dbeaver': 'https://cdn.simpleicons.org/dbeaver/382923',
  
  // ... rest of existing entries ...
};
```

**Rationale:**

- **MongoDB**: DevIcons provides an official MongoDB logo at `mongodb/mongodb-original.svg` with the recognizable green leaf branding
- **MySQL**: DevIcons provides an official MySQL logo at `mysql/mysql-original.svg` with the blue and orange dolphin branding
- **DBeaver**: DevIcons does not have DBeaver in its collection, so we use SimpleIcons CDN which provides the DBeaver logo with its brown brand color (#382923)

### Key Normalization

The existing code already normalizes skill names by:
1. Converting to lowercase
2. Removing spaces
3. Removing periods

This means:
- "MongoDB" → "mongodb"
- "MySQL" → "mysql"
- "DBeaver" → "dbeaver"

Our logoMap keys follow this same normalization pattern.

## Data Models

No data model changes are required. The existing `Skill` interface in `src/content.ts` already supports the icon functionality:

```typescript
export interface Skill {
  name: string;
  category: string;
  proficiency?: number;
  icon?: string;  // Optional, not used in current implementation
}
```

The current implementation uses the `name` field to look up logos dynamically, which is the correct approach.

## Error Handling

### Existing Error Handling

The component already implements robust error handling:

```typescript
onError={(e: any) => {
  // Fallback to text if image fails to load
  const target = e.target as HTMLElement;
  target.style.display = 'none';
  const parent = target.parentElement;
  if (parent && !parent.querySelector('.fallback-text')) {
    const textNode = document.createElement('div');
    textNode.className = 'fallback-text';
    textNode.textContent = skill.name.substring(0, 2).toUpperCase();
    // ... styling ...
    parent.appendChild(textNode);
  }
}
```

This error handler will continue to work for the new database icons. If any CDN fails to load, users will see a two-letter abbreviation (MO, MY, DB) as a fallback.

### CDN Reliability

**Primary CDN (DevIcons):**
- URL: `https://cdn.jsdelivr.net/gh/devicons/devicon/`
- Reliability: High (used by thousands of developers)
- Coverage: MongoDB, MySQL

**Secondary CDN (SimpleIcons):**
- URL: `https://cdn.simpleicons.org/`
- Reliability: High (official Simple Icons CDN)
- Coverage: DBeaver

Both CDNs are production-ready and widely used in the developer community.

## Testing Strategy

### Manual Testing

1. **Visual Verification:**
   - Start the development server
   - Navigate to the Skills section
   - Verify MongoDB displays with green leaf logo
   - Verify MySQL displays with blue/orange dolphin logo
   - Verify DBeaver displays with brown logo

2. **Responsive Testing:**
   - Test on mobile (xs breakpoint)
   - Test on tablet (sm breakpoint)
   - Test on desktop (md breakpoint)
   - Verify logos scale appropriately at all sizes

3. **Theme Testing:**
   - Test in light mode
   - Test in dark mode
   - Verify logos are visible and maintain brand colors in both themes

4. **Error Handling:**
   - Temporarily break a CDN URL
   - Verify fallback text appears correctly
   - Restore correct URL and verify logo loads again

### Browser Testing

Test in the following browsers:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if available)

### Accessibility Testing

- Verify alt text is present: `alt="${skill.name} logo"`
- Verify tooltip shows skill name on hover
- Verify keyboard navigation works (tab through skills)

## Implementation Notes

### CDN Path Selection

**MongoDB:**
- Path: `mongodb/mongodb-original.svg`
- Alternative: `mongodb/mongodb-plain.svg` (monochrome version)
- Choice: Use `-original` for brand colors

**MySQL:**
- Path: `mysql/mysql-original.svg`
- Alternative: `mysql/mysql-plain.svg` (monochrome version)
- Choice: Use `-original` for brand colors

**DBeaver:**
- DevIcons does not include DBeaver
- SimpleIcons provides DBeaver with color code
- URL format: `https://cdn.simpleicons.org/dbeaver/382923`
- The color code `382923` is DBeaver's official brand color

### Consistency with Existing Patterns

The implementation maintains consistency with existing icon mappings:

1. Uses lowercase keys without spaces or special characters
2. Prioritizes DevIcons CDN when available
3. Falls back to SimpleIcons for logos not in DevIcons
4. Uses `-original` suffix for colored versions
5. Follows the same URL construction logic

### No Breaking Changes

This change is purely additive:
- No existing functionality is modified
- No existing icon mappings are changed
- No component interfaces are altered
- No props or state management is affected

## Design Decisions

### Decision 1: Use DevIcons CDN for MongoDB and MySQL

**Rationale:**
- DevIcons is already the primary CDN used throughout the component
- Provides high-quality, official logos
- Maintains consistency with other technology icons
- Well-maintained and reliable

**Alternatives Considered:**
- Using SimpleIcons for all three databases
- Hosting logos locally in the public folder

**Why Rejected:**
- SimpleIcons would introduce inconsistency
- Local hosting increases bundle size and maintenance burden

### Decision 2: Use SimpleIcons for DBeaver

**Rationale:**
- DevIcons does not include DBeaver
- SimpleIcons is already used in the codebase (e.g., Stripe, Agile, Scrum)
- Provides the official DBeaver logo with correct brand color
- Maintains the existing pattern of using SimpleIcons as a fallback

**Alternatives Considered:**
- Using a generic database icon
- Hosting DBeaver logo locally

**Why Rejected:**
- Generic icon doesn't meet the requirement for actual brand logo
- Local hosting is inconsistent with the CDN-based approach

### Decision 3: No Changes to Content Configuration

**Rationale:**
- The `icon` field in the Skill interface is optional and unused
- Dynamic lookup based on skill name is more maintainable
- Avoids duplication of icon URLs in content.ts

**Alternatives Considered:**
- Adding icon URLs to each skill in content.ts

**Why Rejected:**
- Would require updating content.ts for every icon change
- Less maintainable and more error-prone
- Inconsistent with current implementation pattern
