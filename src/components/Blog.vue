<script setup lang="ts">

</script>

<template>
  <div class="blog">
    <div class="title">
      LikeSoft Blog
    </div>
    <div class="description">
      Design. Engineering. Lessons learned on our journey
    </div>
    <div class="tag">
      <span class="text-blue"> # Development</span>
    </div>
    <div class="blog-title">
      Get Flutter's offline support in Supabase
    </div>
    <div class="blog-author-block">
      <div class="author-img">
        <img src="@/assets/static/img/cto.png" alt="">
      </div>
      <div class="author-info">
        <div class="author-info-name">
          By Matias Irland
        </div>
        <div class="author-date">
          Sep 13, 2022
        </div>
      </div>
    </div>
    <div class="blog-content">

    </div>
  </div>
</template>

<style scoped lang="scss">
  .blog {
    max-width: 832px;
    height: auto;
    margin-left: 384px;
    margin-top: 50px;
    .title {
      font-family: Garamond, serif;
      font-size: 52px;
      line-height: 62.4px;
    }
    .description {
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
    }
    .tag {
      font-family: Garamond, serif;
      font-size: 14px;
      line-height: 14px;
      margin-top: 30px;
    }
    .blog-title {
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-weight: 700;
      font-size: 28px;
      margin-top: 10px;
      line-height: 30.8px;
    }
  }
  .blog-author-block {
    max-height: 95px;
    width: 416px;
    display: flex;
    align-items: center;
    flex-direction: row;

    .author-img {
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .author-info {
      display: flex;
      flex-direction: column;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

      .author-info-name {
        font-size: 16px;
        line-height: 24px;
      }

      .author-date {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
</style>