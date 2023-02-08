import { h } from 'vue'
import DefaultTheme from 'vitepress/theme';
import Hero from '../components/Hero.vue';
import '../main.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(Hero)
    })
  }
}