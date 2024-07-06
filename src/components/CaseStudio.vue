<script setup lang="ts">
import CaseStudioCard from "@/components/CaseStudioCard.vue";
</script>

<template>
  <div class="services-container">
    <div class="services">
      <div class="services-title">
        <div class="title">Case <span class="text-blue">studio</span></div>
        <div class="sub-title">What we develop</div>
      </div>
      <div class="case-studio-container">
        <CaseStudioCard
            title="Chatgenie.io"
            :technologies="['UX/UI DESIGN', 'IOS', 'ANDROID']"
            imageSrc="src/assets/static/img/case-studio-bg.png"
            :backgroundColor="'#EBFCEB'"
            :text-color="'#000'"
        />
        <CaseStudioCard
            title="Getsales.ai"
            :technologies="['UX/UI DESIGN', 'IOS', 'ANDROID']"
            imageSrc="src/assets/static/img/case-studio-bg-purple.png"
            :backgroundColor="'#d43faa'"
            :text-color="'#fff'"
        />
        <CaseStudioCard
            title="Chatgenie.io"
            :technologies="['UX/UI DESIGN', 'IOS', 'ANDROID']"
            imageSrc="src/assets/static/img/case-studio-bg.png"
            :backgroundColor="'#EBFCEB'"
            :text-color="'#000'"
        />
        <CaseStudioCard
            title="Getsales.ai"
            :technologies="['UX/UI DESIGN', 'IOS', 'ANDROID']"
            imageSrc="src/assets/static/img/case-studio-bg-purple.png"
            :backgroundColor="'#d43faa'"
            :text-color="'#fff'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.services-container {
  min-height: 1400px;
}
.services {
  margin-top: 155px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  .services-title {
    text-align: center;
    .title {
      font-family: Garamond, serif;
      font-size: 52px;
      font-weight: 400;
      line-height: 62px;
      letter-spacing: 0;
    }
    .sub-title {
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0;
    }
  }
}
.case-studio-container {
  display: grid;
  gap: 24px;
  margin-bottom: 82px;
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 1000px) {
  .case-studio-container {
    width: auto;
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .services-container {
    min-height: 2200px;
  }
  .services {
    .services-title {
      .title {
        font-size: 26px;
      }
    }
  }
}

@media (max-width: 1000px) {
  .services-container {
    min-height: 2200px;
  }
}

@media (max-width: 600px) {
  .services-container {
    min-height: 1800px;
  }
}

@media (max-width: 500px) {
  .services-container {
    min-height: 1400px;
  }
}

@media (max-width: 400px) {
  .services-container {
    min-height: 1100px;
  }
}
</style>