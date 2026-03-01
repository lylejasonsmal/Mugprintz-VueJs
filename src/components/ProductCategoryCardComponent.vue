<script setup>
import productCategories from '@/assets/Products/ProductCategories.js'
import ProductCardComponent from '@/components/ProductCardComponent.vue'

const params = defineProps({
  category: String
})

const products = productCategories[params.category] || []
</script>

<template>
  <div class="category-section">
    <h1 class="category-title">{{ category }}</h1>
    <div class="products-row">
      <ProductCardComponent v-for="product in products" :product="product"/>
    </div>
  </div>
</template>

<style scoped>
.category-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
}

.products-row {
  display: flex;
  gap: 1rem;
  width: 100%;
}

.category-title {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
