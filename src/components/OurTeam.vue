<script>
import { Navigation, Pagination, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TeamCard from "@/components/TeamCard.vue";
export default {
  methods: {
    Grid() {
      return Grid
    }
  },
  components: {
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
      modules: [Navigation, Pagination, Grid],
    };
  },
};
</script>

<template>
  <div class="team-container">
    <div class="team">
      <div class="team-title">
        <div class="title">
          Our <span class="text-blue">team</span>
        </div>
      </div>
      <div class="team-slider">
        <swiper
            :modules="modules"
            :slides-per-view="4"
            :grid="{
      rows: 1,
      fill: 'column'
    }"
            :space-between="30"
            navigation
            :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="(data, index) in cardData" :key="index">
            <TeamCard :name="data.name" :company="data.company" :description="data.description" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="team-slider-mobile" style="overflow: hidden;">
        <swiper
            :slidesPerView="2"
            :grid="{
      rows: 2,
    }"
            :spaceBetween="10"
            :pagination="{
      clickable: true,
    }"
            :modules="modules"
            class="mySwiper"
        >
          <swiper-slide v-for="(data, index) in cardData" :key="index">
            <TeamCard :name="data.name" :company="data.company" :description="data.description" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="team-description">
        <div class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.
          Eget magna fermentum iaculis eu non diam.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.swiper {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.team-description {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: calc((100% - 30px) / 2) !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.team {
  padding-top: 90px;
  padding-bottom: 40px;
  gap: 60px;
  .team-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-bottom: 20px;
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


.swiper {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: calc((100% - 30px) / 2) !important;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>