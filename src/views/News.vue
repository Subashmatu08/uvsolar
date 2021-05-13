<template>
  <NavBar />
  <div class="opening"></div>
  <h1>News</h1>
  <Footer />
  <go-top />
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GoTop from "../components/GoTop.vue";
export default {
  components: {
    NavBar,
    Footer,
    GoTop,
  },
};
</script>

<style></style>
