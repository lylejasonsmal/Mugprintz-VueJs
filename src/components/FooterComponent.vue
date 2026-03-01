<template>
  <footer>
    <div class="container">
      <nav>
        <router-link v-for="route in routes" :to="route.path" :class="router.currentRoute.value.path === route.path ? 'active' : ''"> {{ route.name }} </router-link>
      </nav>
    </div>

    <div class="container contact-details">
      <div>
        <h4>Call Us</h4>
        <router-link to="whatsapp://send?phone=+27 72 999 6830">(+27) 72 999 6830</router-link>

        <h4>Email Us</h4>
        <router-link to="mailto:mugprintz@gmail.com">mugprintz@gmail.com</router-link>

        <h4>Connect With Us On Facebook</h4>
        <router-link
          to="https://www.facebook.com/profile.php?id=100003782772666&mibextid=ZbWKwL"
          target="_blank"
          >Mugprintz</router-link>
      </div>
      <div>
        <h3 class="visit-us">Visit Us</h3>
        <p class="address">123 Main Rd.</p>
        <p class="address">Wynberg</p>
        <p class="address">Cape Town</p>
        <p class="address">Western Cape, South Africa</p>
        <p class="address">7824</p>
      </div>
    </div>
    <div class="container bottom">
      <img src="/src/assets/logos/Mugprintz2.png" />
    </div>
  </footer>
  <div class="container developer">

  </div>
</template>
<script setup>
import router from '@/router/index.js'

const routes = router.getRoutes()
</script>
<style scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  top: inherit;
  width: 100vw;
  background: #141414;
  color: white;
  margin: 0;
  padding: 20px;
  gap: 0;
  border-top: 1px solid #282828;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-height: 5vh;
  width: 90vw;
  border-bottom: 1px solid #282828;
  padding: 20px;
}

.bottom{
  justify-content: flex-start;
}

.developer{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
  width: 100vw;
  background: blueviolet;
  box-sizing: border-box;
}

.contact-details a{
  font-weight: normal;
}

img {
  max-height: 7.5vh;
  aspect-ratio: 1/1;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
}

a {
  all: unset;
  font-weight: bold;
  color: #969696;
  font-size: 90%;
  transition: 0.3s ease-in-out;
}

a:hover {
  color: white;
}

.active{
  color: white;
}

.active:hover {
  opacity: 75%;
}

</style>