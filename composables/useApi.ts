import { useRuntimeConfig } from 'nuxt/app'
import type {
  Activity,
  BlogPost,
  MemberGroup,
  Page,
  Product,
  ProductCategory,
  Sponsor,
  SponsorPlacement,
  Menu,
  SettingsMap,
  SupportCampaign,
  Timeline,
  TransparencyDocument,
  ContactForm,
  PaginatedResponse,
} from '~/types/api'

export const useApi = () => {
  const config = useRuntimeConfig()
  const apiFetch = $fetch.create({ baseURL: config.public.apiBase as string })

  return {
    /** Instancia cruda para casos no cubiertos por los módulos */
    $fetch: apiFetch,

    blog: {
      getAll: (params?: { page?: number; per_page?: number }) =>
        apiFetch<PaginatedResponse<BlogPost>>('/api/v1/blog', { params }),
      getBySlug: (slug: string) =>
        apiFetch<BlogPost>(`/api/v1/blog/${slug}`),
    },

    pages: {
      getBySlug: (slug: string) =>
        apiFetch<Page>(`/api/v1/pages/${slug}`),
    },

    products: {
      getAll: (params?: { page?: number; per_page?: number; category?: string }) =>
        apiFetch<PaginatedResponse<Product>>('/api/v1/products', { params }),
      getBySlug: (slug: string) =>
        apiFetch<Product>(`/api/v1/products/${slug}`),
    },

    productCategories: {
      getAll: () =>
        apiFetch<ProductCategory[]>('/api/v1/product-categories'),
    },

    sponsors: {
      getAll: () =>
        apiFetch<Sponsor[]>('/api/v1/sponsors'),
      getBySlug: (slug: string) =>
        apiFetch<Sponsor>(`/api/v1/sponsors/${slug}`),
    },

    menus: {
      getByName: (name: 'main' | 'footer') =>
        apiFetch<Menu>(`/api/v1/menus/${name}`),
    },

    settings: {
      getAll: () =>
        apiFetch<{ settings: SettingsMap }>('/api/v1/settings').then(r => r.settings),
      getByKey: (key: string) =>
        apiFetch<{ key: string; value: string }>(`/api/v1/settings/${key}`),
    },

    supportCampaigns: {
      getAll: () =>
        apiFetch<SupportCampaign[]>('/api/v1/support-campaigns'),
      getBySlug: (slug: string) =>
        apiFetch<SupportCampaign>(`/api/v1/support-campaigns/${slug}`),
    },

    transparencyDocuments: {
      getAll: (params?: { type?: string; year?: number }) =>
        apiFetch<{ data: TransparencyDocument[] }>('/api/v1/transparency-documents', { params })
          .then(r => r.data),
    },

    activities: {
      getAll: (params?: { year?: number }) =>
        apiFetch<Activity[]>('/api/v1/activities', { params }),
    },

    timeline: {
      getAll: (params?: { year?: number }) =>
        apiFetch<Timeline[]>('/api/v1/timeline', { params }),
    },

    contact: {
      send: (data: ContactForm) =>
        apiFetch<{ message: string }>('/api/v1/contact', { method: 'POST', body: data }),
    },

    sponsorPlacements: {
      getAll: (params?: { placement?: string }) =>
        apiFetch<SponsorPlacement[]>('/api/v1/sponsor-placements', { params }),
    },

    memberGroups: {
      getAll: () =>
        apiFetch<{ data: MemberGroup[] }>('/api/v1/member-groups'),
    },
  }
}
