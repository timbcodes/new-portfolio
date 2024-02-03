<template>
  <div class="top-nav" :style="{ darkNav: darkNav }">
    <div class="main-logo"></div>
    <div class="nav-buttons">
      <div
        v-for="(button, index) in navButtons"
        :key="index"
        class="nav-button"
        id="button"
      >
        {{ button }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopNavBar",
  data() {
    return {
      navButtons: ["Home", "About", "Contact"],
      lightNav: true,
      darkNav: false,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.top-nav {
  height: 50px;
  width: 100%;
  background-color: $OSWhite;
  @include flex(row, space-between, center);
  .main-logo {
    height: 100%;
    width: 300px;
    background-color: salmon;
  }
  .nav-buttons {
    height: 100%;
    width: auto;
    @include flex(row, space-evenly, center);
    gap: 0.5rem;
    .nav-button {
      height: 100%;
      width: 80px;
      @include flex(row, center, center);
    }
  }
}
</style>
