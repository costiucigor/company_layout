<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
</script>

<template>
  <div class="footer-container">
    <div class="footer">
      <div class="footer-info">
        <div class="footer-title">
          LikeSoft
        </div>
        <div class="footer-number">
          +1 999 9999 9999
        </div>
        <div class="footer-address">
          Fischerinsel 12, Berlin
        </div>
        <div class="social-media">
          <div class="social-media-round">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.87597 0.75C4.48396 0.75 4.30926 0.756087 3.76254
              0.780967C3.21688 0.805954 2.84442 0.892341 2.51853 1.01909C2.18141 1.15001 1.89545 1.32513 1.61056
              1.61013C1.32545 1.89502 1.15033 2.18099 1.01898 2.51799C0.891913 2.844 0.80542 3.21656 0.78086
              3.762C0.756407 4.30873 0.75 4.48353 0.75 5.87554C0.75 7.26755 0.756193 7.44171 0.780967 7.98844C0.806061
              8.5341 0.892447 8.90655 1.01909 9.23245C1.15011 9.56956 1.32524 9.85552 1.61024 10.1404C1.89502 10.4255
              2.18099 10.6011 2.51788 10.732C2.844 10.8587 3.21656 10.9451 3.76211 10.9701C4.30883 10.995 4.48342 11.0011
              5.87533 11.0011C7.26745 11.0011 7.44161 10.995 7.98833 10.9701C8.53399 10.9451 8.90687 10.8587 9.23298
              10.732C9.56999 10.6011 9.85553 10.4255 10.1403 10.1404C10.4254 9.85552 10.6005 9.56956 10.7319 9.23256C10.8579
              8.90655 10.9444 8.53399 10.97 7.98855C10.9946 7.44182 11.001 7.26755 11.001 5.87554C11.001 4.48353 10.9946 4.30883 10.97
              3.76211C10.9444 3.21645 10.8579 2.844 10.7319 2.5181C10.6005 2.18099 10.4254 1.89502 10.1403 1.61013C9.8552 1.32502
              9.5701 1.1499 9.23267 1.01909C8.90591 0.892341 8.53324 0.805954 7.98759 0.780967C7.44086 0.756087 7.26681 0.75 5.87437 0.75H5.87597ZM5.70422 1.67372H5.70424H5.70426L5.87509 1.67377C7.24361 1.67377 7.40582 1.67868 7.94624 1.70324C8.44598 1.72609 8.71721 1.80959 8.89788 1.87975C9.13707 1.97265 9.3076 2.0837 9.48689 2.2631C9.66629 2.44249 9.77734 2.61334 9.87045 2.85253C9.94061 3.033 10.0242 3.30422 10.047 3.80396C10.0715 4.34428 10.0769 4.50659 10.0769 5.87447C10.0769 7.24235 10.0715 7.40466 10.047 7.94497C10.0241 8.44471 9.94061 8.71594 9.87045 8.8964C9.77755 9.13559 9.66629 9.30591 9.48689 9.4852C9.3075 9.66459 9.13718 9.77565 8.89788 9.86855C8.71742 9.93902 8.44598 10.0223 7.94624 10.0452C7.40592 10.0697 7.24361 10.0751 5.87509 10.0751C4.50647 10.0751 4.34427 10.0697 3.80395 10.0452C3.30421 10.0221 3.03298 9.93859 2.8522 9.86844C2.61301 9.77554 2.44216 9.66449 2.26276 9.48509C2.08337 9.3057 1.97231 9.13527 1.8792 8.89598C1.80904 8.71551 1.72543 8.44429 1.70269 7.94455C1.67813 7.40423 1.67322 7.24192 1.67322 5.87319C1.67322 4.50445 1.67813 4.343 1.70269 3.80268C1.72554 3.30294 1.80904 3.03171 1.8792 2.85104C1.9721 2.61185 2.08337 2.441 2.26276 2.2616C2.44216 2.08221 2.61301 1.97115 2.8522 1.87804C3.03287 1.80756 3.30421 1.72427 3.80395 1.70132C4.27678 1.67996 4.46002 1.67355 5.41529 1.67249V1.67377C5.50456 1.67363 5.60059 1.67367 5.70422 1.67372ZM8.61207 2.52536C8.27251 2.52536 7.99701 2.80054 7.99701 3.14021C7.99701 3.47978 8.27251 3.75528 8.61207 3.75528C8.95164 3.75528 9.22714 3.47978 9.22714 3.14021C9.22714 2.80064 8.95164 2.52515 8.61207 2.52515V2.52536ZM3.24634 5.87546C3.24634 4.42188 4.42483 3.24334 5.87841 3.24329C7.33204 3.24329 8.51027 4.42184 8.51027 5.87546C8.51027 7.32909 7.33214 8.50711 5.87852 8.50711C4.42489 8.50711 3.24634 7.32909 3.24634 5.87546ZM7.58469 5.87563C7.58469 4.93199 6.8197 4.16711 5.87618 4.16711C4.93254 4.16711 4.16766 4.93199 4.16766 5.87563C4.16766 6.81915 4.93254 7.58414 5.87618 7.58414C6.8197 7.58414 7.58469 6.81915 7.58469 5.87563Z"
                    fill="black"/>
            </svg>
          </div>
          <div class="social-media-round">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" fill="black" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
          </div>
          <div class="social-media-round">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" fill="black" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
          </div>
          <div class="social-media-round">
            <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.7 0H1.3C0.585 0 0.00649999 0.5625 0.00649999 1.25L0 8.75C0 9.4375 0.585 10 1.3 10H11.7C12.415 10 13 9.4375 13 8.75V1.25C13 0.5625 12.415 0 11.7 0ZM11.7 2.5L6.5 5.625L1.3 2.5V1.25L6.5 4.375L11.7 1.25V2.5Z" fill="#040D16"/>
            </svg>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="bottom-footer">
            <div class="privacy-policy">
              Privacy policy
            </div>
            <div class="company-requisites">
              © LikeSoft 2021. All rights reserved.
            </div>
          </div>
        </div>
      </div>
      <div class="right-footer">
        <div class="footer-navigation">
          <div class="navigation-title">
            NAVIGATION
          </div>
          <div class="navigation-items">
            <div>INDUSTRIES</div>
            <div>RESOURCES AND LIBRARY</div>
            <div>SERVICES</div>
            <div>ABOUT US</div>
          </div>
        </div>
        <div class="newsletter-block">
          <div class="footer-newsletter">
            <div class="newsletter-title">
              Newsletter:
            </div>
            <div class="newsletter-input">
              <input type="text" placeholder="Your email">
              <button class="newsletter-button">
                <img src="@/assets/static/icons/icon-forward.png" alt=">">
              </button>
            </div>
          </div>
          <div class="go-up" @click="scrollToTop">
            <div class="go-up-title">
              BACK UP
            </div>
            <div class="go-up-circle">
              <svg width="8" height="23" viewBox="0 0 8 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.35355 0.646446C4.15829 0.451185 3.84171 0.451185 3.64645 0.646446L0.464467 3.82843C0.269205 4.02369 0.269205 4.34027 0.464467 4.53553C0.659729 4.7308 0.976312 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646446ZM4.5 23L4.5 1L3.5 1L3.5 23L4.5 23Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="terms-block">
      <div class="terms-policy">
        Privacy policy
      </div>
        <div class="terms-rights">
          © LikeSoft 2021. All rights reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.newsletter-block {
  display: flex;
  flex-direction: column;
  gap: 180px;
}


.go-up {
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 144px;
  left: 150px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;

}
.go-up-circle {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #040D16;
  border: 1px solid #057AFF
}

@media (max-width: 1000px) {
  .go-up {
    display: none;
  }
}
</style>
