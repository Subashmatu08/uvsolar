<template>
  <!--Back to the top button -->
  <a class="goup" @click="ToTop" :class="{ RotateAni }">
    <span
      class="icon goup1"
      :class="{ GoupShown }"
      style="zoom:2.0 !important;"
    >
      <ion-icon name="arrow-up-circle-outline"></ion-icon>
    </span>
  </a>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const GoupShown = ref(false);
    const RotateAni = ref(false);
    function handleScroll() {
      if (window.scrollY > 100) {
        GoupShown.value = true;
        RotateAni.value = true;
      } else if (window.scrollY < 100) {
        GoupShown.value = false;
        RotateAni.value = false;
      }
    }
    // function ToTop() {
    //   window.scrollTo(0, 0);
    // }
    function ToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    return {
      GoupShown,
      ToTop,
      RotateAni,
    };
  },
};
</script>

<style>
.goup {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: rgb(72, 241, 191);
  color: black;
  text-align: center;
  border-radius: 50%;
}
.goup:hover {
  color: black;
}

.goup1 {
  display: none;
}
.GoupShown {
  display: block !important;
  padding-top: 1.5px;
}
.RotateAni {
  /* animation: gouparrow 2s ease-in-out; */
  animation: gouparrow 2s cubic-bezier(0.15, 0.16, 0.9, 0.9);
  animation-iteration-count: 2;
}
@keyframes gouparrow {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
