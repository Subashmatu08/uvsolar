<template>
  <NavBar />
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <Footer />
  <GoTop />
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GoTop from "../components/GoTop";
export default {
  components: {
    NavBar,
    Footer,
    GoTop,
  },
};
</script>

<style></style>
