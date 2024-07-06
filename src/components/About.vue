<script setup>
import SwiperComponent from "@/components/SwipperComponent.vue";
import OurTeam from "@/components/OurTeam.vue";
import OurValues from "@/components/OurValues.vue";
import MediaSwiper from "@/components/MediaSwiper.vue";

const reviewsData = [
  { name: 'John Doe', company: 'Company A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue...' },
  { name: 'Alice Johnson', company: 'Company B', description: 'Description for Alice Johnson.' },
  { name: 'Bob Smith', company: 'Company C', description: 'Description for Bob Smith.' },
];
</script>

<template>
  <div class="about">
    <div class="about-header-container">
      <div class="about-header-banner">
        <img src="@/assets/static/img/codder.png" alt="world-map">
      </div>
      <div class="banner-container">
        <div class="banner-text">
          About our Likesoft <br>
          <span class="text-blue"> company</span>
          and
          <span class="text-blue">team</span>
        </div>
        <div class="sub-banner-text">
          LikeSoft is a custom software development company providing nearshore dedicated teams for VC-backed startups and
          fast-growing tech companies.
        </div>
        <button class="banner-button">
          READY TO GROW?
        </button>
      </div>
    </div>
    <div class="about-description">
      <div class="description-container">
        <div class="description-left">
          <div class="description-title">
            Lorem ipsum <br> is <span class="text-blue">placeholder text</span>
          </div>
          <div class="description-about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.
            <br>
            <br>
            Eget magna fermentum iaculis eu non diam.
          </div>
          <button class="banner-button">
            ABOUT TEAM
          </button>
        </div>
        <div class="description-right">
          <div class="description-img">
            <img src="@/assets/static/img/code.png" alt="">
          </div>
          <div class="description-blue-block"></div>
        </div>
      </div>
    </div>
    <div>
      <OurValues />
      <OurTeam />
    </div>
    <div class="partners-content">
      <div class="partners-container">
        <div class="partners-img-blue">
          <img src="@/assets/static/img/Microsoft.png" alt="microsoft">
          <img src="@/assets/static/img/google-white.png" alt="google">
          <img src="@/assets/static/img/kaspersky-white.png" alt="kaspersky">
          <img src="@/assets/static/img/google-white.png" alt="google">
          <img src="@/assets/static/img/Microsoft.png" alt="microsoft">
        </div>
      </div>
    </div>
    <SwiperComponent />
    <div class="media-about">
      <div class="media-about-us">
        <div class="reviews-title">
          <div class="title">
            Media about us
          </div>
          <div class="title-description">
            Lorem ipsum is placeholder text commonly used in the graphic, print, an.
          </div>
        </div>
        <div class="media">
          <MediaSwiper />
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

.about-header-container {
  position: relative;
  height: 800px;
}

.about-header-container {
  background: linear-gradient(to right, #06111C 48%, transparent 100%);
  background-size: 100% 100%;
  background-position: right;
}

.about-header-banner {
  position: absolute;
  top: -252px;
  bottom: 10px;
  right: 0;
  z-index: -1;
  img {
    width: 900px;
    height: 1050px;
    object-fit: cover;
  }
}

.about-description {
  height: 800px;
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
  justify-content: center;
  align-items: center;
  .description-container {
    height: 577px;
    display: flex;
    flex-direction: row;
  }
  .description-left {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    max-width: 590px;
    max-height: 393px;
    .description-title {
      font-family: Garamond,serif;
      font-size: 52px;
      font-weight: 400;
      line-height: 62px;
      letter-spacing: 0;
      text-align: left;
    }
    .description-about {
      width: auto;
      height: auto;
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0;
      text-align: left;

    }
  }
  .description-right {
    width: 480.61px;
    height: 577px;
    .description-img {
      img {
        width: 441.21px;
        height: 537px;

      }
    }
    .description-blue-block {
      position: relative;
      width: 260px;
      height: 298px;
      z-index: -1;
      background: #057AFF;
      left: 160px;
      bottom: 360px;
    }
  }
}

.our-team {
  height: 800px;
}
.our-values {
  height: 645px;
}

.media-about {
  height: 762px ;
}

.media-about-us {
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

.media {
  display: flex;
  gap: 19px;
  flex-direction: row;
}


@media (max-width: 1400px) {
  .media-about-us {
    height: auto;
  }
  .media {
    gap: 10px;
    flex-direction: column-reverse;
  }
}

.swipper-component {
  width: 100px;
}

.partners-content {
  position: relative;
  height: 198px;
  width: 100%;
  background: #057AFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  .partners-container {
    display: flex;
    flex-direction: column;
    .partners-title {
      margin-top: 16px;
      font-weight: 400;
      font-family: Garamond, serif;
      line-height: 62.4px;
      font-size: 52px;
    }
    .partners-img-blue {
      display: flex;
      flex-direction: row;
      gap: 123px;
      img {
        width: 141px;
        height: 30px;
      }
    }
  }
}

@media (max-width: 1400px) {
  .partners-content {
    .partners-container {
      .partners-img-blue {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }
  .media {
    gap: 20px;
    align-items: center;
    justify-content: center;
  }

  .card {
    width: 287px;
    height: 100px;
  }
}

@media (max-width: 1200px) {
  .partners-content {
    .partners-container {
      .partners-img-blue {
        gap: 20px;
        img {
          width: 141px;
          height: 30px;
        }
      }
    }
  }
  .about-description {
    height: auto;
    .description-container {
      width: auto;
      height: auto;
      flex-direction: column-reverse;
    }
  }
  .banner-button {
    width: 100%;
  }
}

@media (max-width: 700px) {
  .about-description {
    .description-right {
      height: 360px;
      .description-img {
        width: 10px;
        position: relative;
        left: 68px;
        img {
          width: 300px;
          height: 355px;
        }
      }
      .description-blue-block {
        width: 242px;
        height: 248px;
        left: 124px;
        bottom: 297px;
      }
    }
    .description-left {
      margin-left: 66px;
      max-width: 350px;
      .description-title {
        font-size: 26px;
      }
      .description-about {
        font-size: 12px;
      }
    }
  }
}
</style>