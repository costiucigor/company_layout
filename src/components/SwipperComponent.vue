<script>
import Card from "@/components/ReviewCard.vue"; // Adjust the path according to your project structure
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ReviewCard from "@/components/ReviewCard.vue";
export default {
  components: {
    ReviewCard,
    Swiper,
    SwiperSlide,
    Card
  },
  setup() {
    const cardData = [
      { name: 'John Doe', company: 'Company A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue...' },
      { name: 'Alice Johnson', company: 'Company B', description: 'Description for Alice Johnson.' },
      { name: 'Bob Smith', company: 'Company C', description: 'Description for Bob Smith.' },
      { name: 'Bob Smith', company: 'Company C', description: 'Description for Bob Smith.' }
    ];
    return {
      cardData,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<template>
  <div class="reviews-wrapper">
    <div class="reviews">
      <div class="reviews-title">
        <div class="title">
          Reviews
        </div>
        <div class="title-description">
          Lorem ipsum is placeholder text commonly used in the graphic, print, an.
        </div>
      </div>
      <div class="reviews-slider">
        <swiper
            :modules="modules"
            :slides-per-view="3"
            :space-between="0"
            navigation
            :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="(data, index) in cardData" :key="index">
            <ReviewCard :name="data.name" :company="data.company" :description="data.description" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="reviews-slider-mobile">
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="(data, index) in cardData" :key="index">
            <ReviewCard :name="data.name" :company="data.company" :description="data.description" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reviews-wrapper {
  height: 700px;
}
.reviews {
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
  padding-bottom: 40px;
  gap: 60px;
  .reviews-title {
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
.reviews-slider {
  max-width: 1600px;
}

.reviews-slider-mobile {
  display: none;
}

@media (max-width: 1400px) {
  .reviews-slider {
    max-width: 946px;
  }
}

@media (max-width: 1000px) {
  .reviews-slider {
    display: none;
  }
  .reviews-slider-mobile {
    max-width: 300px;
    display: block;
  }
}
</style>