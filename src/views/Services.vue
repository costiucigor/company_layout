<script setup lang="ts">
import { useStore } from "@/stores/modal";
import NavBar from "@/components/Header/NavBar.vue";
import Services from "@/components/Services.vue";
import Footer from "@/components/Footer/Footer.vue";
import {onUnmounted, watch} from "vue";
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
    <Services />
  <ContactUs />
  <Footer />
</template>
