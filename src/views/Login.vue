<template>
  <div class="container">
    <!-- <nav-bar hero="mike" /> -->
    <nav-bar />
    <div class="opening"></div>

    <div class="signin-form">
      <h1 class="is-size-2 has-text-centered mb-3">Login</h1>
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input
            class="input pl-3 is-rounded"
            type="text"
            placeholder="Type your username or email"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <span class="material-icons icon is-small is-left">
            visibility_off
          </span>
          <input
            class="input pl-3 is-rounded"
            type="Password"
            placeholder="Type your password"
          />
        </div>
      </div>
    </div>

    <!-- <div>
  <h2>{{bigContent.String1}}</h2>
  <h1>&</h1>
  <h2>{{bigContent.String2}}</h2>
</div> -->
    <Footer />
    <go-top />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer";
import { onMounted, ref } from "vue";
import db from "../db";
import GoTop from "../components/GoTop.vue";

export default {
  components: {
    NavBar,
    Footer,
    GoTop,
  },

  setup() {
    const bigContent = ref({});
    onMounted(() => {
      db.collection("subjects")
        .doc("About2")
        .get()
        .then((doc) => {
          bigContent.value.String1 = doc.data().String1;
          bigContent.value.String2 = doc.data().String2;
          console.log(bigContent.value);
        });
    });
    return {
      bigContent,
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.signin-form {
  background: rgba(128, 128, 128, 0.507);
  filter: 0.5;
  min-width: 25rem;
  padding: 4rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
}
</style>

// firebase.auth().createUserWithEmailAndPassword(email, password) //
.then((userCredential) => { // // Signed in // var user = userCredential.user;
// // ... // }) // .catch((error) => { // var errorCode = error.code; // var
errorMessage = error.message; // // .. // });
