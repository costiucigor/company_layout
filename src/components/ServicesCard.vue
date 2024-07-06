<script setup lang="ts">

</script>

<template>
  <div class="card">
    <div class="card-title">
      E-learnig and virtual classroom software development
    </div>
    <div class="card-img">
      <img src="@/assets/static/img/crm.png" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
  .card {
    width: 590px;
    height: 364px;
    background: #FAFAFA;
    .card-title {
      margin-top: 20px;
      margin-left: 20px;
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-size: 26px;
      font-weight: 500;
      line-height: 34px;
      letter-spacing: 0em;
      text-align: left;

    }
    .card-img {
      position: relative;
      margin-left: 214px;
      img {
        width: 374px;
        height: 276px;
      }
    }
  }
  .card:hover {
    color: #ffffff;
    transition: 0.5s;
    cursor: pointer;
    background: #057AFF;
  }

  @media (max-width: 700px) {
    .card {
      width: auto;
      height: auto;
      .card-title {
        font-size: 18px;
      }
      .card-img {
        img {
          width: 209px;
          height: 142px;
        }
      }
    }
  }
  @media (max-width: 430px) {
    .card {
      width: 100vw;
      height: auto;
      .card-title {
        font-size: 18px;
      }
      .card-img {
        margin-left: 20vw;
        img {
          width: 209px;
          height: 142px;
        }
      }
    }
  }
</style>