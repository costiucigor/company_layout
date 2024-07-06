<script setup lang="ts">
import { defineProps } from 'vue';

interface CaseStudioProps {
  title: string;
  technologies: string[];
  imageSrc: string;
  backgroundColor: string;
  textColor: string;
}

const props = defineProps<CaseStudioProps>();

</script>

<template>
  <div class="case-studio-card" :style="{ background: props.backgroundColor, color: props.textColor }">
    <div class="case-studio-title">
      {{ props.title }}
    </div>
    <div class="case-studio-tech" :style="{ color: props.textColor}">
      <div v-for="(tech, index) in props.technologies" :key="index" class="technology" :style="{ border: '1px solid ' + props.textColor }">
        {{ tech }}
      </div>
    </div>
    <div class="case-studio-img">
      <img :src="props.imageSrc" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
.case-studio-card {
  width: 590px;
  height: 450px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 19px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translate(-2%, -2%);
  }
  .case-studio-img {
    position: relative;
    margin-top: -100px;
    img {
      width: 590px;
      height: 450px;
    }
  }
  .case-studio-title {
    margin-top: 20px;
    margin-left: 20px;
    font-family: Garamond, serif;
    font-size: 28px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0;
    text-align: left;
  }
  .case-studio-tech {
    position: relative;
    z-index: 6;
    margin-top: 20px;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    color:  #6A7077;
    .technology {
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-size: 12px;
      font-weight: 600;
      line-height: 12px;
      letter-spacing: 0;
      text-align: center;

      padding: 6px;
      border-radius: 4px;
      border: 1px solid  #6A7077;
    }
  }
}

@media (max-width: 600px) {
  .case-studio-card {
    width: auto;
    height: auto;
    .case-studio-img {
      img {
        width: 490px;
        height: 350px;
      }
    }
  }
}

@media (max-width: 495px) {
  .case-studio-card {
    .case-studio-img {
      img {
        width: 390px;
        height: 250px;
      }
    }
  }
}

@media (max-width: 385px) {
  .case-studio-card {
    .case-studio-img {
      img {
        width: 290px;
        height: 150px;
      }
    }
  }
}
</style>