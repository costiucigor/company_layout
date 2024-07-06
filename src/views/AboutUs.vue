<script setup lang="ts">
import { useStore } from "@/stores/modal";
import NavBar from "@/components/Header/NavBar.vue";
import Footer from "@/components/Footer/Footer.vue";
import PopUp from "@/components/Modals/PopUp.vue";
import {onUnmounted, watch} from "vue";
import About from "@/components/About.vue";
import ContactUs from "@/components/ContactUs.vue";
const store = useStore();

watch(() => store.showPopup, (newValue) => {
  document.body.style.overflow = newValue ? "hidden" : "auto";
});

// Optional: Restore body overflow to "auto" when the component is unmounted
onUnmounted(() => {
  document.body.style.overflow = "auto";
});
</script>

<template>
  <NavBar />
  <PopUp :show="store.showPopup"/>
  <About />
  <ContactUs />
  <Footer />
</template>
