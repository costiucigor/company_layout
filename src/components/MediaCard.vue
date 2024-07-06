<script setup>
import { defineProps } from 'vue';
import {useThemeStore} from "@/stores/theme";

defineProps(['tag', 'name', 'company', 'description']);
const themeStore = useThemeStore();
</script>

<template>
  <div class="card">
    <div class="img-block">
        <div class="image" :data-toggledarkmode="themeStore.darkMode.toString()">
          <img src="../assets/static/img/placeholder.png" alt="">
        </div>
    </div>
    <div class="tag"><span class="text-blue"># Developement</span></div>
    <div class="date">Sep 29, 2022</div>
    <div class="media-title">Introducing stock</div>
    <div class="description">{{ description }}</div>
    <div class="by-author">
      <span class="text-blue">By {{ name }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
$toggledarkmode: false;

$light-bg-color: #ffffff;
$light-text-color: #000000;

$transition-duration: 0.5s;

$dark-bg-color: #06111C;
$blue-dark-bg-color: #0D1D2E;
$dark-text-color: #ffffff;
$gray-bg-color: #101c2c;

$bg-color: if($toggledarkmode, $dark-bg-color, $light-bg-color);
$text-color: if($toggledarkmode, $dark-text-color, $light-text-color);

.card {
  width: 387px;
  height: 464px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  gap: 8px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

.by-author {
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
}

.author-block {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  gap: 8px;
  margin-bottom: 8px;
}

.profile-picture {
  width: 50px;
  border-radius: 50%;
  height: 50px;
  background-color: #ccc;
  margin-right: 8px;
}

.img-block {
  display: flex;
  flex-direction: column;
  .image {
    &[data-toggledarkmode="false"] {
      background-color: #FAFAFA;
      color: $light-text-color;
    }

    &[data-toggledarkmode="true"] {
      background-color: $gray-bg-color;
      color: $dark-text-color;
    }
    width: 387px;
    height: 200px;
    img {
      width: 387px;
      height: 200px;
    }
  }
}

.tag {
  font-family: Garamond,serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0;
  text-align: left;
}

.company {
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;
  text-align: left;
  color: #6A7077;
}

.tag {
  font-family: Garamond, serif;
  font-size: 20px;
  line-height: 22px;
  font-weight: 400;
}

.date {
  font-family: Garamond, serif;
  font-weight: 400;
  font-size: 14px;
}

.media-title {
  font-weight: 700;
  font-size: 28px;
  line-height: 30.8px;
}

.description {
  width: 320px;
  max-height: 108px;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 1400px) {
  .card {
    width: 287px;
    height: auto;
  }
  .img-block {
    .image {
      width: 287px;
      height: 100px;
      img {
        width: 287px;
        height: 100px;
      }
    }
  }
}
</style>
