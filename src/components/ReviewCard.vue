<template>
  <div class="card">
    <div class="author-block">
      <div class="profile-picture"></div>
      <div class="text-block">
        <div class="name">{{ name }}</div>
        <div class="company">{{ company }}</div>
      </div>
    </div>
    <div class="description">{{ description }}</div>
    <div class="read-full">
      <span class="text-blue">Read full review</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
$toggledarkmode: false;

$light-bg-color: #ffffff;
$light-text-color: #000000;

$transition-duration: 0.5s;

$dark-bg-color: #06111C;
$blue-dark-bg-color: #14273A;
$dark-text-color: #ffffff;

$bg-color: if($toggledarkmode, $dark-bg-color, $light-bg-color);
$text-color: if($toggledarkmode, $dark-text-color, $light-text-color);

.card {
  width: 348px;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  gap: 20px;
  &[data-toggledarkmode="false"] {
    background-color: $light-bg-color;
    color: $light-text-color;
  }

  &[data-toggledarkmode="true"] {
    background-color: $blue-dark-bg-color;
    color: $dark-text-color;
  }
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

.read-full {
  font-size: 16px;
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

.text-block {
  display: flex;
  flex-direction: column;
  width: 121px;
  height: 46px;
  gap: 8px;
}

.name {
  font-family: Garamond,serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0;
  text-align: left;
}

.company {
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;
  text-align: left;
  color: #6A7077;
}

.description {
  text-align: left;
  width: 320px;
  font-size: 16px;
}

@media (max-width: 1000px) {
  .description {
    font-size: 12px;
  }
}
</style>
