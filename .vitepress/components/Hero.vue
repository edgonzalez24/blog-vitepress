<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <div class="container">
        <div class="banner">
          <div class="banner-hero"></div>
          <div class="banner-hero-text">
            <h1>Create new blog</h1>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>