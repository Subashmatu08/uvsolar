<template>
  <nav
    class="navbar pl-5 pr-5"
    :class="{ isNavShown }"
    role="navigation"
    aria-label="main navigation"
    style="position:fixed;"
  >
    <div class="navbar-brand">
      <p class="navbar-item" href="http://localhost:8080/#/" target="_blank">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </p>

      <a
        role="button"
        class="navbar-burger"
        @click="isMenuShown = !isMenuShown"
        :class="{ 'is-active': isMenuShown, isNavShown }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isMenuShown }"
    >
      <div class="navbar-end">
        <router-link to="/" class="navbar-item" :class="{ isNavShown }"
          >Home</router-link
        >
        <!--  <router-link to="/about" class="navbar-item">About</router-link>
 <router-link to="/login" class="navbar-item">login</router-link> -->
        <router-link
          to="/residential"
          class="navbar-item"
          :class="{ isNavShown }"
          >Residential</router-link
        >
        <router-link
          to="/commercial"
          class="navbar-item"
          :class="{ isNavShown }"
          >Commercial</router-link
        >
        <router-link to="/news" class="navbar-item" :class="{ isNavShown }"
          >News</router-link
        >
        <router-link to="/products" class="navbar-item" :class="{ isNavShown }"
          >Products</router-link
        >
        <router-link to="/services" class="navbar-item" :class="{ isNavShown }"
          >Services</router-link
        >
        <router-link
          to="/getintouch"
          class="navbar-item"
          :class="{ isNavShown }"
          >Get In Touch</router-link
        >

        <!-- <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          {{hero}}
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div> -->
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  // props : {
  //     hero : String
  // }
  setup() {
    const isMenuShown = ref(false);
    const isNavShown = ref(false);
    function handleScroll() {
      if (window.scrollY > 100) {
        isNavShown.value = true;
      } else if (window.scrollY <= 100) {
        isNavShown.value = false;
      }
    }
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    return {
      isMenuShown,
      isNavShown,
    };
  },
};
</script>

<style>
/* .navbar{
  width: 100vw !important;
} */
nav {
  position: fixed;
  /* background-color: rgba(255, 255, 255, 0.6) !important; */
  background-color: transparent !important;
  width: 100%;
}
nav a {
  color: white !important;
  border-bottom: 1px solid transparent;
  transition: 0.3s ease-in-out;
  text-align: center;
}
nav a:hover {
  background-color: transparent !important;
  border-bottom: 1.5px solid red;
}
nav a:focus {
  background-color: transparent !important;
}
nav.isNavShown {
  color: black !important;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  background-color: white !important;
  transition: 0.3s ease-in-out;
  box-shadow: 0px 1.5px 7px grey;
}
nav a.isNavShown {
  color: black !important;
}
navbar-burger.isNavShown {
  color: black !important;
}
@media screen and (max-width: 1023px) {
  .navbar-menu {
    background-color: transparent !important;
  }
}
</style>

// Charu praneeth16:59 // https://codepen.io/chriscoyier/pen/EyxPPm // Charu
praneeth18:00 // created () { // window.addEventListener('scroll',
this.handleScroll); // }, // destroyed () { //
window.removeEventListener('scroll', this.handleScroll); // }, // methods: { //
handleScroll (event) { // // Any code to be executed when the window is scrolled
// } // } // Charu praneeth18:10 // https://www.youtube.com/watch?v=uzRsENVD3W8
