// types/api.ts
// Interfaces TypeScript derivadas de los Laravel Resources de escaladapro-api

export interface MediaItem {
  id: number
  url: string
  file_name: string
  alt: string | null
  mime_type: string
  size: number
}

export interface SectionItem {
  id: number
  title: string
  body: string | null
  link_url: string | null
  link_label: string | null
  sort_order: number
  settings: Record<string, unknown> | null
}

export interface PageSection {
  id: number
  type: string
  heading: string | null
  subheading: string | null
  body: string | null
  sort_order: number
  settings: Record<string, unknown> | null
  featured_media: Pick<MediaItem, 'id' | 'url' | 'file_name' | 'alt'> | null
  items: SectionItem[]
  media: MediaItem[]
}

export interface Page {
  id: number
  title: string
  slug: string
  seo_title: string | null
  seo_description: string | null
  sections: PageSection[]
}

export interface BlogPost {
  id: number
  title: string
  slug: string
  category: string
  excerpt: string | null
  body: string
  published_at: string
  is_featured: boolean
  author: { name: string }
  featured_media: MediaItem | null
  seo_title: string | null
  seo_description: string | null
}

export interface ProductCategory {
  id: number
  name: string
  slug: string
}

export interface Product {
  id: number
  name: string
  slug: string
  summary: string | null
  description: string | null
  price: number | null
  currency: string | null
  status: string
  category: ProductCategory | null
  featured_media: MediaItem | null
  gallery: MediaItem[]
}

export interface SponsorPlacement {
  id: number
  placement: string
  title: string | null
  body: string | null
  banner: MediaItem | null
  link_url: string | null
  sort_order: number
  sponsor: {
    id: number
    name: string
    slug: string
    logo: MediaItem | null
  }
}

export interface Sponsor {
  id: number
  name: string
  slug: string
  tagline: string | null
  description: string | null
  website_url: string | null
  logo: MediaItem | null
  slide_image: MediaItem | null
  gallery: MediaItem[]
  contact: {
    name: string | null
    title: string | null
    text: string | null
    image: MediaItem | null
  }
  social: {
    facebook: string | null
    twitter: string | null
    email: string | null
  }
  status: string
}

export interface MenuItem {
  id: number
  label: string
  url: string
  sort_order: number
  children: MenuItem[]
}

export interface Menu {
  id: number
  name: string
  items: MenuItem[]
}

export interface Setting {
  key: string
  value: string
  label: string
}

export type SettingsMap = Record<string, string>

export interface SupportMethod {
  id: number
  type: string
  title: string
  body: string | null
  image: string | null
  settings: Record<string, string> | null
}

export interface SupportCampaign {
  id: number
  slug: string
  name: string
  description: string | null
  status: string
  start_at: string | null
  end_at: string | null
  methods: SupportMethod[]
}

export interface TransparencyDocument {
  id: number
  title: string
  slug: string
  type: string
  year: number | null
  description: string | null
  published_at: string | null
  file: {
    id: number
    url: string
    file_name: string
    mime_type: string
    size: number
  } | null
}

export interface Activity {
  id: number
  name: string
  year: number
  order: number
  file: {
    id: number
    url: string
    file_name: string
    mime_type: string
    size: number
  } | null
  published_at: string | null
}

export interface Timeline {
  id: number
  date: string
  title: string
  body: string
  year: number
  month: number
  order: number
  image: {
    id: number
    url: string
    file_name: string
    alt: string | null
  } | null
  published_at: string | null
}

export interface ContactForm {
  name: string
  email: string
  subject?: string | null
  message: string
}

export interface PaginatedResponse<T> {
  data: T[]
  meta: {
    current_page: number
    last_page: number
    per_page: number
    total: number
  }
}

export interface Member {
  id: number
  name: string
  role: string | null
  photo: Pick<MediaItem, 'id' | 'url' | 'file_name' | 'alt'> | null
  sort_order: number
}

export interface MemberGroup {
  id: number
  name: string
  slug: string
  sort_order: number
  members: Member[]
}
