<template>
  <BasePageTemplate title="About Us">
  <div class="description-panel" id="norm-panel">
    <div class="txt-area">
      <img class="length-wise-img" src="/src/assets/Mugprintz Images/Mugprintz Storefront.jpg" />
    </div>

    <div class="txt-area">
      <p class="txt-description">
        We are
      </p>
      <img src="/src/assets/logos/Mugprintz2.png" class="logo">
    </div>
  </div>

  <div class="description-panel" id="rev-panel">
    <div class="txt-area">
      <img class="length-wise-img" src="/src/assets/Mugprintz Images/Mugprintz Beginnings.jpg" />
    </div>

    <div class="txt-area">
      <p class="txt-description">
        Established in 2012
      </p>
    </div>
  </div>

  <div class="description-panel" id="norm-panel">
    <div class="txt-area">
      <img class="length-wise-img" src="/src/assets/Mugprintz Images/Mugprintz Storefront.jpg" />
    </div>

    <div class="txt-area">
      <p class="txt-description">
        We're a locally-owned business, sourcing from the surrounding communities
      </p>
    </div>
  </div>

  <div class="description-panel" id="rev-panel">
    <div class="txt-area">
      <img class="length-wise-img" src="/src/assets/Mugprintz Images/Mugprintz Storefront.jpg" />
    </div>

    <div class="txt-area">
      <p class="txt-description">
        Creating smiles!
      </p>
    </div>
  </div>

  </BasePageTemplate>
</template>
<style scoped>
body, .page {
  background: #141414;
}

.description-panel {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-items: center;
  width: 100vw;
}

#rev-panel {
  display: flex;
  flex-direction: row-reverse;
}

.length-wise-img {
  width: 40vw;
  height: auto;
  border-radius: 25px;
}

.txt-area {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50vh;
  color: white;
  background: #141414;
}

.txt-description {
  align-items: center;
  justify-items: center;
  max-width: 40vw;
  font-weight: bold;
}

.logo{
  height: 100px;
}

@media (max-width: 600px) {
  .length-wise-img {
    width: 100%;
    height: 50%;
    border-radius: 5px;
    object-fit: cover;
  }

  .txt-area {
    width: 100%;
    height: 35vh;
    padding: 10px;
  }

  .txt-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    text-align: center;
  }
}
</style>
<script setup>
import BasePageTemplate from '@/views/Base/BasePageTemplate.vue'
</script>