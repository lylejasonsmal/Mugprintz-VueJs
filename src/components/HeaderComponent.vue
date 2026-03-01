<template>
  <header :class="router.currentRoute.value.path === '/about-us' ? 'about-us' : ''">
    <img :src="router.currentRoute.value.path === '/about-us' ? logoDark: logoLight" />
    <nav>
      <router-link v-for="route in routes" :to="route.path" :class="router.currentRoute.value.path === route.path ? 'active' : ''"> {{route.name}} </router-link>
    </nav>
    <button @click="sendMessage">
      <i class="fa fa-whatsapp"/>
    </button>

    <!-- Hamburger Menu Icon for Mobile -->
    <span class="material-symbols-outlined" @click="toggleMenu">
      menu
    </span>
    <div class="mobile-menu" v-show="isMenuOpen">
      <router-link v-for="route in routes" :to="route.path" :class="router.currentRoute.value.path === route.path ? 'active' : ''"> {{route.name}} </router-link>
    </div>
  </header>
</template>
<script setup>
import router from '@/router/index.js'
import logoLight from '@/assets/logos/Mugprintz.png'
import logoDark from '@/assets/logos/Mugprintz2.png'
import { ref } from 'vue'

const routes = router.getRoutes()
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

const phoneNumber = '27729996830'
function sendMessage() {
  const text = `Hey Mugprintz Team! I came across your website and would like to get in touch with you. I have some questions about your products and services. Looking forward to hearing from you!`

  const whatsappAppLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`
  const whatsappWebLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`

  window.open(whatsappAppLink, '_blank') || window.open(whatsappWebLink, '_blank')
}
</script>
<style scoped>
header {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 10vh;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #d5d5d5;
  z-index: 1000;
  color: #141414;
}

img {
  height: 100%;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  height: 100%;
  text-align: center;
}

a {
  all: unset;
  font-weight: bold;
  color: #d5d5d5;
  font-size: 90%;
  transition: 0.3s ease-in-out;
  padding: 10px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

a:hover {
  color: #141414;
}

.active{
  color: #141414;
  border-bottom: 2px solid #141414;
  transition: 0.1s ease-in-out;
}

.active:hover {
  opacity: 75%;
  border-bottom: 5px solid blueviolet;
}

.about-us {
  background: #141414;
  color: white;
  border-bottom: 1px solid #282828;
}

.about-us a {
  color: #484848;
}

.about-us a:hover {
  color: white;
}

.about-us .active{
  color: white;
  border-bottom: 2px solid white;
  transition: 0.1s ease-in-out;
}

.about-us .active:hover {
  opacity: 75%;
  border-bottom: 5px solid blueviolet;
}

button{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #25D366;
  color: white;
  gap: 5px;
}

i{
  font-size: 150%;
}

@media (max-width: 600px) {
  nav {
    display: none;
  }

  .mobile-menu{
   position: fixed;
    z-index: 2000;
    top: 10vh;
    right: 0;
    width: 100vw;
    height: 90vh;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    font-size: 140%;
  }

  button{
    display: none;
  }
}
</style>