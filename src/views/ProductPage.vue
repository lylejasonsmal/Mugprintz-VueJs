<template>
  <div class="ad-banner">
    <div class="banner-track">
      <div class="banner-item">
        <h1>Create The Perfect Gift!</h1>
        <p>Explore our catalogue and make up the perfect gift for a friend or loved one!</p>
      </div>

      <div class="banner-item">
        <h1>High Quality Mug Printing</h1>
        <p>Create custom mugs for gifts, events, or your business.</p>
      </div>

      <div class="banner-item">
        <h1>Bulk Orders Available</h1>
        <p>Contact us for special pricing on large orders.</p>
      </div>

      <div class="banner-item">
        <h1>Place Your Ad Here Today</h1>
        <p>Contact us for special pricing on large orders.</p>
      </div>

      <!--Duplicates-->
      <div class="banner-item">
        <h1>Create The Perfect Gift!</h1>
        <p>Explore our catalogue and make up the perfect gift for a friend or loved one!</p>
      </div>

      <div class="banner-item">
        <h1>High Quality Mug Printing</h1>
        <p>Create custom mugs for gifts, events, or your business.</p>
      </div>

      <div class="banner-item">
        <h1>Bulk Orders Available</h1>
        <p>Contact us for special pricing on large orders.</p>
      </div>

      <div class="banner-item">
        <h1>Place Your Ad Here Today</h1>
        <p>Contact us for special pricing on large orders.</p>
      </div>
    </div>
  </div>

  <div class="container">
    <div v-for="categoryName in Object.keys(productCategories)" :key="categoryName">
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
  padding: 5px;
}

.ad-banner {
  width: 100%;
  overflow: hidden;
  background: #3D3D3D;
  color: white;
  margin-bottom: 20px;
}

.banner-track {
  display: flex;
  width: 400vw;
  animation: carousel 80s linear infinite;
}

.banner-item {
  width: 100vw;
  flex-shrink: 0;
  padding: 40px 20px;
  text-align: center;
}

@keyframes carousel {
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(-400vw);
  }

}

@media (max-width: 600px) {
  .banner-track {
    animation: carousel 40s linear infinite;
  }
}

</style>
