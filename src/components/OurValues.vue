<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TeamCard from "@/components/TeamCard.vue";
import ValuesCard from "@/components/ValuesCard.vue";
export default {
  components: {
    ValuesCard,
    TeamCard,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const cardData = [
      { name: 'John Doe', company: 'Company A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue...' },
      { name: 'Alice Johnson', company: 'Company B', description: 'Description for Alice Johnson.' },
      { name: 'Bob Smith', company: 'Company C', description: 'Description for Bob Smith.' },
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
  <div class="values-container">
    <div class="values">
      <div class="values-title">
        <div class="title">
          Our <span class="text-blue">values</span>
        </div>
      </div>
      <div class="description">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </div>
      <div class="values-slider">
        <swiper
            class="my-swiper"
            :modules="modules"
            :slides-per-view="4"
            :space-between="10"
        >
          <swiper-slide v-for="(data, index) in cardData" :key="index">
            <ValuesCard :name="data.name" :company="data.company" :description="data.description" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="values-slider-vertical">
        <swiper
            class="my-swiper"
            :modules="modules"
            :slides-per-view="5"
            :space-between="20"
            :direction="'vertical'"
        >
          <swiper-slide v-for="(data, index) in cardData" :key="index">
            <ValuesCard :name="data.name" :company="data.company" :description="data.description" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.values {
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
  padding-bottom: 40px;
  gap: 60px;
  .values-title {
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

.description {
  width: auto;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 27px;
  letter-spacing: 0;
  text-align: center;

}

.my-swiper {
  width: 1300px;
  margin: 0 auto;
}

@media (max-width: 1400px) {
}

.values-slider-vertical {
  display: none;
}


@media (max-width: 1100px) {
  .values-slider {
    display: none;
  }
  .values-slider-vertical {
    margin-left: 120px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .my-swiper {
    height: 1540px;
  }

  .values {
    height: auto;
  }
}

@media (max-width: 700px) {
  .values {
    gap: 8px;
    .values-title {
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