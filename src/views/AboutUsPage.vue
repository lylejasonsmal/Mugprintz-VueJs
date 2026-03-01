<template>
  <div class="description-panel" id="norm-panel">
    <div class="txt-area">
      <img class="length-wise-img" src="/src/assets/Mugprintz Images/Mugprintz Storefront.jpg" />
    </div>

    <div class="txt-area">
      <h4 class="txt-description">
        We Are
      </h4>
      <img src="/src/assets/logos/Mugprintz2.png" class="logo">
    </div>
  </div>

  <div class="description-panel" id="rev-panel">
    <div class="txt-area">
      <img class="length-wise-img" src="/src/assets/Mugprintz Images/Mugprintz Beginnings.jpg" />
    </div>

    <div class="txt-area">
      <h4 class="txt-description">
        Established in 2012
      </h4>
    </div>
  </div>

  <div class="description-panel" id="norm-panel">
    <div class="txt-area">
      <img class="length-wise-img" src="/src/assets/Mugprintz Images/Mugprintz Storefront.jpg" />
    </div>

    <div class="txt-area">
      <h4 class="txt-description">
        We're a locally-owned business, sourcing from the surrounding communities
      </h4>
    </div>
  </div>

  <div class="description-panel" id="rev-panel">
    <div class="txt-area">
      <img class="length-wise-img" src="/src/assets/Mugprintz Images/Mugprintz Storefront.jpg" />
    </div>

    <div class="txt-area">
      <h4 class="txt-description">
        Creating smiles
      </h4>
    </div>
  </div>
</template>
<style scoped>
body {
  background: #141414;
}

.description-panel {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-items: center;
  width: 100vw;
}

#rev-panel {
  display: flex;
  flex-direction: row-reverse;
}

.length-wise-img {
  width: 40vw;
  height: auto;
  border-radius: 25px;
}

.txt-area {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50vh;
  color: white;
  background: #141414;
}

.txt-description {
  align-items: center;
  justify-items: center;
  max-width: 40vw;
}

#sa-flag{
  background: white;
}

.logo{
  height: 15vh;
}
</style>