<template>
  <footer>
    <div class="container navigation">
      <nav>
        <router-link v-for="route in basicRoutes" :to="route.path" :class="router.currentRoute.value.path === route.path ? 'active' : ''"> {{ route.name }} </router-link>
      </nav>
    </div>

    <div class="container contact-details">
      <div>
        <h3>Call Us</h3>
        <a href="whatsapp://send?phone=+27 72 999 6830">(+27) 72 999 6830</a>

        <h3>Email Us</h3>
        <a href="mailto:mugprintz@gmail.com">mugprintz@gmail.com</a>

        <h3>Connect With Us On Facebook</h3>
        <a
          href="https://www.facebook.com/profile.php?id=100003782772666&mibextid=ZbWKwL"
          target="_blank"
          >Mugprintz</a>
      </div>

      <div>
        <h3 class="visit-us">
          Visit Us
        </h3>
        <p class="address">123 Main Rd.</p>
        <p class="address">Wynberg</p>
        <p class="address">Cape Town</p>
        <p class="address">Western Cape, South Africa</p>
        <p class="address">7824</p>
      </div>

      <div class="trading-hours">
        <h3>
          Trading Hours
        </h3>
        <p><strong>Monday - Friday:</strong> 07:30AM - 19:00PM</p>
        <p><strong>Saturday & Sunday:</strong>  07:30AM - 16:00PM</p>
      </div>

    </div>
    <div class="container bottom">
      <img src="/src/assets/logos/Mugprintz2.png" />
      <nav>
        <router-link v-for="route in legalRoutes" :to="route.path"> {{ route.name }} </router-link>
      </nav>
    </div>
    <div class="container versioning">
      <p class="version-number">Version: {{packageJson.version}}</p>
    </div>
  </footer>
  <div v-if="web_configuration.showGithubBanner" class="container developer">
  <h3>
  </h3>
  </div>
</template>
<script setup>
import router from '@/router/index.js'
import { web_configuration } from '../../web_configuration.js'
import packageJson from '../../package.json'

const basicRoutes = router.getRoutes().filter(x=>x.meta.category === 'basic')
const legalRoutes = router.getRoutes().filter(x=>x.meta.category === 'legal')
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
  align-items: flex-start;
  min-height: 5vh;
  width: 90vw;
  border-bottom: 1px solid #282828;
  padding: 20px;
  flex-wrap: wrap;
}

.container div{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.container p{
  margin: 10px;
  margin-left: 0;
}

.bottom{
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
}

.bottom nav{
  height: 100%;
  padding: 15px;
  border-left: 2px solid #3D3D3D;
}

.versioning{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
}

.version-number{
  font-size: 80%;
  color: #969696;
  margin: 0;
  font-weight: bold;
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

.trading-hours{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.contact-details a{
  font-weight: normal;
}

.contact-details h3{
  margin-bottom: 5px;
}

img {
  max-height: 100px;
  aspect-ratio: 1/1;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  flex-wrap: wrap;
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

@media (max-width: 600px ) {
  .container{
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
  }

  .navigation nav{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .bottom nav{
    border: none;
  }

  .versioning{
    justify-content: center;
    align-items: center;
  }
}

</style>