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
          <div class="alert alert-danger" role="alert" v-if="loginFailed">
            Login failed, please try again. 
          </div>

          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-valid">Email: </label>
            </b-col>
            <b-col sm="9">
              <b-form-input id="input-email" placeholder="Your Email Address" v-model="form.email" required></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-invalid">Password:</label>
            </b-col>
            <b-col sm="9">
              <b-form-input id="input-password" v-model="form.password" required></b-form-input>
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
import xeConnectorApiService from '@/api-services/xeConnectorApiService';

export default {
  name: 'login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      loginFailed: false,
    };
  },
  methods: {
    userSignin(event) {
      if (event) {
        // eslint-disable-next-line
        console.log(this.form);
        xeConnectorApiService.userSignin(this.form).then((response) => {
          // eslint-disable-next-line
          console.log(response.data);
          this.loginFailed = true;
        }).catch((error) => {
          // eslint-disable-next-line
          console.log(error.data);
          this.loginFailed = true;
        });
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
