<template>
  <div class="home container">
    <NavBar />

    <!-- Landing Section Carousel -->

    <HeroCar />

    <!-- imported from firebase -->

    <div class="content" v-for="subjectDoc in subjects" :key="subjectDoc">
      <h1>{{ subjectDoc.id }} - {{ subjectDoc.data().name }}</h1>
    </div>
    <div>
      <h1>{{ contentWrapper.Topic1 }}</h1>
    </div>
    <div>
      <h1>{{ contentWrapper.Topic2 }}</h1>
    </div>

    <Footer />
    <go-top />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import db from "../db";
// @ is an alias to /src
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroCar from "../components/HeroCar";
import GoTop from "../components/GoTop.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    Footer,
    HeroCar,
    GoTop,
  },
  setup() {
    const contentWrapper = ref({});
    onMounted(() => {
      //       db.collection("subjects").get().then((querySnapshot) => {
      //     querySnapshot.forEach((doc) => {
      //         // doc.data() is never undefined for query doc snapshots

      //         subjects.value.push(doc)
      //     });
      // });
      db.collection("subjects")
        .doc("About")
        .get()
        .then((doc) => {
          contentWrapper.value.Topic1 = doc.data().Topic1;
          contentWrapper.value.Topic2 = doc.data().Topic2;
        });
    });

    return {
      contentWrapper,
    };
  },
};
</script>

<style></style>
