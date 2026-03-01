<template>
  <div class="container">
    <div v-for="categoryName in Object.keys(productCategories)" :key="categoryName">
      <!-- Pass the category name to the card component -->
      <ProductCategoryCardComponent :category="categoryName" />
    </div>
  </div>
</template>

<script setup>
import productCategories from '@/assets/Products/ProductCategories.js'
import ProductCategoryCardComponent from '@/components/ProductCategoryCardComponent.vue'
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
