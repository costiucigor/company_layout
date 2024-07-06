<script>
import { Navigation, Pagination, Scrollbar, A11y, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MediaCard from "@/components/MediaCard.vue";
export default {
  components: {
    MediaCard,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const reviewsData = [
      { name: 'John Doe', company: 'Company A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue...' },
      { name: 'Alice Johnson', company: 'Company B', description: 'Description for Alice Johnson.' },
      { name: 'Bob Smith', company: 'Company C', description: 'Description for Bob Smith.' },
    ];
    return {
      reviewsData,
      modules: [Navigation, Pagination, Scrollbar, A11y, Grid],
    };
  },
};
</script>

<template>
  <div class="team-container">
      <div class="team-slider">
        <swiper
            :modules="modules"
            :slides-per-view="3"
            :space-between="10"
            navigation
            :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="(index) in  reviewsData" :key="index">
            <MediaCard :name="index.name" :company="index.company" :description="index.description"/>
          </swiper-slide>
        </swiper>
      </div>
      <div class="team-slider-mobile">
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="30"
            :grid="{ rows: 2, fill: 'row' }"
            :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="(data, index) in reviewsData" :key="index">
            <MediaCard :name="data.name" :company="data.company" :description="data.description" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
</template>

<style scoped lang="scss">
.team {
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
  padding-bottom: 40px;
  gap: 60px;
  .team-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    .title {
      font-family: Garamond, serif;
      font-weight: 400;
      font-size: 52px;
      line-height: 62.4px;
    }
    .title-description {
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      line-height: 16px;
      color: #6A7077;
    }
  }
}

.team-container {
  height: auto;
}

.team-slider {
  max-width: 1600px;
}

.team-slider-mobile {
  display: none;
}

@media (max-width: 1400px) {
  .team {
    height: auto;
  }
  .team-slider {
    display: none;
  }
  .team-slider-mobile {
    height: 606px;
    max-width: 342px;
    margin: 0 auto;
    display: block;
  }
}

@media (max-width: 700px) {
  .team {
    gap: 0;
    .team-title {
      .title {
        font-size: 26px;
      }
    }
  }
  .description {
    font-size: 12px;
  }
}
</style>