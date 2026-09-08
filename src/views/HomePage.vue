<template>
  <BasePageTemplate>
    <div class="welcome-container">
      <div class="welcome-content">
        <h1 class="hero-text">Professional Printing Services in Cape Town!</h1>
        <p>
          We are a local business specialising in an assortment of personalised gifts and custom
          printing services. Our mission is to help you create unique and memorable items that bring
          joy to your loved ones.
        </p>

        <button @click="sendMessage">WhatsApp Us Today</button>
      </div>
      <img src="/src/assets/Mugprintz Images/Mugprintz Storefront.jpg" />
    </div>

    <!-- Services Section -->
    <div class="services-panel">
      <h1 class="services-title">
        Our Services
        <MaterialDesignIcon icon="design_services" size="40px"/>
      </h1>

      <div class="services">
        <div class="service-item">
          <h4>
            <MaterialDesignIcon icon="verified" />
            Personalised Gifts
          </h4>
          <p>We create various custom gift items</p>
        </div>

        <div class="service-item">
          <h4>
            <MaterialDesignIcon icon="verified" />
            Customised Mugs
          </h4>
          <p>Personalised mugs</p>
        </div>

        <div class="service-item">
          <h4>
            <MaterialDesignIcon icon="verified" />
            Birthday & Occasion Items
          </h4>
          <p>Personalised items</p>
        </div>

        <div class="service-item">
          <h4>
            <MaterialDesignIcon icon="verified" />
            Banners & Keyrings
          </h4>
          <p>Custom banners</p>
        </div>

        <div class="service-item">
          <h4>
            <MaterialDesignIcon icon="verified" />
            Stationery Personalisation
          </h4>
          <p>Personalised stationery</p>
        </div>

        <div class="service-item">
          <h4>
            <MaterialDesignIcon icon="verified" />
            Calendar Printing
          </h4>
          <p>Personalised photo calendars</p>
        </div>

        <div class="service-item">
          <h4>
            <MaterialDesignIcon icon="verified" />
            ID Photo Printing
          </h4>
          <p>Based on the official image dimensions as required for your passport or identity document.</p>
        </div>

        <div class="service-item">
          <h4>
            <MaterialDesignIcon icon="verified" />
            Digital Photo Printing
          </h4>
          <p>Bring your fondest digital photo memories to life.</p>
        </div>

        <div class="service-item">
          <h4>
            <MaterialDesignIcon icon="add" />
            And So Much More!
          </h4>
          <p>Contact us to find out more on what we can offer you.</p>
        </div>
      </div>
    </div>

    <!-- How It Works Section -->
    <div class="how-it-works">
      <h1 class="how-it-works-title">
        How It Works
        <MaterialDesignIcon icon="print" size="40px"/>
      </h1>

      <div class="how-it-works-steps">
        <h3>Contact Us</h3>
        <p>Contact us on our WhatsApp Order-Line where one of our consultants will assist you. Provide us what you'd like to print, on what surface you'd like to print, the quantity you'd like.</p>

        <h3>We'll Be In Touch</h3>
        <p>We'll work in close contact with you to carefully curate the design that you envisioned and once you're happy, we'll print it for you.</p>

        <h3>Collection or Delivery</h3>
        <p>Once approved and printed, we'll notify you when your order is ready for collection or delivery.</p>
      </div>

      <button @click="sendMessage">Take The First Step Today</button>
    </div>

    </BasePageTemplate>
</template>
<script setup>
import MaterialDesignIcon from '@/components/Commonly Used/MaterialDesignIcon.vue'
import BasePageTemplate from '@/views/Base/BasePageTemplate.vue'

const phoneNumber = '27729996830'
function sendMessage() {
  const text = `Hey Mugprintz Team! I came across your website and would like to get in touch with you. I have some questions about your products and services. Looking forward to hearing from you!`

  const whatsappAppLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`
  const whatsappWebLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`

  window.open(whatsappAppLink, '_blank') || window.open(whatsappWebLink, '_blank')
}
</script>
<style scoped>
.page{
  padding-top: 0;
}
.welcome-container {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr;
  justify-content: space-evenly;
  text-align: center;
  background: #3D3D3D;
  color: white;
  height: 90vh;
}

.welcome-container img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.welcome-container button, .how-it-works button{
  color: white;
  border-color: #969696;
}

.welcome-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.welcome-content h1 {
  margin-bottom: 10px;
  text-align: left;
}

.welcome-content p {
  text-align: left;
}

.services-panel{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.services {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  padding: 20px;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
}

.how-it-works{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  color: white;
  background: #3D3D3D;
}

.how-it-works-steps{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  width: 50%;
}

.how-it-works-steps h3{
  margin-bottom: 5px;
}

.how-it-works-title, .services-title{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

@media (max-width: 600px) {
  .services{
    justify-content: center;
    grid-template-columns: 1fr;
  }
  .service-item {
    width: 100%;
    align-items: flex-start;
  }

  .welcome-container{
    flex-direction: column;
  }

  .welcome-container img{
    display: none;
  }

  .how-it-works-steps{
    width: 80%;
  }
}

.service-item h3 {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.service-item p {
  margin: 0;
  opacity: 0.85;
}
</style>