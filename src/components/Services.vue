<script setup lang="ts">

import ServicesCard from "@/components/ServicesCard.vue";
</script>

<template>
  <div class="service-wrapper">
    <div class="services">
      <div class="services-title">
        <div class="title">Services</div>
        <div class="sub-title">What we develop</div>
      </div>
      <div class="service-container">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.services {
  height: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  .services-title {
    text-align: center;
    .title {
      font-family: Garamond, serif;
      font-size: 52px;
      font-weight: 400;
      line-height: 62px;
      letter-spacing: 0;
    }
    .sub-title {
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0;
    }
  }
}
  .service-container {
    display: grid;
    gap: 20px;
    margin-bottom: 82px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1000px) {
    .services {
      height: 1066vh;
    }
    .service-container {
      width: auto;
      grid-template-columns: 1fr;
    }
  }
@media (max-width: 674px) {
  .services {
    height: 688vh;
  }
}
@media (max-width: 460px) {
  .services {
    height: 772vh;
  }
}
</style>