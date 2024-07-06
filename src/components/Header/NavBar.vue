<script setup lang="ts">
import { defineProps, ref, watch, computed } from 'vue';
import { useStore } from '@/stores/modal';
import { useMenuStore } from '@/stores/menuStore';
import { useThemeStore } from '@/stores/theme'; // Import the theme store

defineProps({
  show: Boolean,
});

const store = useStore();
const menuStore = useMenuStore();
const themeStore = useThemeStore();

const toggleDarkMode = () => {
  themeStore.toggleDarkMode();
  document.body.setAttribute('data-toggledarkmode', themeStore.darkMode.toString());
};

const openModal = () => {
  store.togglePopup();
};

watch(() => menuStore.menuVisible, (newValue) => {
  console.log('menuVisible:', newValue);
});

const darkMode = computed(() => themeStore.darkMode); // Use the darkMode state from the store
</script>

<template>
  <div class="nav-bar">
    <div class="nav-bar-content">
      <div class="title">
        <router-link to="/">LikeSoft</router-link>
      </div>
      <div class="nav-bar-menu">
        <ul>
          <router-link class="nav-link" to="/industries">INDUSTRIES</router-link>
          <router-link class="nav-link" to="/casestudio">RESOURCES AND LIBRARY</router-link>
          <router-link class="nav-link" to="/services">SERVICES</router-link>
          <router-link class="nav-link" to="/about">ABOUT US</router-link>
        </ul>
      </div>
      <div class="nav-bar-buttons">
        <div class="moon">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.0048 15.5035C20.4098 15.9467 18.7258 15.9583 17.1248 15.5373C15.5239 15.1162 14.0635 14.2776 12.893 13.107C11.7225 11.9365 10.8838 10.4761 10.4627 8.87519C10.0417 7.27426 10.0533 5.59022 10.4965 3.99527L10.4968 3.99535C8.92365 4.43298 7.49264 5.27516 6.34631 6.438C5.19998 7.60084 4.37834 9.04374 3.96325 10.623C3.54816 12.2022 3.55409 13.8626 3.98047 15.4388C4.40685 17.0151 5.23879 18.452 6.39341 19.6067C7.54803 20.7613 8.98503 21.5932 10.5612 22.0196C12.1375 22.4459 13.7979 22.4518 15.3771 22.0367C16.9563 21.6216 18.3992 20.8 19.5621 19.6536C20.7249 18.5073 21.5671 17.0763 22.0047 15.5031L22.0048 15.5035Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <label class="switch">
          <input type="checkbox" @change="toggleDarkMode">
          <span class="slider round"></span>
        </label>
        <div class="sun">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 19.0938C16.3655 19.0938 19.0938 16.3655 19.0938 13C19.0938 9.63451 16.3655 6.90625 13 6.90625C9.63451 6.90625 6.90625 9.63451 6.90625 13C6.90625 16.3655 9.63451 19.0938 13 19.0938Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13 3.65625V1.625" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.39285 6.39298L4.95654 4.95667" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.65625 13H1.625" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.39285 19.6071L4.95654 21.0434" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13 22.3438V24.375" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.6069 19.6071L21.0432 21.0434" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.3438 13H24.375" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.6069 6.39304L21.0432 4.95673" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <button class="contact-us" @click="openModal">
          CONTACT US
        </button>
        <div class="burger-menu">
          <div class="burger-icon" @click="menuStore.toggleMenu">
            <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="25" height="2" fill="white"/>
              <rect y="7" width="25" height="2" fill="white"/>
              <rect y="14" width="25" height="2" fill="white"/>
            </svg>
          </div>
          <transition name="dropdown">
          <div class="dropdown" v-if="menuStore.menuVisible" :class="{ open: menuStore.menuVisible }">
              <ul>
                <router-link class="nav-link" to="/industries">INDUSTRIES</router-link>
                <router-link class="nav-link" to="/casestudio">RESOURCES AND LIBRARY</router-link>
                <router-link class="nav-link" to="/services">SERVICES</router-link>
                <router-link class="nav-link" to="/about">ABOUT US</router-link>
              </ul>
          </div>
          </transition>
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

.switch {
  position: relative;
  display: inline-block;
  width: 56px;
  height: 30px;
}

.nav-bar-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  .moon, .sun {
      margin-top: 2px;
  }
}

.dropdown {
  position: absolute;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  justify-content: center;
  gap: 60px;
  top: 75%;
  left: 0;
  right: 0;
  background: #06111C;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 10;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in-out; /* Adjust the duration as needed */
}

.dropdown.open {
  opacity: 1;
}

.dropdown ul {
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown router-link {
  padding: 10px 20px;
  cursor: pointer;
}

.dropdown router-link:hover {
  background-color: #f5f5f5;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.dropdown-enter-active, .dropdown-leave-active {
  transition: all 0.2s ease-in-out;
}

.dropdown-enter-from, .dropdown-leave-to {
  opacity: 0;
  transform: translateY(-290px);
}
</style>