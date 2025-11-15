import { Box, Typography, Tooltip } from '@mui/material';
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Build as BuildIcon,
  BugReport as BugReportIcon,
} from '@mui/icons-material';
import { Skill } from '../content';

interface SkillsGridProps {
  skills: Skill[];
}

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'frontend':
      return <CodeIcon />;
    case 'backend':
      return <StorageIcon />;
    case 'tools':
      return <BuildIcon />;
    case 'testing':
      return <BugReportIcon />;
    default:
      return <CodeIcon />;
  }
};

// Map skill names to their logo URLs from CDN (using DevIcons for original colored logos)
const getSkillLogo = (skillName: string): string => {
  const skill = skillName.toLowerCase().replace(/\s+/g, '').replace('.', '');
  
  // Using DevIcons CDN for original colored technology logos
  const logoMap: Record<string, string> = {
    'reactjs': 'react/react-original.svg',
    'react': 'react/react-original.svg',
    'nextjs': 'nextjs/nextjs-original.svg',
    'next': 'nextjs/nextjs-original.svg',
    'reduxtoolkit': 'redux/redux-original.svg',
    'redux': 'redux/redux-original.svg',
    'javascript': 'javascript/javascript-original.svg',
    'typescript': 'typescript/typescript-original.svg',
    'html5': 'html5/html5-original.svg',
    'css3': 'css3/css3-original.svg',
    'tailwindcss': 'tailwindcss/tailwindcss-original.svg',
    'tailwind': 'tailwindcss/tailwindcss-original.svg',
    'material-ui': 'materialui/materialui-original.svg',
    'materialui': 'materialui/materialui-original.svg',
    'mui': 'materialui/materialui-original.svg',
    'nodejs': 'nodejs/nodejs-original.svg',
    'node': 'nodejs/nodejs-original.svg',
    'java': 'java/java-original.svg',
    'expressjs': 'express/express-original.svg',
    'express': 'express/express-original.svg',
    'stripe': 'https://cdn.simpleicons.org/stripe/635BFF',
    'restapis': 'fastapi/fastapi-original.svg',
    'rest': 'fastapi/fastapi-original.svg',
    'mongodb': 'mongodb/mongodb-original.svg',
    'mysql': 'mysql/mysql-original.svg',
    'dbeaver': 'https://cdn.simpleicons.org/dbeaver/382923',
    'aws': 'amazonwebservices/amazonwebservices-original-wordmark.svg',
    'ci/cd': 'githubactions/githubactions-original.svg',
    'cicd': 'githubactions/githubactions-original.svg',
    'docker': 'docker/docker-original.svg',
    'git': 'git/git-original.svg',
    'github': 'github/github-original.svg',
    'vscode': 'vscode/vscode-original.svg',
    'visualstudiocode': 'vscode/vscode-original.svg',
    'postman': 'postman/postman-original.svg',
    'tortoisesvn': 'subversion/subversion-original.svg',
    'svn': 'subversion/subversion-original.svg',
    'agile': 'https://cdn.simpleicons.org/agile/0052CC',
    'scrum': 'https://cdn.simpleicons.org/scrumalliance/009FDA',
    'codereviews': 'https://cdn.simpleicons.org/codereview/00ADD8',
  };

  const iconPath = logoMap[skill];
  
  // If it's a full URL (like Stripe), return it directly
  if (iconPath && iconPath.startsWith('http')) {
    return iconPath;
  }
  
  // Otherwise, use DevIcons CDN
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconPath || 'devicon/devicon-original.svg'}`;
};

export default function SkillsGrid({ skills }: SkillsGridProps) {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <Box>
      {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
        <Box key={category} sx={{ mb: 8 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 4,
              animation: 'fadeInUp 0.6s ease-out backwards',
              animationDelay: `${categoryIndex * 0.1}s`,
            }}
          >
            <Box
              sx={{
                mr: 2,
                color: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(59, 130, 246, 0.1))'
                    : 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(96, 165, 250, 0.2))',
                animation: 'rotate 10s linear infinite',
                '@keyframes rotate': {
                  from: { transform: 'rotate(0deg)' },
                  to: { transform: 'rotate(360deg)' },
                },
              }}
            >
              {getCategoryIcon(category)}
            </Box>
            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontWeight: 700,
                background: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'linear-gradient(135deg, #0EA5E9, #3B82F6)'
                    : 'linear-gradient(135deg, #38BDF8, #60A5FA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {category}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 2, sm: 3 },
              justifyContent: 'center',
            }}
          >
            {categorySkills.map((skill, index) => (
              <Tooltip key={skill.name} title={skill.name} arrow placement="top">
                <Box
                  sx={{
                    width: { xs: 80, sm: 100, md: 120 },
                    height: { xs: 80, sm: 100, md: 120 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 3,
                    background: (theme) =>
                      theme.palette.mode === 'light'
                        ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.05), rgba(59, 130, 246, 0.05))'
                        : 'linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(96, 165, 250, 0.1))',
                    border: '2px solid',
                    borderColor: 'divider',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    animation: 'fadeInScale 0.5s ease-out backwards, float 3s ease-in-out infinite',
                    animationDelay: `${index * 0.05}s, ${index * 0.1}s`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: (theme) =>
                        theme.palette.mode === 'light'
                          ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(59, 130, 246, 0.2))'
                          : 'linear-gradient(135deg, rgba(56, 189, 248, 0.3), rgba(96, 165, 250, 0.3))',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.05)',
                      borderColor: 'primary.main',
                      boxShadow: (theme) =>
                        theme.palette.mode === 'light'
                          ? '0 10px 40px rgba(14, 165, 233, 0.3)'
                          : '0 10px 40px rgba(56, 189, 248, 0.4)',
                      '&::before': {
                        opacity: 1,
                      },
                    },
                    '@keyframes fadeInScale': {
                      from: {
                        opacity: 0,
                        transform: 'scale(0.5) rotate(-10deg)',
                      },
                      to: {
                        opacity: 1,
                        transform: 'scale(1) rotate(0deg)',
                      },
                    },
                    '@keyframes float': {
                      '0%, 100%': {
                        transform: 'translateY(0)',
                      },
                      '50%': {
                        transform: 'translateY(-10px)',
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: { xs: 40, sm: 50, md: 60 },
                      height: { xs: 40, sm: 50, md: 60 },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 1,
                      mb: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src={getSkillLogo(skill.name)}
                      alt={`${skill.name} logo`}
                      loading="lazy"
                      decoding="async"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        transition: 'all 0.3s ease',
                      }}
                      onError={(e: any) => {
                        // Fallback to text if image fails to load
                        const target = e.target as HTMLElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-text')) {
                          const textNode = document.createElement('div');
                          textNode.className = 'fallback-text';
                          textNode.textContent = skill.name.substring(0, 2).toUpperCase();
                          textNode.style.fontSize = '1.5rem';
                          textNode.style.fontWeight = '700';
                          textNode.style.background = 'linear-gradient(135deg, #0EA5E9, #3B82F6)';
                          textNode.style.webkitBackgroundClip = 'text';
                          textNode.style.webkitTextFillColor = 'transparent';
                          parent.appendChild(textNode);
                        }
                      }}
                    />
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.85rem' },
                      textAlign: 'center',
                      position: 'relative',
                      zIndex: 1,
                      color: 'text.primary',
                      maxWidth: '90%',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
              </Tooltip>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
