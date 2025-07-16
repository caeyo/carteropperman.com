import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Carter Opperman',
  description:
    'Student, software engineer and researcher. Based in Charlottesville, VA. From Sydney, Australia.',
  href: 'https://carteropperman.com',
  author: 'Carter Opperman',
  locale: 'en-AU',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/experience',
    label: 'experience',
  },
  {
    href: '/projects',
    label: 'projects',
  },
  {
    href: '/research',
    label: 'research',
  },
  {
    href: '/resume.pdf',
    label: 'resume',
  },
  {
    href: '/news',
    label: 'news',
  },
  {
    href: '/blog',
    label: 'blog',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/caeyo',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/carter-opperman/',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:oppermancarter@gmail.com',
    label: 'Email',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
