const META_TITLE = 'Blog VitePress';

export default {
  lang: 'es',
  title: META_TITLE,
  description: 'A new website',
  themeConfig: {
    siteTitle: false
  },
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/vite.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/vite.png' }],
  ]
}