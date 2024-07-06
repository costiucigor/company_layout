<script setup lang="ts">
import {useStore} from "@/stores/modal";

defineProps({
  show: Boolean,
});
const store = useStore();

const closeModal = () => {
  store.togglePopup();
  document.body.style.overflow = '';
};
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">Ask your question to our specialists</slot>
          </div>
          <div class="modal-close"  @click="closeModal">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L10 10M19 19L10 10M10 10L19 1L1 19" stroke="white"/>
            </svg>
          </div>
          <div class="modal-left">
            <div class="modal-input">
              <label for="name">Your name<span class="text-blue">*</span></label>
              <input placeholder="Your name" type="text" id="name" name="name">
            </div>
            <div class="modal-input">
              <label for="phone">Phone<span class="text-blue">*</span></label>
              <input placeholder="+62 XXX XXX XX XX" type="number" id="phone" name="phone">
            </div>
            <div class="modal-input">
              <label for="mail">Mail<span class="text-blue">*</span></label>
              <input placeholder="example@mail.com" type="text" id="mail" name="mail">
            </div>
          </div>
          <div class="modal-right">
            <div class="modal-description">
              <label for="message">Message<span class="text-blue">*</span></label>
              <textarea id="message" name="message" rows="6"></textarea>
            </div>
          </div>
            <div class="modal-terms">
              By clicking on the button, I agree to <span class="text-blue">the processing of personal data</span>
            </div>
            <div class="terms-button">
              <button class="banner-button">CONTACT US</button>
            </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.modal-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  float: left;
  gap: 20px;
  margin-top: 60px;
  margin-left: 45px;
  max-width: 384px;
}

.modal-close {
  cursor: pointer;
  position: absolute;
  margin-left: 1134px;
}

.modal-right {
  display: flex;
  flex-direction: column;
  float: right;
  width: 696px;
  margin-top: 60px;
  margin-right: 45px;
}

.modal-input {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 384px;
  input {
    width: 384px;
    height: 56px;
    color: #ffffff;
    border: 2px solid #06111C99;
    background: #06111C99;
    ::placeholder {
      margin-left: 10px;
    }
    &:focus {
      border-color: #057AFF;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
  label {
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    color: #6a7077;
    font-size: 12px;
  }
}

.terms-button {
  position: absolute;
  margin-top: 378px;
  margin-left: 1069px;
}

.modal-terms {
  position: absolute;
  float: left;
  margin-top: 395px;
  margin-left: 48px;
  color: #ffffff;
  font-size: 16px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

.modal-description {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 384px;
  textarea {
    resize: none;
    width: 696px;
    height: 256px;
    background: #06111C99;
    border: 2px solid #06111C99;
    color: #ffffff;
    &:focus {
      border-color: #057AFF;
    }
  }
  label {
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    color: #6a7077;
    font-size: 12px;
  }
}


.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  position: relative;
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 1200px;
  height: 464px;
  background: #14273A;;
  margin: 0px auto;
  padding: 20px 30px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

@media (max-width: 1280px) {}

.modal-header {
  font-family: Garamond, serif;
  color: #ffffff;
  position: absolute;
  font-size: 28px;
  line-height: 30.8px;
  font-weight: 400;
  margin-left: 48px;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>