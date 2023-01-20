export const pagesPath = {
  "$404": {
    $url: (url?: { hash?: string }) => ({ pathname: '/404' as const, hash: url?.hash })
  },
  "blog": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/blog/[id]' as const, query: { id }, hash: url?.hash })
    })
  },
  "category": {
    _slug: (slug: string | number) => ({
      "page": {
        _id: (id: string | number) => ({
          $url: (url?: { hash?: string }) => ({ pathname: '/category/[slug]/page/[id]' as const, query: { slug, id }, hash: url?.hash })
        })
      },
      $url: (url?: { hash?: string }) => ({ pathname: '/category/[slug]' as const, query: { slug }, hash: url?.hash })
    })
  },
  "page": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/page/[id]' as const, query: { id }, hash: url?.hash })
    })
  },
  "privacy": {
    $url: (url?: { hash?: string }) => ({ pathname: '/privacy' as const, hash: url?.hash })
  },
  "profile": {
    $url: (url?: { hash?: string }) => ({ pathname: '/profile' as const, hash: url?.hash })
  },
  "sitemap": {
    $url: (url?: { hash?: string }) => ({ pathname: '/sitemap' as const, hash: url?.hash })
  },
  "tags": {
    _slug: (slug: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/tags/[slug]' as const, query: { slug }, hash: url?.hash })
    })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
