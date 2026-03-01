<template>
  <div class="product-card">
    <img :src="params.product.imgSrc" :alt="params.product.name" class="product-image" />
    <h4 class="product-name">{{ params.product.name }}</h4>
    <p v-if="params.product.description || params.product.price  " class="show-more" @click="toggleInfo">
      {{ showDetailsMessage }}
      <span class="material-symbols-outlined"> {{isInfoShown? 'keyboard_arrow_up' : 'keyboard_arrow_down'}} </span>
    </p>
    <div class="additional-details" v-show="isInfoShown">
      <p v-if="params.product.description" class="product-description">
        {{ params.product.description }}
      </p>
      <h1 v-if="params.product.price">{{ params.product.price }}</h1>
    </div>
    <button @click="sendMessage">
      Enquire About This Product
      <span class="material-symbols-outlined"> chevron_right </span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const params = defineProps({
  product: Object,
})

const isInfoShown = ref(false)
const showDetailsMessage = ref('Show More Details')

function toggleInfo() {
  showDetailsMessage.value = isInfoShown.value ? 'Show More Details' : 'Hide Details'
  isInfoShown.value = !isInfoShown.value
}
const phoneNumber = '27729996830'

function sendMessage() {
  const text = `Hey Mugprintz Team, I'd like to enquire about this product: ${params.product.name}`

  const whatsappAppLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`
  const whatsappWebLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`

  window.open(whatsappAppLink, '_blank') || window.open(whatsappWebLink, '_blank')
}
</script>

<style scoped>
.product-card {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
  background: white;
  position: relative;
  gap: 10px;
  padding-top: 20px;
  height: 100%;
  font-size: 90%;
}

.show-more {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  color: #a5a5a5;
}

.show-more:hover {
  color: #141414;
}

.additional-details{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: 0.5s ease-in-out;
}
.product-image {
  width: 90%;
  height: auto;
}

.product-name {
  text-align: center;
  margin: 0.5rem 0;
}

.product-description {
  padding: 10px;
  margin: 0;
  color: #a5a5a5;
}

button {
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 100%;
  border: none;
  border-top: 1px solid #d5d5d5;
  font-weight: normal;
  border-radius: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
