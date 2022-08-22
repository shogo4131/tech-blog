const iconPath = '/images';

export const frontend = [
  { icon: `${iconPath}/html.svg`, alt: 'html' },
  { icon: `${iconPath}/css3.svg`, alt: 'css' },
  { icon: `${iconPath}/sass.svg`, alt: 'sass' },
  { icon: `${iconPath}/tailwindcss.svg`, alt: 'tailwindcss' },
  { icon: `${iconPath}/materialui.svg`, alt: 'materialul' },
  { icon: `${iconPath}/javascript.svg`, alt: 'javascript' },
  { icon: `${iconPath}/typescript.svg`, alt: 'typescript' },
  { icon: `${iconPath}/react.svg`, alt: 'react' },
  { icon: `${iconPath}/nextjs.svg`, alt: 'nextjs' },
  { icon: `${iconPath}/angular.svg`, alt: 'angular' },
] as const;

export const backtend = [
  { icon: `${iconPath}/java.svg`, alt: 'java' },
  { icon: `${iconPath}/nodejs.svg`, alt: 'nodejs' },
  { icon: `${iconPath}/express.svg`, alt: 'express' },
  { icon: `${iconPath}/nestjs.svg`, alt: 'nestjs' },
] as const;
