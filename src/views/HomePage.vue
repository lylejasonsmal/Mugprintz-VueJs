<template>
  <div class="page">

    <!-- Welcome Section -->
    <div class="welcome-container">
      <div class="welcome-content">
        <h1>Welcome To Mugprintz!</h1>
        <p>
          We are a local business specialising in personalised gifts and custom printing services.
          Our mission is to help you create unique and memorable items that bring joy to your loved ones.
        </p>


        <button @click="sendMessage">
          WhatsApp Us Today
        </button>
      </div>
    </div>

    <!-- Services Section -->
    <div class="services">
      <h1>Our Services</h1>

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

    </div>

  </div>
</template>
<script setup>
import MaterialDesignIcon from '@/components/Commonly Used/MaterialDesignIcon.vue';

  const phoneNumber = '27729996830'
  function sendMessage() {
    const text = `Hey Mugprintz Team! I came across your website and would like to get in touch with you. I have some questions about your products and services. Looking forward to hearing from you!`

    const whatsappAppLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`
    const whatsappWebLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`

    window.open(whatsappAppLink, '_blank') || window.open(whatsappWebLink, '_blank')
  }
</script>
<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
}

.welcome-container {
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 20px;
  text-align: center;
  background: #a59279;
  color: white;
  height: 50vh;
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

.services {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
}

@media (max-width: 600px) {
  .service-item {
    align-items: flex-start;
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