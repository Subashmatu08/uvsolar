<template>
  <NavBar />
  <div class="opening"></div>
  <div class="form">
    <h1 class="is-size-3 mb-5">Please fill out the form</h1>
    <form action="">
      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Name</label>
            <div class="control has-icons-left">
              <input class="input" type="text" placeholder="Type Your Name" />
              <span class="icon is-small is-left">
                <ion-icon name="person-sharp"></ion-icon>
              </span>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input class="input" type="email" placeholder="Type your Email" />
              <span class="icon is-small is-left">
                <ion-icon name="mail-sharp"></ion-icon>
              </span>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <label class="label">Phone Number</label>
            <div class="control has-icons-left">
              <input
                class="input"
                type="tel"
                v-model="phone"
                @keydown="phonenum"
                placeholder="Type your Mobile Number"
              />
              <span class="icon is-small is-left">
                <ion-icon name="call-sharp"></ion-icon>
              </span>
            </div>
            <!-- <p class="help is-danger">This email is invalid</p> -->
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-one-quarter">
          <div class="field">
            <label class="label">Products</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Please select your Product!</option>
                  <option>With options</option>
                  <option>With options</option>
                  <option>With options</option>
                  <option>With options</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <label class="label">Address</label>
            <div class="control has-icons-left">
              <textarea
                class="textarea input"
                placeholder="Type your Adress"
              ></textarea>
              <span class="icon is-small is-left">
                <ion-icon name="location-sharp"></ion-icon>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Feedback</label>
            <div class="control has-icons-left">
              <textarea
                class="textarea input"
                placeholder="Give your Feedback!"
              ></textarea>
              <span class="icon is-left is-small">
                <ion-icon name="document-text-sharp"></ion-icon>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
      </div>
    </form>
  </div>
  <Footer />
  <GoTop />
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ref } from "vue";
import GoTop from "../components/GoTop.vue";
export default {
  components: {
    NavBar,
    Footer,
    GoTop,
  },
  setup() {
    const phone = ref(null);
    function phonenum(input) {
      if (typeof input == "string") {
        return;
      }
      phone.value = input;
    }
    return { phonenum, phone };
  },
};
</script>

<style>
.form {
  padding: 2rem 10rem 0 10rem;
}
.opening {
  background: url("../assets/image01.jpg") center no-repeat;
  background-size: cover;
}
</style>
