<script setup>
import data from '../../data.json';
import DefaultTheme from 'vitepress/theme';
import Card from './Card.vue';

const { Layout } = DefaultTheme;

// sort articles
const articles = data.sort(
  (a, b) => new Date(b.Updated) - new Date(a.Updated)
)

</script>

<template>
  <Layout>
    <template #home-hero-after>
      <div class="container">
        <h2 class="title">List of recent added articles</h2><br>
        <div class="article-container">
          <div v-for="article in articles">
            <Card :article="article" />
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>