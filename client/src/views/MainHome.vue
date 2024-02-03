<template>
  <div class="main-home-container">
    <div class="top-navbar">
      <TopNavBar
        :currentSection="currentSection"
        @sectionEmit="changeSection"
      />
    </div>
    <div class="sections">
      <div class="first-section" ref="section1"></div>
    </div>
  </div>
</template>
<script>
import TopNavBar from "@/components/UI/TopNavBar.vue";
export default {
  name: "MainHome",
  components: {
    TopNavBar,
  },
  data() {
    return {
      currentSection: 0,
    };
  },
  methods: {
    changeSection(section) {
      this.currentSection = section;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/mixins.scss";
@import "@/scss/variables.scss";
.main-home-container {
  height: 100vh;
  width: 100%;
  .top-navbar {
    height: 50px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
  }
  .sections {
    height: calc(100vh - 50px);
    width: 100%;
    @include flexCenterColumn();
    .first-section {
      height: 100%;
      width: 100%;
      background-color: $OSWhite;
    }
  }
}
</style>
