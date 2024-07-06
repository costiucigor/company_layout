<script setup lang="js">
import {computed, ref} from 'vue';

const selectedTag = ref('EDUCATION');

const tags = [
  'EDUCATION',
  'ENERGY',
  'FINANCE',
  'GOVERMENT',
  'HEALTHCARE',
  'LOGISTICS',
  'MANUFACTURING',
  'RETAIL',
  'SPORTS',
  'TECHNOLOGY',
  'TRAVEL',
  'TRANSPORTATION'
];

const descriptions = {
  EDUCATION: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Education description goes here.',
  ENERGY: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Energy description goes here.',
  FINANCE: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Finance description goes here.',
  GOVERMENT: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Government description goes here.',
  HEALTHCARE: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Healthcare description goes here.',
  LOGISTICS: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Logistics description goes here.',
  MANUFACTURING: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Manufacturing description goes here.',
  RETAIL: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Retail description goes here.',
  SPORTS: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sports description goes here.',
  TECHNOLOGY: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Technology description goes here.',
  TRAVEL: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Travel description goes here.',
  TRANSPORTATION: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Transportation description goes here.'
};

const handleTagClick = (tag) => {
  const activeTag = document.querySelector('.tag.active');
  if (activeTag) {
    activeTag.classList.remove('active');
  }
  selectedTag.value = tag;
  const selectedTagElement = document.querySelector(`.tag[data-tag="${tag}"]`);
  if (selectedTagElement) {
    selectedTagElement.classList.add('active');
  }
};

const descriptionText = computed(() => {
  if (selectedTag.value) {
    return descriptions[selectedTag.value];
  }
});
</script>

<template>
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
  <div class="industries">
    <div class="tags">
      <button v-for="(tag, index) in tags" :key="index" class="tag" @click="handleTagClick(tag)" :class="{ 'active': tag === selectedTag }">
        {{ tag }}
      </button>
    </div>
    <div class="tags-select">
      <select v-model="selectedTag" >
        <option v-for="(tag, index) in tags" :key="index" :value="tag" @change="handleTagClick(tag)">{{ tag }}</option>
      </select>
    </div>
    <div class="img-block">
      <div class="img">
        <img src="@/assets/static/img/code.png" alt="">
      </div>
      <div class="rectangle"></div>
    </div>
    <div class="industries-description">
      <div class="description-title">
        Lorem ipsum is <span class="text-blue">placeholder text</span>
      </div>
      <div class="description">
        {{ descriptionText }}
        <br>
        <br>
        Eget magna fermentum iaculis eu non diam.
      </div>
      <div class="blue-rectangle-industries">
        <div class="description-title">
          Lorem ipsum
          is placeholder text
          commonly used
          in the graphic
        </div>
      </div>
      <div class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.
        <br>
        <br>
        Eget magna fermentum iaculis eu non diam.
      </div>
      <button class="banner-button">
        SEE ALL PROJECTS
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner-button {
  width: 156px;
}

.tags-select {
  display: none;
  width: 100%;
  select {
    border-radius: 60px;
    height: 38px;
    border: 1px solid #057AFF;
    color:  #057AFF;
    width: 100%;
    text-align-last: center;
  }
}


.industries {
  height: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .img-block {
    position: absolute;
    width: 500px;
    height: 440px;
    top: 26px;
    left: 226px;
    .rectangle {
      position: absolute;
      background: #057AFF;
      width: 338px;
      height: 368px;
      top: 1164px;
      left: 1030px;
      z-index: -1;
    }
    .img {
      position: absolute;
      top: 1164px;
      width: 10px;
      height: 557px;
      left: 935px;
      img {
        width: 465px;
        height: 557px;
      }
    }
  }
  .tags {
    margin-top: 60px;
    margin-left: 322px;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 1130px;
    max-height: 102px;
    display: flex;
    gap: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    .tag {
      padding: 0 20px;
      background: #ffffff;
      height: 41px;
      border: 1px solid #057AFF;
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      color: #057AFF;
      border-radius: 30px;
      font-size: 12px;
      width: 134px;
      text-align: center;
    }
    .tag.active {
      background: #057AFF;
      color: #ffffff;
    }
    .tag:hover {
      transition: 0.5s;
      cursor: pointer;
      background: #057AFF;
      color: #ffffff;
    }
  }
  .industries-description {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 800px;
    .description-title {
      margin-top: 84px;
      font-family: Garamond, serif;
      max-width: 346px;
      font-size: 52px;
      font-weight: 400;
      line-height: 62px;
      letter-spacing: 0;
      text-align: left;
    }
    .description {
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      max-width: 468px;
      margin-top: 20px;
      padding-bottom: 70px;
      text-align: left;
    }
    .blue-rectangle-industries {
      position: relative;
      width: 800px;
      height: 348px;
      background: #057AFF;
      left: 0;
      z-index: -1;
      .description-title {
        margin-top: 50px;
        font-family: Garamond, serif;
        max-width: 346px;
        font-size: 52px;
        font-weight: 400;
        line-height: 62px;
        letter-spacing: 0;
        color: #ffffff;
        text-align: left;
      }
    }
  }
}

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .description-container {
    height: 577px;
    width: 1200px;
    display: flex;
    flex-direction: row;
  }
  .description-left {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    width: 590px;
    height: 393px;
    .description-title {
      font-family: Garamond,serif;
      font-size: 52px;
      font-weight: 400;
      line-height: 62px;
      letter-spacing: 0;
      text-align: left;
    }
    .description-about {
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

@media (max-width: 1700px) {
  .industries {
    height: auto;
  }
}

@media (max-width: 1640px) {
  .industries {
    .img-block {
      left: 0;
    }
  }
}

@media (max-width: 1400px) {
  .industries {
    .img-block {
      left: -160px;
    }
  }
}

@media (max-width: 1250px) {
  .industries {
    .img-block {
      position: relative;
      left: 10px;
      .img {
        position: relative;
        top: 0;
        left: 25px;
      }
      .rectangle {
        position: relative;
        top: -547px;
        left: 124px;
      }
    }
    .industries-description {
      .blue-rectangle-industries {
        width: 100%;
        height: auto;
      }
    }
  }
}

@media (max-width: 1100px) {
  .industries {
    .tags {
      display: none;
    }
  }

  .tags-select {
    display: block;
  }
}

@media (max-width: 700px) {
  .industries {
    .industries-description {
      .description-title {
        margin-left: 20px;
        font-size: 26px;
        line-height: 31.2px;
        margin-top: -86px;
      }
      .description {
        margin-left: 20px;
        font-size: 12px;
      }
      .blue-rectangle-industries {
        .description-title {
          font-size: 22px;
          line-height: 26.4px;
          margin-top: 0;
          padding: 10px 0 10px 2px;
        }
      }
    }
    .img-block {
      width: 10px;
      left: -246px;
      .img {
        left: 94px;
        img {
          width: 276px;
          height: 331px;
        }
      }
      .rectangle {
        top: -561px;
        left: 158px;
        width: 206px;
        height: 222px;
      }
    }
  }
  .banner-button {
    width: 100%;
  }
}
</style>