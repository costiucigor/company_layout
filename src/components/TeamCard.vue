<script>
export default {
  props: {
    tag: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="img-block">
      <img src="../assets/static/img/cto.png" alt="png">
    </div>
    <div class="credentials">
      <div class="name">Roman Voronin</div>
      <div class="position"><span class="text-blue">General director</span></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 271px;
  height: 345px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  gap: 20px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

.by-author {
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
}

.author-block {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  gap: 8px;
  margin-bottom: 8px;
}

.profile-picture {
  width: 50px;
  border-radius: 50%;
  height: 50px;
  background-color: #ccc;
  margin-right: 8px;
}

.img-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 271px;
  height: 280px;
    img {
      width: 401px;
      height: 451px;
    }
}

.name {
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 21px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0;
  text-align: left;
}

.position {
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;
  margin-top: 6px;
  text-align: left;

}

.credentials {
  margin-top: 10px;
  margin-left: 8px;
}


@media (max-width: 1400px) {
  .card {
    width: 162px;
    gap: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img-block {
    width: 200px;
    height: 254px;
    overflow: hidden;
  }

  .credentials {
    margin-top: 10px;
  }
}

@media (max-width: 520px) {
  .img-block {
    width: 180px;
    height: 234px;
    overflow: hidden;
  }
}

@media (max-width: 390px) {
  .img-block {
    width: 120px;
    height: 184px;
  }
}
</style>
