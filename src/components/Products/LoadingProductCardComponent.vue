<template>
  <div class="shimmer-card">
    <div class="shimmer-image"></div>
    <div class="shimmer-text shimmer-name"></div>
    <div class="shimmer-text shimmer-desc"></div>
    <div class="shimmer-text shimmer-price"></div>
    <div class="shimmer-button"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.shimmer-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 300px;
  max-width:  300px;
  padding-top: 20px;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
  background: white;
}

.shimmer-image,
.shimmer-text,
.shimmer-button {
  background: #e0e0e0;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.shimmer-image {
  width: 90%;
  height: 150px;
}

.shimmer-name {
  width: 60%;
  height: 20px;
}

.shimmer-desc {
  width: 80%;
  height: 14px;
}

.shimmer-price {
  width: 40%;
  height: 20px;
}

.shimmer-button {
  width: 100%;
  height: 40px;
  border-radius: 0 0 10px 10px;
  margin-top: 10px;
}

.shimmer-image::before,
.shimmer-text::before,
.shimmer-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -150px;
  width: 150px;
  height: 100%;
  background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%);
  animation: shimmer 1.2s infinite;
}

@keyframes shimmer {
  0% { left: -150px; }
  100% { left: 100%; }
}
</style>
