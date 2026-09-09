<template>
  <BasePageTemplate title="Visit Us">
    <h1>Visit Us In-Store</h1>
    <p>Looking forward to seeing you!</p>
  <GoogleLocationEmbedComponent/>

    <div class="container">
      <h1>Our Storefront</h1>
      <p>Located adjacent to Clicks</p>
      <img src="../assets/Mugprintz%20Images/Mugprintz%20Storefront.jpg">
    </div>
  </BasePageTemplate>
</template>
<script setup>
import GoogleLocationEmbedComponent from '@/components/GoogleLocationEmbedComponent.vue'
import BasePageTemplate from '@/views/Base/BasePageTemplate.vue'
</script>
<style scoped>
.page{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  padding: 0;
  margin-bottom: 20px;
}

h1 {
  margin: 0;
}
.container{
  padding: 100px;
}
.container img{
  width: 80vw;
  height: auto;
  border-radius: 10px;
}
</style>