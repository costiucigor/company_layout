<template>
  <div class="card">
    <div class="values">
      <div class="numbers">
        <div class="number-value">
          20
        </div>
      </div>
      <div class="name">Projects</div>
      <div class="description-value">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
  </div>
</template>

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

<style scoped lang="scss">
.card {
  width: 282px;
  height: 291px;
  background: #FAFAFA;
  gap: 20px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.values {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .numbers {
    background: #ffffff;
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-family: Garamond,serif;
    font-size: 34px;
    font-weight: 400;
    line-height: 37px;
    letter-spacing: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    color: #057AFF;
  }
  .numbers:hover {
    background: #057AFF;
    color: #ffffff;
    cursor: pointer;
  }
  .description-value {
    max-width: 229px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0;
    text-align: center;
    color: #6A7077;
  }
  .name {
    font-family: Garamond,serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0;
    text-align: center;
    color: #06111C;
  }
}

@media (max-width: 1100px) {
  .value {
    width: 400px;
  }

}

</style>
