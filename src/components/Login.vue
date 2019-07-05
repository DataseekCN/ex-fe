<template>
  <div>
    <b-row>
      <b-card
        title="EX Sync Login"
        tag="article"
        style="max-width: 40rem;"
        class="mb-2 mx-auto"
        id="login-box"
      >
        <b-container fluid>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-valid">Email: </label>
            </b-col>
            <b-col sm="9">
              <b-form-input id="input-email" :state="none" placeholder="Your Email Address" v-model="form.email"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-invalid">Password:</label>
            </b-col>
            <b-col sm="9">
              <b-form-input id="input-password" :state="none" v-model="form.password"></b-form-input>
            </b-col>
          </b-row>
        </b-container>
        <b-button id="signin-btn" href="#" variant="success" v-on:click="userSignin">Sign In</b-button>
        <b-button id="signup-btn" to="/signup" variant="secondary">Sign Up</b-button>
      </b-card>
    </b-row>
    <b-row>
      <a class="mx-auto" href="/resetpassword">Reset Passwords</a>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    userSignin(event) {
      if (event) {
        // eslint-disable-next-line
        console.log(this.form);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#login-box {
  margin-top: 70px;
  margin-bottom: 70px;
}
</style>
