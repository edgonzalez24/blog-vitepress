<script setup>
  defineProps({
    article: Object
  });

  const transformDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

</script>

<template>
  <a :href="article.path">
    <div class="card">
      <div class="card-header">
        <img :src="article.image" :alt="article.title" />
      </div>
      <div class="card-body">
        <h4>
          {{ article.title }}
        </h4>
        <p>
          {{ article.description }}
        </p>
        <div>
          <h5 class="date">{{ transformDate(article.Updated) }}</h5>
        </div>
      </div>
    </div>
  </a>
</template>