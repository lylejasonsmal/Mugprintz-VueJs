<template>
  <div>
    <h2>{{params.notification.name}}</h2>
    <p>{{params.notification.description}}</p>
  </div>
</template>
<script setup>
const params = defineProps({
  notification: Object
})
</script>
<style scoped>
 div{
   width: 100%;
   border-radius: 15px;
   background: crimson;
   color: white;
   padding: 10px;
 }
</style>