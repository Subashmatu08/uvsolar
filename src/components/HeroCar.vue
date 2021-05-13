<template>
  <!-- <div class="cartext">
    <h1>hello</h1>
  </div> -->
  <carousel :items-to-show="1" :autoplay="2000" :wrap-around="true">
    <slide class="is-display-relative" v-for="image in images" :key="image">
      <img class="heroimg" :src="image" alt="image" />
    </slide>
    <!-- <template #addons>
      <navigation />
      <pagination />
    </template> -->
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
// import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { Carousel, Slide } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    // Pagination,
    // Navigation,
  },
  data() {
    return {
      images: [
        require("../assets/image01.jpg"),
        require("../assets/image02.jpg"),
        require("../assets/image03.jpg"),
      ],
    };
  },
};
</script>
<style>
.heroimg {
  max-height: 100vh;
  width: 100%;
}
/* .cartext {
  position: absolute !important;
  left: 150% !important;
  right: 150% !important;
  z-index: 2;
  color: black !important;
  background-color: red !important;
} */
</style>
