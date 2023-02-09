<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme;

</script>

<template #home-hero-before>
  <div class="container">
    <div class="banner">
      <div class="banner-hero"></div>
      <div class="banner-hero-text">
        <h1>Creating a new blog</h1>
      </div>
    </div>
  </div>
</template>