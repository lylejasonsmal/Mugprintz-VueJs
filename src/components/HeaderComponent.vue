<template>
  <header :class="router.currentRoute.value.path === '/about-us' ? 'about-us' : ''">
    <img :src="router.currentRoute.value.path === '/about-us' ? logoDark: logoLight" />
    <nav>
      <router-link v-for="route in routes" :to="route.path" :class="router.currentRoute.value.path === route.path ? 'active' : ''"> {{route.name}} </router-link>
    </nav>
    <button class="desktop-button" @click="sendMessage">
      <i class="fa fa-whatsapp"/>
    </button>

    <!-- Hamburger Menu Icon for Mobile -->
    <span class="material-symbols-outlined mobile-menu-hamburger" @click="toggleMenu">
      {{isMenuOpen? "close": "menu"}}
    </span>
    <div class="mobile-menu" v-show="isMenuOpen">
      <div>
      <router-link v-for="route in routes" :to="route.path" :class="router.currentRoute.value.path === route.path ? 'active' : ''" @click="toggleMenu">
        <h3>
          <material-design-icon :icon="route.meta.icon"/> &nbsp; {{route.name}}
        </h3>
      </router-link>
      </div>

        <button @click="sendMessage">
          <i class="fa fa-whatsapp"/>
          WhatsApp Us Today
        </button>
    </div>
  </header>
</template>
<script setup>
import router from '@/router/index.js'
import logoLight from '@/assets/logos/Mugprintz.png'
import logoDark from '@/assets/logos/Mugprintz2.png'
import { ref } from 'vue'
import MaterialDesignIcon from '@/components/Commonly Used/MaterialDesignIcon.vue'

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
  width: 100%;
  height: 75px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  color: #141414;
  margin: 0;
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
  font-weight: bold;
  border: none;
}

i{
  font-size: 150%;
}

.mobile-menu-hamburger{
  display: none;
}

@media (max-width: 600px) {
  nav {
    display: none;
  }

  .mobile-menu-hamburger{
    display: flex;
  }

  .mobile-menu{
   position: fixed;
    z-index: 2000;
    top: 75px;
    right: 0;
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 140%;
    overflow-y: scroll;
    animation: expandOpen 0.5s ease-in-out;
    gap: 25px;
  }

  a{
    height: 100px;
    min-width: 50vw;
  }
  .about-us .mobile-menu{
    background: #141414;
    color: white;
  }

  .desktop-button{
    display: none;
  }

  button{
    font-size: 0.75em;
  }

  @keyframes expandOpen {
    from{
      opacity: 0;
      transform: translateX(100%);
    }
    to{
      opacity: 1;
      transform: translateX( 0%);
    }

  }
}
</style>