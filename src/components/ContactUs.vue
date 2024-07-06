<script setup lang="ts">

</script>

<template>
  <div class="contact-us">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">Ask your question to our specialists</slot>
          </div>
          <div class="support">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.75 0H1.75C0.7875 0 0.00874999 0.7875 0.00874999 1.75L0 12.25C0 13.2125 0.7875 14 1.75 14H15.75C16.7125 14 17.5 13.2125 17.5 12.25V1.75C17.5 0.7875 16.7125 0 15.75 0ZM15.75 3.5L8.75 7.875L1.75 3.5V1.75L8.75 6.125L15.75 1.75V3.5Z" fill="#057AFF"/>
            </svg>
            likesoft@support.ru
          </div>
          <div class="modal-inputs">
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
          </div>
          <div class="terms">
            <div class="modal-terms">
              By clicking on the button, I agree to <span class="text-blue">the processing of personal data</span>
            </div>
            <div class="terms-button">
              <button class="banner-button">CONTACT US</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-us {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 683px;
  background: #06111C;
}

.modal-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  float: left;
  gap: 20px;
  margin-top: 60px;
  max-width: 384px;
}

.support {
  position: absolute;
  margin-left: 1000px;
  color: #ffffff;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;
  text-align: right;
}

.modal-inputs {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.terms {
  margin-top: 40px;
  gap: 460px;
  display: flex;
  flex-direction: row;
}

.modal-right {
  display: flex;
  flex-direction: column;
  float: right;
  width: 696px;
  margin-top: 60px;
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
}

.modal-terms {
  float: left;
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
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

@media (max-width: 1250px) {
  .support {
    margin-left: 700px;
  }
}

@media (max-width: 1160px) {
  .modal-container {
    width: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
  }
  .modal-inputs {
    display: flex;
    flex-direction: column;
  }

  .support {
    margin-left: 0;
    position: relative;
    top: 50px;
  }

  .modal-input {
    input {
      width: 600px;
    }
  }

  .modal-description {
    textarea {
      width: 600px;
    }
  }

  .terms {
    display: flex;
    width: 100vw;
    flex-direction: column-reverse;
    gap: 20px;
  }
  .terms-button {
    button {
      width: 100%;
    }
  }
}

@media (max-width: 700px) {
  .modal-container {
    align-items: flex-start;
    padding-bottom: 20px;
  }

  .modal-header {
    top: 20px;
    font-size: 22px;
    height: 52px;
    position: relative;
    margin-left: 20px;
    max-width: 190px;
  }

  .support {
    font-size: 14px;
    margin-left: 20px;
    top: 50px;
  }

  .terms-button {
    margin-left: 20px;
    button {
      width: 88vw;
    }
  }

  .modal-left {
    margin-left: 20px;
    margin-top: 90px;
  }

  .modal-right {
    width: auto;
  }

  .modal-terms {
    margin-left: 20px;
    font-size: 12px;
  }

  .modal-input {
    input {
      width: 88vw;
    }
  }

  .modal-description {
    margin-left: 20px;
    textarea {
      width: 88vw;
    }
  }
}
</style>