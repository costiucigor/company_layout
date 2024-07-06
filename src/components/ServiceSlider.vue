<script setup>
import { ref, computed, onMounted } from 'vue';
import PopUp from "@/components/Modals/PopUp.vue";

const steps = ref([
  { name: "Web development", fill: 0 },
  { name: "Product education", fill: 0 },
  { name: "Build A Team", fill: 0 },
  { name: "Build MVP", fill: 0 },
]);

const texts = ref([
  { text: "The expertise of our web team is based on: PHP/Laravel/Symfony, React/VueJs.", imageUrl: "/dev-team.png" },
  { text: "The expertise of our web team is based on: PHP/Laravel/Symfony, React/VueJs.", imageUrl: "/product-education.png" },
  { text: "The expertise of our web team is based on: PHP/Laravel/Symfony, React/VueJs.", imageUrl: "/build-team.png" },
  { text: "The expertise of our web team is based on: PHP/Laravel/Symfony, React/VueJs.", imageUrl: "/build-mvp.png" }
]);

const currentIndex = ref(0);

const nameTextClass = computed(() => (step) => ({
  'name-text': true,
  'blue-text': step.name,
}));

const fillBarStyle = (index) => {
  const height = steps.value[index].fill + "%";
  return {
    width: "2px",
    height,
    position: "relative",
    background: `linear-gradient(to bottom, #007bff ${height}, #ccc ${height})`,
  };
};

const fillProgressBar = (index) => {
  const step = steps.value[index];
  if (step.fill < 100) {
    step.fill += 1;
  } else {
    step.fill = 0;
    currentIndex.value = (index + 1) % steps.value.length;
  }
};

const changeStep = (index) => {
  if (index !== currentIndex.value) {
    currentIndex.value = index;
    steps.value.forEach((step, i) => {
      step.fill = i === index ? 0 : 100;
    });
  }
};

onMounted(() => {
  setInterval(() => {
    fillProgressBar(currentIndex.value !== null ? currentIndex.value : 0);
  }, 80);
});
</script>

<template>
  <div class="service-slider">
    <div class="service-naming">
      <div class="service-name">
        Our main <span class="text-blue">services</span>
      </div>
      <div class="service-subtext">And that will make you succedd</div>
    </div>
    <div class="services">
      <div class="service-slider">
        <div class="name-block" v-for="(step, index) in steps" :key="index" @click="changeStep(index)">
          <div class="fill-bar-wrapper">
            <div class="fill-bar" :style="fillBarStyle(index)"></div>
          </div>
          <div :class="[nameTextClass(step), { 'active-text': currentIndex === index }]">{{ step.name }}</div>
        </div>
      </div>
      <div class="text-container">
        <div v-show="currentIndex !== null" class="image">
          <img v-if="texts[currentIndex].imageUrl" :src="texts[currentIndex].imageUrl" alt="Text Image" class="text-image" />
        </div>
        <div class="text-info">
          <div class="text">
            {{ texts[currentIndex].text }}
          </div>
          <button class="banner-button">
            READ CASE STUDY
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$light-bg-color: #ffffff;
$light-text-color: #000000;

$dark-bg-color: #06111C;
$blue-dark-bg-color: #0D1D2E;
$dark-text-color: #ffffff;

$toggledarkmode: false;
.fill-bar-wrapper {
  position: relative;
  background-color: #6a7077;
  bottom: 20px;
  width: 2px;
  height: 99px;
  opacity: 0.2;
}

.service-slider {
  height: 900px;
  &[data-toggledarkmode="false"] {
    background-color: $light-bg-color;
    color: $light-text-color;
  }

  &[data-toggledarkmode="true"] {
    background-color: $dark-bg-color;
    color: $dark-text-color;
  }
  display: flex;
  flex-direction: column;
  .service-naming {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    gap: 20px;
    .service-name {
      font-family: Garamond, serif;
      font-size: 52px;
      line-height: 62.4px;
    }
    .service-subtext {
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }
}
.services {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 360px;
  .service-slider {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 390px;
  }
}

@media (max-width: 1382px) {
.service-slider {
  flex-direction: column;
  .service-slider {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 36%;
    top: 1519px;
    gap: 112px;
    flex-direction: row;
    height: 10px;
    .name-text {
      display: none;
    }
    .name-block {
      .fill-bar-wrapper {
        rotate: 90deg;
      }
    }
  }
  .services {
    flex-direction: column;
  }
}
  .text-container {
    justify-content: flex-start;
    margin-top: 82px;
    .text-info {
      flex-direction: column;
      gap: 20px;
    }
  }
}

@media (max-width: 925px) {
  .services {
    .text-container {
      width: 400px;
    }
  }
  .service-slider {
    height: 770px;
    .service-slider {
      left: 27%;
      top: 1556px;
    }
  }
}

@media (max-width: 805px) {
  .service-slider {
    .service-slider {
      left: 25%;
      top: 1558px;
    }
  }
}

@media (max-width: 725px) {
  .services {
    .service-slider {
      left: 23%;
      top: 1565px;
    }
  }
}

@media (max-width: 625px) {
  .services {
    .service-slider {
      left: 20%;
      top: 1574px;
    }
  }
}

@media (max-width: 600px) {
  .fill-bar-wrapper {
    height: 50px;
  }
  .services {
    .service-slider {
      top: 1200px;
    }
    .text-container {
      width: 200px;
      height: 400px;
      .text-image {
        width: 186px;
        height: 142px;
      }
    }
  }
  .service-slider {
    height: 512px;
    .service-naming {
      gap: 2px;
      .service-name {
        font-size: 26px;
      }
      .service-subtext {
        font-size: 16px;
      }
    }
    .service-slider {
      gap: 76px;
    }
  }
}

@media (max-width: 540px) {
  .services {
    .service-slider {
      left: 14%;
    }
  }
}

@media (max-width: 490px) {
  .services {
    .service-slider {
      gap: 18px;
      top: 1200px;
      left: 16%;
    }
  }
}

@media (max-width: 424px) {
  .services {
    .service-slider {
      display: none;
      top: 1272px;
    }
  }
}

@media (max-width: 415px) {
  .fill-bar-wrapper {
    height: 65px;
  }
    .text-container {
      width: 200px;
    }
}

.progress-bar {
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.name-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 385px;
  height: 99px;
  left: 201px;
  position: relative;
  margin-bottom: 20px;
}

@media (max-width: 600px) {
  .name-block {
    width: 410px;
    height: 248px;
  }
}

.name-text {
  cursor: pointer;
  font-family: Garamond, Serif;
  font-size: 46px;
  font-weight: 400;
  line-height: 55px;
  letter-spacing: 0em;
  text-align: left;
  transform: translateY(-50%);
}

.text-container {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 744px;
  height: 600px;

  &[data-toggledarkmode="false"] {
    background-color: $light-bg-color;
    color: $light-text-color;
  }

  &[data-toggledarkmode="true"] {
    background-color: $dark-bg-color;
    color: $dark-text-color;
  }
}

.text-info {
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 160px;
}

.text {
  width: 280px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
}

@media (max-width: 600px) {
  .text {
    font-size: 12px;
  }
  .banner-button {
    width: 88vw;
  }
}

.text-image {
    width: 390px;
    height: 350px;
}

.active-text {
  color: #057AFF;
}
</style>
