declare module '*.svg' {
  const content: SVGElement
  export default content
}

declare module '*.svg?raw' {
  const content: SVGElement
  export default content
}

interface FileDownloadArgs {
  remote: string
  local: string
}

interface FooterData {
  lists: NavLinkList[]
  socials: Array<{
    icon: string
    text: string
    href: string
    isExternal: boolean
  }>
}

interface NavLinkList {
  title: string
  links: Array<{
    href: string
    text: string
    isExternal: boolean
    badge?: string
  }>
}

interface Filter {
  text: string
  value?: string
}

interface BreadcrumbItem {
  name: string
  link: string
}

interface PaginationResult {
  previous?: number
  pages: Array<number | null | undefined> | undefined
  next?: number
}

interface PaginatedResult<T> {
  records?: number
  totalPages?: number
  pageSize?: number
  pages: Record<string, T[]>
}

interface PaginatedByTagsResult<T> {
  tag: any
  records?: number
  totalPages?: number
  pageSize?: number
  pages: Record<string, T[]>
}

interface ApiResult<T> {
  docs: T[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: any
  nextPage: any
}

interface TableOfContentEntry {
  text: string
  id: string
  type: number
}

interface ParsedArticle extends Content {
  parsedHtml: string
  pageUrl: string
  timeToRead: number
  featuredImage: string
  alt: string
  tag?: Tag
  toc: TableOfContentEntry[]
}

interface DetailedListViewItem {
  title: string
  intro: string
  badges: Tag[]
  href: string
  icon: string
  category: string
}

interface NamedIcon {
  name: string
  icon: any
}

interface ConversionField {
  name: string
  placeHolder: string
  type: string
  value: string
}

type EthereumUnit = 'kWei' | 'mWei' | 'gWei' | 'szabo' | 'finney' | 'ether' | 'kEther' | 'mEther' | 'gEther' | 'tEther'

interface CatchAllRedirectPageProps {
  redirect: true
  dest: string
  [key: string]: any
}

interface CatchAllStandalonePageProps {
  redirect: false
  [key: string]: any
}

interface CatchAllPageData {
  props: CatchAllRedirectPageProps | CatchAllStandalonePageProps
  slug: string
}

interface CatchAllStaticPath {
  params: {
    slug: string
  }
  props: CatchAllRedirectPageProps | CatchAllStandalonePageProps
}

interface TeamMember {
  id: string
  image: string
  name: string
  title: string
  links: {
    linkedIn?: string
    twitter?: string
    facebook?: string
    medium?: string
  }
}

interface HomepageFeatureItem {
  id: number
  icon: string
  image: SVGElement
  title: string
  text: string
}

interface SitemapEnumerable {
  type: string
  prefix: string
  enumerable: WithSlug[]
}

interface SitemapItem {
  loc: string
  changefreq?: 'daily' | 'weekly' | 'monthly'
}

interface SitemapUrl {
  url: SitemapItem
}

interface Sitemap {
  urlset: SitemapUrl[]
}

type WrappedPromise = (() => Promise<void>)
type TaskWithDefinition = [string, ...WrappedPromise[]]
