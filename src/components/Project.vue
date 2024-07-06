<script setup>
const props = defineProps(['name', 'technologies', 'image', 'bgImage', 'buttonText', 'openModal']);
</script>

<template>
  <div class="project-container">
    <div class="project-example">
      <img class="project-img" :src="image" :alt="name">
    </div>
    <div class="project-image">
      <img :src="bgImage" alt="Project Image">
    </div>
    <div class="project-naming">
      <div class="project-name">
        {{ name }}
      </div>
      <div class="project-technologies">
        <div class="technology" v-for="(tech, techIndex) in technologies" :key="techIndex">
          {{ tech }}
        </div>
      </div>
      <button class="banner-button" @click="openModal">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.projects-container {
  display: flex;
  flex-direction: column;
}

.project-container {
  height: 800px;
  position: relative;
  .project-naming {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 201px;
    gap: 60px;
    .project-name {
      font-family: Garamond, serif;
      font-size: 52px;
      line-height: 62.4px;
      font-weight: 400;
    }
    .project-technologies {
      display: flex;
      flex-direction: row;
      gap: 40px;
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      max-width: 351px;
      .technology {
        padding: 10px;
      }
    }
  }
}

.project-image {
  position: relative;
  top: -318px;
  float: right;
  width: 473px;
  height: 800px;
  text-align: right;
  img {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 1100px) {
  .project-container {
    height: 724px;
    //background: url('@/assets/static/img/green-bg.png') no-repeat center center fixed;
    //background-size: cover;
    .project-naming {
      z-index: 6;
      background: white;
      gap: 20px;
      padding-bottom: 20px;
      color: black;
      margin: 155px 10px 0 10px;
      justify-content: center;
      align-items: center;
      .banner-button {
        width: 280px;
      }
      .project-name {
        font-size: 26px;
      }
      .project-technologies {
        font-size: 12px;
      }
    }
  }
  //.swiper-slide:nth-child(2) .project-container {
  //  background: url('@/assets/static/img/purple-bg.png') no-repeat center center fixed;
  //}
  .project-image {
    z-index: -1;
    position: absolute;
    top: 1px;
    width: 1100px;
    height: 847px;
  }
}

.project-example {
  z-index: 6;
  position: relative;
  width: 400px;
  border-radius: 20px;
  left: 1200px;
  top: 264px;
  box-shadow: 10px 10px 86px 30px rgba(0, 0, 0, 0.2);
  rotate: 10.81deg;
  img {
    width: 470.9px;
    height: 315.29px;
    border-radius: 20px;
  }
}

@media (max-width: 1700px) {
  .project-example {
    left: 800px;
  }
}

@media (max-width: 1300px) {
  .project-naming {
    position: relative;
    z-index: 6;
  }
  .project-example {
    width: 300px;
    left: 564px;
    z-index: 1;
  }
}

@media (max-width: 1090px) {
  .project-example {
    top: 226px;
    left: 42%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
}

@media (max-width: 620px) {
  .project-container {
    height: 578px;
  }
  .project-example {
    left: 48%;
   img {
     width: 300.42px;
     height: 195.27px;
   }
  }
}
</style>