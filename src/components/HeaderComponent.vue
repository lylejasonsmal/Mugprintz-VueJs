<template>
  <header :class="router.currentRoute.value.path === '/about-us' ? 'about-us' : ''">
    <img :src="router.currentRoute.value.path === '/about-us' ? logoDark: logoLight" />
    <nav>
      <a v-for="route in routes" :href="route.path" :class="router.currentRoute.value.path === route.path ? 'active' : ''"> {{route.name}} </a>
    </nav>
    <button>
      <i class="fa fa-whatsapp"/>
      Whatsapp Us Today
    </button>
  </header>
</template>
<script setup>
import router from '@/router/index.js'
import logoLight from '@/assets/logos/Mugprintz.png'
import logoDark from '@/assets/logos/Mugprintz2.png'

const routes = router.getRoutes()
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
  border-bottom: 5px solid #d5d5d5;
}

.about-us {
  background: #141414;
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
  border-bottom: 5px solid #484848;
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
</style>