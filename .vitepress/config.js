const META_TITLE = 'Blog VitePress';

export default {
  lang: 'es',
  title: META_TITLE,
  description: 'A new website',
  themeConfig: {
    siteTitle: false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/edgonzalez24/blog-vitepress' },
    ]
  },
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/vite.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/vite.png' }],
  ],
}