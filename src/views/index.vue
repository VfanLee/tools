<script setup>
import { RouterLink } from 'vue-router'
import { featureRoutes } from '@/router'
</script>

<template>
  <ul>
    <li v-for="route of featureRoutes.children">
      <RouterLink :to="route.path">{{ route.meta.title }}</RouterLink>
    </li>
  </ul>
</template>
