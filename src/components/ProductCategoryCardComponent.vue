<script setup>
import productCategories from '@/assets/Products/ProductCategories.js'
import ProductCardComponent from '@/components/Products/ProductCardComponent.vue'

const params = defineProps({
  category: String
})

const products = productCategories[params.category] || []
</script>

<template>
  <div class="category-section">
    <h1>{{ category }}</h1>
    <div class="products-row">
      <ProductCardComponent v-for="product in products" :product="product" :product-category="category"/>
    </div>
  </div>
</template>

<style scoped>
.category-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  gap: 10px;
}

.products-row {
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  width: 100%;
}

h1 {
  margin: 0;
}
</style>
