<template>
  <div>
    <b-row>
      <b-card
        title="Sign Up to EX Sync "
        tag="article"
        style="max-width: 40rem;"
        class="mb-2 mx-auto"
        id="login-box"
      >
        <b-container fluid>
          <div class="alert alert-danger" role="alert" v-if="signupFailed">
            {{ alertMessage }}
          </div>

          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-valid">Email: </label>
            </b-col>
            <b-col sm="8">
              <b-form-input id="input-email" placeholder="Your email address" v-model="form.email" required></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-valid">First Name: </label>
            </b-col>
            <b-col sm="8">
              <b-form-input id="input-firstName" placeholder="Your first name" v-model="form.firstName" required></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-valid">Last Name: </label>
            </b-col>
            <b-col sm="8">
              <b-form-input id="input-lastName" placeholder="Your last name" v-model="form.lastName" required></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-valid">Password: </label>
            </b-col>
            <b-col sm="8">
              <b-form-input id="input-password" placeholder="Enter your password" v-model="form.password" required></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="4">
              <label for="input-valid">Confirm Password: </label>
            </b-col>
            <b-col sm="8">
              <b-form-input id="input-confirmPassword" placeholder="Confirm your password" v-model="form.confirmPassword" required></b-form-input>
            </b-col>
          </b-row>
        </b-container>
        <b-button v-on:click="userSignup" variant="success">Sign up</b-button>
        <b-button to="/" variant="danger">Cancel</b-button>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import xeConnectorApiService from '@/api-services/xeConnectorApiService';

export default {
  name: 'Signup',
  data() {
    return {
      types: [
        'Email',
        'First Name',
        'Last Name',
        'Password',
        'Confirm Password',
      ],
      alertMessage: '',
      form: {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
      },
      signupFailed: false,
    };
  },
  methods: {
    userSignup(event) {
      if (event) {
        // eslint-disable-next-line
        console.log(this.form);
        xeConnectorApiService.userSignup(this.form).then((response) => {
          // eslint-disable-next-line
          console.log(response.data);
          if (this.response.data.status === 'success' && this.response.data.user_id != null) {
            // eslint-disable-next-line
            console.log(response.data.status + '|' + response.data.user_id);
            // redirect to verify email page
            this.$router.push('VerifyEmail');
          } else {
            this.alertMessage = this.response.data.error_message;
            this.signupFailed = true;
          }
        }).catch((error) => {
          // eslint-disable-next-line
          console.log(error.data);
          this.alertMessage = 'Signup failed due to backend issue.';
          this.signupFailed = true;
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