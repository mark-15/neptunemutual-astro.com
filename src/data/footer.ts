import * as api from '../../service/api'

const socials: FooterData['socials'] = [
  {
    icon: 'twitter',
    text: 'twitter',
    href: 'https://twitter.com/neptunemutual',
    isExternal: true
  },
  {
    icon: 'reddit',
    text: 'reddit',
    href: 'https://www.reddit.com/r/NeptuneMutual/',
    isExternal: true
  },
  {
    icon: 'telegram',
    text: 'telegram',
    href: 'https://t.me/neptunemutual',
    isExternal: true
  },
  {
    icon: 'github',
    text: 'github',
    href: 'https://github.com/neptune-mutual-blue',
    isExternal: true
  },
  {
    icon: 'linkedin',
    text: 'linkedin',
    href: 'https://www.linkedin.com/company/neptune-mutual',
    isExternal: true
  },
  {
    icon: 'youtube',
    text: 'youtube',
    href: 'https://www.youtube.com/c/NeptuneMutual',
    isExternal: true
  },
  {
    icon: 'discord',
    text: 'discord',
    href: 'https://discord.com/invite/2qMGTtJtnW',
    isExternal: true
  }
]

const getFooterData = async (): Promise<FooterData> => {
  const pages = await api.getEnumerable<Page>('pages', 10, 0)

  const lists: NavLinkList[] = [
    {
      title: 'Resources',
      links: [
        {
          href: 'https://app.neptunemutual.net',
          text: 'Marketplace',
          isExternal: true
        },
        { href: '/blog/', text: 'Blog', isExternal: false },
        { href: '/pressroom/', text: 'Press Room', isExternal: false },
        { href: '/ecosystem/', text: 'Ecosystem', isExternal: false },
        {
          href: 'https://docs.neptunemutual.com',
          text: 'Documentation',
          isExternal: true
        },
        { href: '/web3-tools/', text: 'Web3 Tools', isExternal: false }
      ]
    },
    {
      title: 'Company',
      links: [
        { href: '/about/', text: 'About us', isExternal: false },
        {
          href: '/grants-and-bounties/',
          text: 'Grants and Bounties',
          isExternal: false
        },
        {
          href: '/careers/',
          text: 'Careers',
          isExternal: false,
          badge: "We're Hiring!"
        },
        { href: '/security/', text: 'Security', isExternal: false },
        { href: '/contact/', text: 'Contact', isExternal: false }
      ]
    },
    {
      title: 'Policies',
      links: pages.sort((a, b) => a.sort - b.sort).map((page) => {
        return {
          href: `/policies/${page.slug}/`,
          text: page.title,
          isExternal: false
        }
      })
    }
  ]

  return {
    lists,
    socials
  }
}

export { getFooterData }
