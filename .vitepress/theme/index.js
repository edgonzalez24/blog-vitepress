import { h } from 'vue'
import DefaultTheme from 'vitepress/theme';
import Hero from '../components/Hero.vue';
import ListArticles from '../components/ListArticles.vue';
import '../main.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(Hero),
      'home-hero-after': () => h(ListArticles),
      'doc-after': () => h('div', {}, [
        h(
          'div',
          {
            class: 'link',
          },
          [
            h(
              'a',
              {
                href: '/',
                rel: 'noopener',
              },
              [h('span', '< Back')]
            ),
          ]
        )
      ]),
    })
  }
}