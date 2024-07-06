<script setup>
import { useStore } from "@/stores/modal";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Mousewheel } from 'swiper/modules';
import projectImage1 from "@/assets/static/img/project-example-1.png";
import projectImage2 from "@/assets/static/img/project-example-2.png";
import greenBgImage from "@/assets/static/img/green-bg.png";
import purpleBgImage from "@/assets/static/img/purple-bg.png";
import ServiceSlider from "@/components/ServiceSlider.vue";
import { useThemeStore } from "@/stores/theme";
import Project from "@/components/Project.vue";

const store = useStore();
const themeStore = useThemeStore();

const openModal = () => {
  store.togglePopup();
};

const modules = [Autoplay, Mousewheel];

const projects = ref([
  {
    name: "Chatgenie.io",
    technologies: ["UX/UI DESIGN", "IOS", "ANDROID"],
    image: projectImage1,
    bgImage: greenBgImage,
    buttonText: "READY TO GROW?"
  },
  {
    name: "Getsales.ai",
    technologies: ["UX/UI DESIGN", "IOS", "ANDROID"],
    image: projectImage2,
    bgImage: purpleBgImage,
    buttonText: "READ CASE STUDY"
  }
]);
</script>

<template>
  <div class="header-content">
    <div class="banner-container">
      <div class="banner-text">
        Grow your <br>
        <span class="text-blue">Tech capabilities_ </span>
        with a team that cares
      </div>
      <div class="sub-banner-text">
        LikeSoft is a custom software development company providing nearshore dedicated teams for VC-backed startups and
        fast-growing tech companies.
      </div>
      <button class="banner-button" @click="openModal">
        READY TO GROW?
      </button>
    </div>
    <div class="banner-img">
      <img src="@/assets/static/img/world-map.png" alt="world-map">
    </div>
    <div class="banner-img-mob">
      <img src="@/assets/static/img/world-map-mobile.png" alt="world-map">
    </div>
  </div>
  <div class="partners-content" :data-toggledarkmode="themeStore.darkMode.toString()">
    <div class="partners-container">
      <div class="partners-title">
        They trust our technology, <span class="text-blue">will you?</span>
      </div>
      <div class="partners-img-container" v-if="!themeStore.darkMode">
        <img src="@/assets/static/img/Microsoft.png" alt="microsoft" class="microsoft">
        <img src="@/assets/static/img/google.png" alt="google" class="google">
        <img src="@/assets/static/img/kaspersky.png" alt="kaspersky" class="kaspersky">
        <img src="@/assets/static/img/google.png" alt="google" class="google">
        <img src="@/assets/static/img/Microsoft.png" alt="microsoft" class="microsoft">
      </div>
      <div class="partners-img-container" v-else>
        <img src="@/assets/static/img/Microsoft-dark.png" alt="microsoft">
        <img src="@/assets/static/img/Google-dark.png" alt="google" class="google">
        <img src="@/assets/static/img/Kaspersky-dark.png" alt="kaspersky">
        <img src="@/assets/static/img/Google-dark.png" alt="google" class="google">
        <img src="@/assets/static/img/Microsoft-dark.png" alt="microsoft">
      </div>
    </div>
  </div>
  <ServiceSlider />
  <div class="company-team">
    <div class="company-team-container">
      <div class="company-team-title">
        The secret to a <span class="text-blue">team that cares</span>
      </div>
      <div class="company-team-subtitle">
        And that will make you  succed
      </div>
    </div>
    <div class="company-team-cards">
      <div class="team-card">
        <div class="company-team-cards-image">
          <svg width="91" height="76" viewBox="0 0 91 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.2691 49.3622H12.9201C8.35665 49.2924 4.15771 46.8564 1.83195 42.93C-0.494465 39.0037 -0.612279 34.1504 1.51943 30.1151C3.65127 26.0797 7.72655 23.442 12.281 23.1504C12.2582 22.7479 12.2582 22.3454 12.281 21.9435C12.2772 18.4672 13.6515 15.1311 16.1028 12.6664C18.554 10.2017 21.882 8.80971 25.3584 8.79462C27.6067 8.78828 29.8177 9.36576 31.7766 10.47C33.2365 7.10645 36.0383 4.50822 39.5025 3.30574C42.9668 2.10388 46.7764 2.40815 50.0062 4.14439C53.2352 5.88125 55.5902 8.89101 56.4973 12.4441C56.5918 12.8365 56.3503 13.2301 55.9579 13.3246C55.5655 13.4184 55.1718 13.1769 55.0774 12.7851C54.247 9.51669 52.0486 6.76495 49.0446 5.23354C46.0405 3.70204 42.5225 3.53919 39.3897 4.78664C36.2569 6.03415 33.814 8.57095 32.685 11.748C32.614 11.9547 32.4517 12.1176 32.2451 12.1886C32.0385 12.2469 31.8172 12.2158 31.6347 12.103C29.7735 10.8669 27.5923 10.2006 25.3584 10.1862C22.2529 10.19 19.2756 11.4254 17.079 13.6219C14.8832 15.8177 13.6476 18.7952 13.6439 21.9007C13.6407 22.4965 13.6978 23.0911 13.8144 23.6757C13.8582 23.9115 13.7777 24.153 13.6014 24.3146C13.4335 24.4807 13.1907 24.5454 12.9625 24.4852C8.77247 24.4776 4.89614 26.7064 2.79416 30.3309C0.692823 33.9562 0.684546 38.4271 2.77324 42.0598C4.86191 45.6921 8.72932 47.9348 12.92 47.9424H45.2376L80.6368 47.5164C83.1153 46.84 85.3017 45.3669 86.8599 43.3238C88.4173 41.2814 89.2591 38.7826 89.2561 36.2141C89.2561 31.9543 85.3797 28.362 83.7183 27.0417V27.0411C83.4166 26.7983 83.3684 26.3564 83.6118 26.0541C83.8552 25.7523 84.2971 25.7048 84.5988 25.9476C86.4162 27.396 90.6759 31.2868 90.6759 36.2142C90.6766 39.108 89.7181 41.9206 87.9508 44.2121C86.1828 46.5036 83.7063 48.1454 80.907 48.8795H80.7365L45.2382 49.3626L21.2691 49.3622Z" fill="#057AFF"/>
            <path d="M45.238 68.8583C44.8539 68.8583 44.542 68.547 44.542 68.1629V48.6247C44.5502 48.2462 44.8589 47.9432 45.238 47.9432C45.6247 47.9432 45.9404 48.2526 45.948 48.6393V68.1629C45.9404 68.5489 45.6247 68.8583 45.238 68.8583V68.8583Z" fill="#057AFF"/>
            <path d="M52.0822 76H38.3938C38.0096 76 37.6984 75.6888 37.6984 75.3046V68.205C37.6946 68.018 37.7662 67.8373 37.8968 67.7036C38.028 67.5698 38.2068 67.495 38.3938 67.495H52.0822C52.2692 67.495 52.448 67.5698 52.5792 67.7036C52.7098 67.8373 52.7814 68.018 52.7776 68.205V75.3046C52.7776 75.4891 52.7047 75.6659 52.5741 75.7965C52.4436 75.9271 52.2667 76 52.0822 76L52.0822 76ZM39.1037 74.5801H51.3862V68.8578H39.1037V74.5801Z" fill="#057AFF"/>
            <path d="M71.5204 36.341C71.3372 36.3416 71.1553 36.3131 70.981 36.256C64.3396 33.8511 58.7918 29.1259 55.3617 22.9512C55.3338 22.8536 55.3338 22.7502 55.3617 22.6533V2.36206C55.3611 2.11991 55.4853 1.89488 55.6914 1.76746C55.8967 1.64004 56.1541 1.62863 56.3703 1.73703C58.6511 2.96046 61.2487 3.46756 63.8224 3.19118C66.3959 2.91544 68.827 1.86888 70.7966 0.189695C71.0692 -0.0632315 71.4901 -0.0632315 71.762 0.189695C73.7398 1.88728 76.186 2.94403 78.7773 3.22039C81.3687 3.49677 83.9828 2.97951 86.2737 1.73708C86.4898 1.62868 86.7472 1.64009 86.9526 1.7675C87.158 1.89492 87.2829 2.11996 87.2816 2.36211V22.6533C87.3019 22.7421 87.3019 22.834 87.2816 22.9227C86.6033 24.3408 85.7697 25.6788 84.7968 26.9131C81.5589 31.1723 77.1684 34.4141 72.1455 36.2561C71.9432 36.3176 71.7322 36.3468 71.5204 36.341L71.5204 36.341ZM56.7252 22.4682C60.036 28.2081 65.2422 32.6162 71.4493 34.9356C71.5102 34.9496 71.5736 34.9496 71.6344 34.9356C76.3773 33.1722 80.5198 30.0939 83.5758 26.061C84.4411 24.9479 85.1973 23.7542 85.8337 22.4966V3.45489C83.4604 4.48054 80.855 4.85074 78.2898 4.52618C75.7243 4.20163 73.2934 3.19374 71.251 1.60892C69.2079 3.19366 66.777 4.20163 64.2122 4.52618C61.6467 4.85074 59.0415 4.48054 56.6682 3.45489L56.7252 22.4682ZM71.308 19.7989H71.3074C69.8012 19.7989 68.3565 19.2005 67.2916 18.1355C66.226 17.0706 65.6276 15.6259 65.6276 14.1191C65.6276 12.613 66.226 11.1683 67.2916 10.1034C68.3566 9.03783 69.8013 8.43941 71.3074 8.43941C72.8141 8.43941 74.2589 9.03781 75.3237 10.1034C76.3887 11.1684 76.9871 12.613 76.9871 14.1191C76.9871 15.6259 76.3887 17.0706 75.3237 18.1355C74.2588 19.2004 72.8141 19.7989 71.3074 19.7989H71.308ZM71.308 9.85934H71.3074C70.1778 9.85934 69.0944 10.3081 68.2956 11.1069C67.4963 11.9062 67.0475 12.9896 67.0475 14.1191C67.0475 15.2486 67.4963 16.3327 68.2956 17.1313C69.0944 17.93 70.1777 18.3788 71.3074 18.3788C72.4376 18.3788 73.521 17.93 74.3196 17.1313C75.1183 16.3325 75.5671 15.2485 75.5671 14.1191C75.5823 12.9793 75.1405 11.8814 74.3398 11.07C73.5392 10.2593 72.447 9.80222 71.3072 9.80285L71.308 9.85934Z" fill="#057AFF"/>
            <path d="M75.0557 28.4607H71.3067C70.9226 28.4607 70.6113 28.1495 70.6113 27.7653V19.1038C70.6113 18.7114 70.9289 18.3938 71.3213 18.3938C71.713 18.3938 72.0313 18.7114 72.0313 19.1038V27.0554H75.0556C75.448 27.0554 75.7656 27.3729 75.7656 27.7653C75.7656 28.1571 75.448 28.4753 75.0556 28.4753L75.0557 28.4607Z" fill="#057AFF"/>
          </svg>
        </div>
        <div class="company-team-cards-title">
          Taking true ownership of your goals
        </div>
        <div class="company-team-card-description">
          It’s about caring about the outcome, not just delivering features mechanically. We aim to fulfill your vision,
          not just fill your eye.
        </div>
      </div>
      <div class="team-card">
        <div class="company-team-cards-image">
          <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.9925 56.2823C37.9108 56.3002 37.8264 56.3002 37.7448 56.2823C8.49986 42.599 13.3641 10.0712 13.4235 9.74064C13.4541 9.53508 13.5943 9.36325 13.7893 9.2921L37.78 0.0355772C37.9175 -0.0118591 38.0672 -0.0118591 38.2048 0.0355772L61.6881 9.2921C61.8737 9.36642 62.0075 9.53191 62.0423 9.72852C62.1014 10.059 67.4849 42.5977 38.2405 56.2338C38.162 56.2665 38.0777 56.2828 37.9923 56.2812L37.9925 56.2823ZM14.5213 10.2493C14.0964 13.6494 11.3689 42.4695 37.9925 55.1138C64.6278 42.4572 61.3935 13.6145 60.9442 10.2493L37.9803 1.21733L14.5213 10.2493Z" fill="#057AFF"/>
            <path d="M47.2257 41.3589H28.3354C27.5316 41.3589 26.878 40.7106 26.8711 39.9068V25.9401C26.8779 25.1342 27.5294 24.4822 28.3354 24.4758H47.2257C48.0316 24.4822 48.6831 25.1341 48.6899 25.9401V39.9068C48.6831 40.7106 48.0295 41.3589 47.2257 41.3589ZM28.3354 25.6449C28.1725 25.6449 28.0402 25.7766 28.0402 25.94V39.9067C28.0523 40.0601 28.1809 40.1787 28.3354 40.1782H47.2257C47.3042 40.1782 47.3791 40.1471 47.4344 40.0917C47.4898 40.0364 47.5208 39.9615 47.5208 39.883V25.9392C47.5208 25.8607 47.4897 25.7859 47.4344 25.7305C47.3791 25.6752 47.3042 25.6441 47.2257 25.6441L28.3354 25.6449Z" fill="#057AFF"/>
            <path d="M44.5689 25.6449C44.2495 25.6449 43.9902 25.3856 43.9902 25.0662V16.3885C43.9902 15.59 43.6734 14.8242 43.1084 14.2597C42.5439 13.6952 41.7781 13.3779 40.9796 13.3779H34.5809C33.7824 13.3779 33.0165 13.6952 32.4521 14.2597C31.8871 14.8242 31.5703 15.5901 31.5703 16.3885V25.0662C31.5703 25.3925 31.3057 25.6565 30.98 25.6565C30.6537 25.6565 30.3896 25.3925 30.3896 25.0662V16.3885C30.3896 15.2833 30.8287 14.2233 31.6104 13.4417C32.3915 12.66 33.4519 12.2209 34.5572 12.2209H40.9565C42.0617 12.2209 43.1217 12.66 43.9034 13.4417C44.685 14.2233 45.1241 15.2832 45.1241 16.3885V25.0662C45.1241 25.3767 44.8795 25.6323 44.5691 25.6449H44.5689Z" fill="#057AFF"/>
            <path d="M71.5117 62.4338C71.1923 62.4338 70.933 62.175 70.933 61.8551V23.1178C70.9335 22.1717 70.5624 21.2636 69.8999 20.5878C69.2379 19.9121 68.3371 19.5237 67.391 19.5052H61.8657C61.5395 19.5052 61.2754 19.2406 61.2754 18.9149C61.2754 18.5886 61.5395 18.3246 61.8657 18.3246H67.2967C68.549 18.3246 69.7503 18.8221 70.6362 19.7076C71.5217 20.5931 72.0193 21.7943 72.0193 23.0472V61.8546C72.0214 62.1487 71.8031 62.3975 71.5117 62.4333V62.4338Z" fill="#057AFF"/>
            <path d="M4.04931 62.4339C3.89383 62.437 3.74361 62.3775 3.63292 62.2689C3.52171 62.1598 3.45898 62.0106 3.45898 61.8551V23.1178C3.45898 21.8655 3.95654 20.6643 4.84256 19.7783C5.72805 18.8928 6.92927 18.3953 8.18156 18.3953H13.7068C14.0331 18.3953 14.2972 18.6593 14.2972 18.9856C14.2972 19.3118 14.0331 19.5759 13.7068 19.5759H8.26428C7.31818 19.5944 6.41734 19.9833 5.75537 20.659C5.09283 21.3342 4.72231 22.2429 4.72231 23.1885V61.8542C4.72442 62.0255 4.65063 62.1894 4.52097 62.3007C4.39131 62.4124 4.21843 62.4609 4.04924 62.4329L4.04931 62.4339Z" fill="#057AFF"/>
            <path d="M70.1303 75.5977H5.43096C3.99044 75.5977 2.60902 75.0253 1.5907 74.007C0.57239 72.9887 0 71.6073 0 70.1667V61.9022C0 61.5828 0.258797 61.3235 0.578732 61.3235H74.9593C75.2787 61.3235 75.5375 61.5828 75.5375 61.9022V70.1667C75.5375 71.6031 74.9688 72.9807 73.9552 73.9985C72.9417 75.0163 71.5665 75.5914 70.1302 75.5977H70.1303ZM1.18064 62.4336V70.1667C1.19013 71.291 1.64079 72.3668 2.43561 73.1621C3.23096 73.9569 4.30669 74.4075 5.43094 74.417H70.1303C71.2545 74.4075 72.3303 73.9569 73.1256 73.1621C73.9204 72.3667 74.3711 71.291 74.3805 70.1667V62.4336H1.18064Z" fill="#057AFF"/>
            <path d="M47.2852 69.3989H28.3355C27.4558 69.3989 26.612 69.0495 25.9895 68.427C25.3675 67.805 25.0181 66.9612 25.0181 66.0815V61.8428C25.0181 61.5165 25.2821 61.2524 25.6084 61.2524C25.9341 61.2524 26.1987 61.5165 26.1987 61.8428V66.0815C26.1987 66.6491 26.4232 67.1941 26.8238 67.5963C27.2239 67.999 27.7678 68.2267 28.3354 68.2299H47.3445C47.9143 68.2299 48.4608 68.0038 48.8641 67.6006C49.2668 67.1979 49.4934 66.6513 49.4934 66.0815V61.8428C49.4934 61.5165 49.7575 61.2525 50.0837 61.2525C50.4095 61.2525 50.6741 61.5165 50.6741 61.8428V66.0815C50.6741 66.9738 50.3151 67.8282 49.6774 68.4528C49.0396 69.0768 48.1779 69.4178 47.2855 69.3989L47.2852 69.3989Z" fill="#057AFF"/>
            <path d="M37.7806 33.9688C37.1718 33.9735 36.621 33.6098 36.386 33.0485C36.1509 32.4872 36.2784 31.8394 36.7085 31.4088C37.1391 30.9787 37.7869 30.8512 38.3482 31.0863C38.9095 31.3214 39.2727 31.8727 39.2679 32.4809C39.2679 33.3026 38.6022 33.9688 37.7806 33.9688V33.9688ZM37.7806 32.1503C37.5982 32.1503 37.4501 32.2984 37.4501 32.4808C37.4501 32.6637 37.5982 32.8113 37.7806 32.8113C37.963 32.8113 38.1111 32.6637 38.1111 32.4808C38.1111 32.3933 38.0763 32.309 38.0141 32.2473C37.9524 32.1851 37.8681 32.1503 37.7806 32.1503L37.7806 32.1503Z" fill="#057AFF"/>
            <path d="M5.7613 70.6861C5.21262 70.6893 4.68554 70.4737 4.29555 70.0879C3.90604 69.7015 3.68573 69.1766 3.68361 68.6279C3.68149 68.0793 3.8976 67.5522 4.28447 67.1633C4.67134 66.7743 5.19683 66.555 5.7455 66.554C6.29418 66.5529 6.82074 66.7701 7.20923 67.1575C7.59768 67.5449 7.81589 68.0714 7.81589 68.6201C7.81905 69.1667 7.60401 69.6922 7.21819 70.0801C6.83289 70.468 6.30846 70.6862 5.76134 70.6862L5.7613 70.6861ZM5.7613 67.7345C5.39762 67.7345 5.06925 67.9543 4.93117 68.2911C4.79308 68.6279 4.87213 69.0148 5.13146 69.2704C5.39025 69.526 5.77818 69.5998 6.11286 69.457C6.44808 69.3147 6.66365 68.9837 6.65891 68.62C6.65206 68.1288 6.25254 67.7345 5.76131 67.7345H5.7613Z" fill="#057AFF"/>
            <path d="M12.1602 70.6861C11.6089 70.7014 11.0744 70.4964 10.6754 70.1158C10.2764 69.7358 10.0461 69.2114 10.0355 68.6601C10.025 68.1093 10.2348 67.5764 10.619 67.1811C11.0032 66.7858 11.5298 66.5602 12.0811 66.5544C12.6324 66.5491 13.1627 66.7642 13.5548 67.1521C13.9464 67.54 14.1673 68.0687 14.1673 68.62C14.1705 69.1587 13.9617 69.6773 13.5865 70.0637C13.2112 70.45 12.6989 70.6735 12.1602 70.6861L12.1602 70.6861ZM12.1602 67.7345C11.796 67.7345 11.4681 67.9543 11.33 68.2911C11.192 68.6279 11.271 69.0148 11.5298 69.2704C11.7891 69.526 12.1771 69.5998 12.5117 69.457C12.847 69.3147 13.062 68.9837 13.0573 68.62C13.0509 68.1288 12.6514 67.7345 12.1602 67.7345H12.1602Z" fill="#057AFF"/>
          </svg>
        </div>
        <div class="company-team-cards-title">
          Taking true ownership of your goals
        </div>
        <div class="company-team-card-description">
          It’s about caring about the outcome, not just delivering features mechanically. We aim to fulfill your vision,
          not just fill your eye.
        </div>
      </div>
      <div class="team-card">
        <div class="company-team-cards-image">
          <svg width="75" height="71" viewBox="0 0 75 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.6453 70.5203C33.084 70.527 26.6634 68.6227 21.1669 65.0405C20.9047 64.8677 20.8318 64.515 21.0045 64.2527C21.1773 63.9905 21.53 63.9176 21.7922 64.0903C25.1799 66.32 28.957 67.8918 32.9261 68.7245C37.3498 69.6514 41.9178 69.6514 46.3414 68.7245C50.9063 67.7434 55.2161 65.8184 58.9928 63.0729C62.7699 60.3277 65.9306 56.8225 68.2726 52.7831C71.3773 47.4652 73.0133 41.418 73.0133 35.2606C73.0133 29.1027 71.3774 23.0555 68.2726 17.7382C65.6043 13.1433 61.8773 9.25233 57.4018 6.38908C52.9259 3.52529 47.8315 1.77252 42.542 1.27494C40.6149 1.10219 38.6765 1.10219 36.7493 1.27494C31.4588 1.77612 26.3638 3.53099 21.8869 6.39371C17.4104 9.25697 13.6804 13.1458 11.0064 17.7382C7.89433 23.055 6.25847 29.1063 6.26773 35.2673C6.26773 36.055 6.26773 36.8659 6.34894 37.6655C6.36187 37.8217 6.30963 37.9763 6.20411 38.0927C6.0986 38.2091 5.94964 38.2768 5.79293 38.2794C5.47692 38.2996 5.20383 38.0622 5.17901 37.7467C5.17901 36.9244 5.08643 36.0901 5.08643 35.2672C5.09315 28.8998 6.79683 22.6494 10.0216 17.1595C13.2644 11.5043 18.0595 6.89598 23.8393 3.88059C29.6191 0.864272 36.1416 -0.433429 42.6355 0.140679C48.1122 0.648055 53.3877 2.45776 58.0223 5.41821C62.6575 8.37865 66.5179 12.4047 69.2814 17.1599C72.4875 22.6536 74.1773 28.901 74.1773 35.2623C74.1773 41.6235 72.4875 47.8703 69.2814 53.3647C66.8541 57.536 63.5807 61.1533 59.6722 63.9845C55.7636 66.8157 51.3058 68.798 46.5853 69.8041C44.3034 70.2845 41.9775 70.5251 39.646 70.5225L39.6453 70.5203Z" fill="#057AFF"/>
            <path d="M32.8093 69.8144C32.6065 69.8134 32.4183 69.7084 32.3112 69.5362C30.4353 66.3145 28.73 62.9965 27.2017 59.596C27.0791 59.3079 27.2074 58.9743 27.4913 58.8429C27.6294 58.7809 27.7872 58.7762 27.9284 58.8305C28.0696 58.8853 28.1839 58.994 28.2444 59.1326C29.7526 62.5021 31.4386 65.7895 33.2959 68.9802C33.3745 69.11 33.3967 69.2662 33.3574 69.4131C33.3181 69.5594 33.2204 69.6836 33.0869 69.7565C33.0021 69.8031 32.9054 69.8232 32.8092 69.8144L32.8093 69.8144Z" fill="#057AFF"/>
            <path d="M21.7801 36.5637C21.4755 36.5637 21.2247 36.3237 21.2123 36.0191C20.8487 29.6254 21.8355 23.2265 24.1086 17.2388C26.5809 10.5808 30.8033 4.71301 36.3312 0.253875C36.5065 0.138021 36.7305 0.124056 36.9187 0.217154C37.107 0.31025 37.2321 0.495932 37.2466 0.705913C37.2472 0.917973 37.1318 1.11347 36.9456 1.21537C31.6251 5.54951 27.5578 11.2244 25.1632 17.6548C22.9568 23.493 21.9979 29.7285 22.348 35.9597C22.3609 36.2752 22.1189 36.5437 21.8034 36.5623L21.7801 36.5637Z" fill="#057AFF"/>
            <path d="M46.4681 69.8145C46.3677 69.8134 46.2684 69.7897 46.1784 69.7447C45.909 69.5802 45.8216 69.2295 45.9819 68.957C72.4205 23.3567 42.5063 1.39074 42.2513 1.18154C42.0739 0.986543 42.0506 0.695874 42.1949 0.475036C42.3397 0.254185 42.6154 0.159025 42.8652 0.243328C43.1781 0.475036 73.8797 23.0435 46.9201 69.5361C46.8249 69.698 46.6558 69.8019 46.468 69.8144L46.4681 69.8145Z" fill="#057AFF"/>
            <path d="M68.7706 53.6399H29.2067C28.8871 53.6399 28.6274 53.3807 28.6274 53.0606C28.6274 52.741 28.8871 52.4813 29.2067 52.4813H68.7706C69.0908 52.4813 69.3499 52.741 69.3499 53.0606C69.3499 53.3807 69.0908 53.6399 68.7706 53.6399Z" fill="#057AFF"/>
            <path d="M39.6338 70.5202C39.3204 70.5202 39.0664 70.2663 39.0664 69.9528V0.579271C39.0664 0.259633 39.3255 0 39.6457 0C39.9653 0 40.2249 0.259633 40.2249 0.579271V69.9528C40.2249 70.1075 40.1618 70.2554 40.0507 70.3625C39.9389 70.4695 39.7884 70.5264 39.6338 70.5202Z" fill="#057AFF"/>
            <path d="M68.7586 18.015H10.507C10.1869 18.015 9.92773 17.7559 9.92773 17.4357C9.92773 17.1161 10.1869 16.8564 10.507 16.8564H68.7586C69.0787 16.8564 69.3378 17.1161 69.3378 17.4357C69.3378 17.7559 69.0787 18.015 68.7586 18.015Z" fill="#057AFF"/>
            <path d="M15.0604 70.5202C14.9301 70.5187 14.8034 70.4737 14.7015 70.393L0.208434 58.564C0.0812012 58.4522 0.0056955 58.2929 2.08586e-06 58.1238V41.1164C-0.000515088 40.925 0.0951687 40.7466 0.254988 40.6416L14.9572 31.0024H14.9567C15.1501 30.8752 15.401 30.8752 15.5939 31.0024L29.4964 40.653C29.6485 40.7585 29.739 40.9318 29.74 41.1164V58.1238C29.7416 58.2919 29.6645 58.4507 29.5316 58.5526L15.4093 70.393C15.3089 70.4696 15.1879 70.5141 15.0617 70.5203L15.0604 70.5202ZM1.1579 57.8461L15.0604 69.2112L28.6624 57.8574V41.418L15.2815 32.1497L1.15922 41.43L1.1579 57.8461Z" fill="#057AFF"/>
            <path d="M13.8091 54.3932C13.6591 54.3932 13.5164 54.3306 13.415 54.2194L7.854 48.6698V48.6703C7.63005 48.4464 7.63005 48.0833 7.854 47.8594C8.07795 47.6354 8.44103 47.6354 8.66498 47.8594L13.8092 53.0149L22.6833 44.1408V44.1403C22.9073 43.9163 23.2704 43.9163 23.4943 44.1403C23.7183 44.3642 23.7183 44.7273 23.4943 44.9512L14.226 54.2196C14.1189 54.3354 13.9669 54.3985 13.8091 54.3934V54.3932Z" fill="#057AFF"/>
          </svg>
        </div>
        <div class="company-team-cards-title">
          Taking true ownership of your goals
        </div>
        <div class="company-team-card-description">
          It’s about caring about the outcome, not just delivering features mechanically. We aim to fulfill your vision,
          not just fill your eye.
        </div>
      </div>
      <div class="team-card">
        <div class="company-team-cards-image">
          <svg width="83" height="52" viewBox="0 0 83 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M79.7327 51.9333H64.0851C63.3358 51.9333 62.6171 51.6356 62.0873 51.1057C61.5575 50.5759 61.2598 49.8578 61.2598 49.1086V37.0342C61.2598 36.285 61.5575 35.5663 62.0873 35.0364C62.6171 34.5066 63.3358 34.2095 64.0851 34.2095H79.7327C80.4831 34.2095 81.2029 34.5066 81.735 35.0359C82.2666 35.5651 82.5672 36.2838 82.5707 37.0342V49.1086C82.5672 49.859 82.2666 50.5771 81.735 51.1069C81.2029 51.6362 80.4831 51.9333 79.7327 51.9333V51.9333ZM64.0851 35.4733C63.223 35.4733 62.5238 36.1718 62.5238 37.0339V49.1083C62.5238 49.5218 62.6885 49.9192 62.9811 50.2117C63.2742 50.5043 63.671 50.669 64.085 50.669H79.7327C80.5867 50.6551 81.2737 49.9624 81.2807 49.1083V37.0339C81.2738 36.1701 80.5712 35.4733 79.7068 35.4733H64.0851Z" fill="#057AFF"/>
            <path d="M77.5918 35.4733C77.2423 35.4733 76.9595 35.19 76.9595 34.841V30.0168C76.8714 28.2731 75.8901 26.698 74.3635 25.8509C72.8369 25.0032 70.9814 25.0032 69.4553 25.8509C67.9287 26.698 66.9473 28.2731 66.8593 30.0168V34.8416V34.841C66.8593 35.1975 66.5702 35.486 66.2143 35.486C65.8578 35.486 65.5693 35.1975 65.5693 34.841V30.0168C65.5693 27.7583 66.7741 25.6718 68.7298 24.5425C70.6856 23.4132 73.0949 23.4132 75.0507 24.5425C77.0064 25.6718 78.2112 27.7582 78.2112 30.0168V34.8416V34.841C78.2112 35.1854 77.9359 35.4664 77.5921 35.4734L77.5918 35.4733Z" fill="#057AFF"/>
            <path d="M61.931 47.3278H4.77289C3.51 47.3278 2.29955 46.8268 1.40689 45.9336C0.514279 45.041 0.0126953 43.8304 0.0126953 42.5682V4.75961C0.0126953 3.49728 0.514279 2.28685 1.40689 1.3942C2.2995 0.501584 3.51005 0 4.77289 0H67.7881C69.0505 0 70.2609 0.501584 71.1536 1.3942C72.0462 2.28681 72.5478 3.49736 72.5478 4.75961V24.5602C72.5478 24.9167 72.2593 25.2052 71.9028 25.2052C71.5469 25.2052 71.2578 24.9167 71.2578 24.5602V4.75961C71.2543 3.8336 70.8852 2.94673 70.2304 2.29142C69.5756 1.63665 68.6882 1.26751 67.7622 1.26405H4.77351C3.85038 1.27096 2.96815 1.6424 2.31801 2.29717C1.66783 2.95195 1.30331 3.83702 1.30331 4.75961V42.5682C1.30331 43.493 1.66957 44.3805 2.32262 45.0352C2.97567 45.6905 3.86144 46.0602 4.78624 46.0637H61.931C62.2875 46.0637 62.576 46.3528 62.576 46.7087C62.576 47.0652 62.2875 47.3537 61.931 47.3537L61.931 47.3278Z" fill="#057AFF"/>
            <path d="M71.916 10.0867H0.644983C0.28851 10.0867 0 9.79763 0 9.44174C0 9.08526 0.28851 8.79675 0.644983 8.79675H71.916C72.2719 8.79675 72.561 9.08526 72.561 9.44174C72.561 9.79763 72.2719 10.0867 71.916 10.0867Z" fill="#057AFF"/>
            <path d="M71.916 18.2261H0.644983C0.28851 18.2261 0 17.9376 0 17.5811C0 17.2247 0.28851 16.9362 0.644983 16.9362H71.916C72.2719 16.9362 72.561 17.2247 72.561 17.5811C72.561 17.9376 72.2719 18.2261 71.916 18.2261Z" fill="#057AFF"/>
            <path d="M28.2621 30.5449H12.6661C12.3171 30.5449 12.0343 30.2622 12.0343 29.9126V23.8244C12.0309 23.6545 12.0959 23.4904 12.2146 23.3689C12.3338 23.2474 12.4962 23.1794 12.6661 23.1794H28.2621C28.432 23.1794 28.595 23.2474 28.7136 23.3689C28.8328 23.4904 28.8979 23.6545 28.8944 23.8244V29.9132V29.9126C28.8944 30.2622 28.6111 30.545 28.2621 30.545V30.5449ZM13.2985 29.255H27.6298V24.4562H13.2985V29.255Z" fill="#057AFF"/>
            <path d="M59.8935 30.2354H45.4718C45.3019 30.2354 45.139 30.1675 45.0197 30.0459C44.9011 29.9244 44.836 29.7603 44.8395 29.5904V24.1339C44.8395 23.785 45.1222 23.5022 45.4718 23.5022H59.8935C60.2425 23.5022 60.5252 23.785 60.5252 24.1339V29.5904C60.5287 29.7603 60.4636 29.9244 60.345 30.0459C60.2258 30.1675 60.0634 30.2354 59.8935 30.2354ZM46.1035 28.9454H59.2612V24.7662H46.1035V28.9454Z" fill="#057AFF"/>
            <path d="M29.8236 36.4021H13.1572C12.8007 36.4021 12.5122 36.1131 12.5122 35.7572C12.5122 35.4007 12.8007 35.1122 13.1572 35.1122H29.8236C30.18 35.1122 30.4685 35.4007 30.4685 35.7572C30.4685 36.1131 30.18 36.4021 29.8236 36.4021Z" fill="#057AFF"/>
            <path d="M29.3338 42.246H12.6674C12.3115 42.246 12.0225 41.9569 12.0225 41.601C12.0225 41.2446 12.3115 40.9561 12.6674 40.9561H29.3338C29.6903 40.9561 29.9788 41.2446 29.9788 41.601C29.9788 41.9569 29.6903 42.246 29.3338 42.246Z" fill="#057AFF"/>
          </svg>
        </div>
        <div class="company-team-cards-title">
          Taking true ownership of your goals
        </div>
        <div class="company-team-card-description">
          It’s about caring about the outcome, not just delivering features mechanically. We aim to fulfill your vision,
          not just fill your eye.
        </div>
      </div>
    </div>
    <button class="banner-button" @click="openModal">
      READY TO GROW?
    </button>
  </div>
  <div class="projects-container">
    <div class="container">
      <swiper
          :modules="modules"
          :slidesPerView="1"
          :loop="true"
          :direction="'vertical'"
          :spaceBetween="0"
          :mousewheel="false"
          :allow-touch-move="false"
          :autoplay="{
                delay: 4000,
                disableOnInteraction: false,
              }"
      >
        <swiper-slide v-for="(project, index) in projects" :key="index">
          <Project
              :name="project.name"
              :technologies="project.technologies"
              :image="project.image"
              :bgImage="project.bgImage"
              :buttonText="project.buttonText"
              :openModal="openModal"
          ></Project>
        </swiper-slide>
      </swiper>
    </div>
    <div class="why-us">
      <div class="why-us-container">
        <div class="why-us-content">
          <div class="why-us-tittle">
            Why <span class="text-blue">us?</span>
          </div>
          <div class="why-us-description">
            You'll have the chance to get to know the team you'll be working with beforehand to ensure they're a fit. Our
            team is fluent in English and is all in the Eastern Time Zone, guaranteeing strong and constant communication.
            <br>
            <br>
            You'll have the chance to get to know the team you'll be working with beforehand to ensure they're a fit. Our
            team is fluent in English and is all in the Eastern Time Zone, guaranteeing strong and constant communication.
          </div>
          <div class="why-us-author">
            <div class="author-data">
              <div class="author-img">
                <img src="@/assets/static/img/cto.png" alt="Author">
              </div>
              <div class="author-name">
                Roman Voronin
              </div>
            </div>
            <div class="author-sign">
              <img src="@/assets/static/img/sign.png" alt="Author">
            </div>
          </div>
        </div>
        <div class="why-us-list">
          <div class="list-item">
            <img src="@/assets/static/icons/spark.png" alt="spark icon">
            We are the leading software developer from Europe
          </div>
          <div class="list-item">
            <img src="@/assets/static/icons/spark.png" alt="spark icon">
            We are the leading software developer from Europe
          </div>
          <div class="list-item">
            <img src="@/assets/static/icons/spark.png" alt="spark icon">
            We are the leading software developer from Europe
          </div>
          <div class="list-item">
            <img src="@/assets/static/icons/spark.png" alt="spark icon">
            We are the leading software developer from Europe
          </div>
          <div class="list-item">
            <img src="@/assets/static/icons/spark.png" alt="spark icon">
            We are the leading software developer from Europe
          </div>
        </div>
      </div>
    </div>
    <div class="experts-container">
      <div class="experts">
        <div class="experts-stack">
          <img src="@/assets/static/img/technology-stack.png" alt="">
        </div>
        <div class="experts-info">
          <div class="stack-experts">
            <div class="garamond-header-white">
              We're experts in <span class="text-blue">following <br> technologies</span>
            </div>
            <div class="experts-stack-list">
              JS, Java, PHP, SQL, NoSQL
            </div>
          </div>
          <br>
          <div class="stack-experts">
            <div class="garamond-header-white">
              But we can also <br> <span class="text-blue">help you with:</span>
            </div>
            <div class="experts-stack-list">
              C, C++, C#, MQL
            </div>
          </div>
          <button class="banner-button" @click="openModal">
            CONTACT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$light-bg-color: #ffffff;
$light-text-color: #000000;

$dark-bg-color: #06111C;
$blue-dark-bg-color: #0D1D2E;
$dark-text-color: #ffffff;

$toggledarkmode: false;

.partners-content {
  .partners-container {
    .partners-img-container {
      .google {
        width: 141px;
        height: 30px;
      }
    }
  }
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.container {
  height: 800px;
}

@media (max-width: 1100px) {
  .container {
    height: 700px;
  }
}

.company-team {
  padding: 140px 0 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;

  &[data-toggledarkmode="false"] {
    background-color: $light-bg-color;
    color: $light-text-color;
  }

  &[data-toggledarkmode="true"] {
    background-color: $dark-bg-color;
    color: $dark-text-color;
  }
}
.company-team-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  .company-team-title {
    margin-top: 60px;
    font-size: 52px;
    font-family: Garamond, serif;
  }
  .company-team-subtitle {
    margin-top: 20px;
    line-height: 24px;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
}

@media (max-width: 750px) {
  .company-team-container {
    .company-team-title {
      font-size: 34px;
      line-height: 40.8px;
    }
  }
}
.company-team-cards {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  max-width: 1196px;
  gap: 60px;
  .company-team-cards-title {
    font-family: Garamond, serif;
    font-weight: 400;
    font-size: 28px;
    line-height: 30.8px;
  }
  .company-team-card-description {
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #6A7077;
    margin-top: 18px;
  }
}

.author-img {
  width: 74px;
  height: 74px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 77px;
    height: 117px;
    object-fit: cover;
    border-radius: 50%;
    margin-top: -10px;
  }
}

@media (max-width: 1200px) {
  .company-team {
    .company-team-cards {
      width: auto;
      flex-direction: column;
    }
    .banner-button {
      display: none;
    }
  }
}

@media (max-width: 600px) {
  .company-team-container {
    .company-team-title {
      font-size: 26px;
    }
  }
  .company-team-cards {
    .company-team-cards-title {
      font-size: 22px;
    }
  }
}

.why-us {
  height: 500px;

  &[data-toggledarkmode="false"] {
    background-color: $light-bg-color;
    color: $light-text-color;
  }

  &[data-toggledarkmode="true"] {
    background-color: $dark-bg-color;
    color: $dark-text-color;
  }
  padding: 0 0 80px 0;
  .why-us-container {
    display: flex;
    flex-direction: row;
    gap: 120px;
    justify-content: center;
    align-items: center;

    .why-us-description {
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-size: 14px;
      line-height: 21px;
    }

    .why-us-list {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      max-height: 168px;
      max-width: 466px;
      gap: 30px;
      align-items: flex-start;
      .list-item {
        max-width: 213px;
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        font-size: 12px;
        line-height: 18px;
        display: flex;
        flex-direction: row;
        gap: 16px;

        img {
          width: 23px;
          height: 23px;
        }
      }
    }
    .why-us-author {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 40px;
    }
    .author-sign {
      img {
        width: 93px;
        height: 93px;
      }
    }
    .author-data {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: Garamond, serif;
      font-size: 14px;
      line-height: 15.4px;
      gap: 30px;
    }

    .why-us-content {
      margin-top: 120px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
      max-width: 590px;
    }

    .why-us-tittle {
      font-family: Garamond, serif;
      font-size: 52px;
      line-height: 62.4px;
      font-weight: 400;
    }
  }
}

@media (max-width: 750px) {
  .why-us {
    .why-us-container {
      .why-us-tittle {
        font-size: 34px;
        line-height: 40.8px;
      }
    }
  }
}

.experts-container {
  height: 817px;
  background-color: $dark-bg-color;
  color: $dark-text-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .experts {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    gap: 80px;
    .experts-info {
      display: flex;
      flex-direction: column;
      gap: 40px;
      width: 526px;
      height: 527px;
      .stack-experts {
        display: flex;
        flex-direction: column;
        gap: 32px;
      }
    }
    button {
      width: 99px;
    }
  }
}

@media (max-width: 1200px) {
  .experts {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .experts-container {
    height: 1276px;
  }
  .project-example {
    img {
      width: 366.9px;
      height: 245.29px;
    }
  }
}

@media (max-width: 620px) {
  .experts-container {
    height: 888px;
  }
  .project-example {
    img {
      width: 216.98px;
      height: 158.08px;
    }
  }
  .experts-container {
    .experts {
      max-width: 320px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      .experts-info {
        justify-content: flex-start;
        align-items: flex-start;
      }
      button {
        width: 100%;
      }
    }
    .experts-stack {
      img {
        width: 300px;
        height: 300px;
      }
    }
  }
  .garamond-header-white {
    font-size: 26px;
    line-height: 31.2px;
  }
}

@media (max-width: 380px) {
  .project-example {
  }
}

.experts-stack {
  img {
    width: 589px;
    height: 597px;
  }
}


.experts-stack-list {
  &[data-toggledarkmode="false"] {
    background-color: $light-bg-color;
    color: $light-text-color;
  }

  &[data-toggledarkmode="true"] {
    background-color: $dark-bg-color;
    color: $dark-text-color;
  }
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

@media (max-width: 1160px) {
  .why-us {
    height: auto;
    .why-us-container {
      .why-us-list {
        flex-direction: column;
        max-height: 100vh;
        max-width: 100vw;
      }
    }
  }
}

@media (max-width: 860px) {
  .why-us {
    .why-us-container {
      flex-direction: column;
      .why-us-list {
        margin-right: 120px;
        flex-direction: column;
        max-height: 40vh;
        max-width: 82vw;
      }
    }
  }
}

@media (max-width: 600px) {
  .why-us {
    .why-us-container {
      margin-left: 10px;
      .why-us-tittle {
        font-size: 26px;
        line-height: 31.2px;
      }
      .why-us-description {
        font-size: 14px;
        line-height: 21px;
      }
      .why-us-content {
        margin-top: 10px;
        flex-direction: column;
      }
      .why-us-list {
        margin-right: 0;
        flex-direction: column;
        max-height: 320px;
        max-width: 300px;
        .list-item {
          width: auto;
        }
      }
    }
  }
}

.animate-project {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.animate-project.show {
  opacity: 1;
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
}
</style>
