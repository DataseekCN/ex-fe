<template>
  <div>
    <b-row>
      <b-card bg-variant="light"
        tag="article"
        style="max-width: 40%; "
        class="mb-2 mx-auto text-center"
        id="login-box">
        <b-col class="login-title">
          <span><b>EX Sync Login</b></span>
        </b-col>
        <b-container fluid>
          <div class="alert alert-danger"
            role="alert"
            v-if="loginFailed">
            {{ alertMessage }}
          </div>
          <b-col>
            <b-row class="email">
              <b-col sm="1"></b-col>
              <b-col sm="10"
                style="width:300px; magin-bottom:20px">
                <b-form-input id=" input input-email"
                  placeholder="Your Email Address"
                  v-model="form.email"
                  required></b-form-input>
              </b-col>
              <b-col sm="1"></b-col>
            </b-row>
            <div class="clearfix"
              style="margin-bottom: 10px;"></div>
            <b-row class="passwd">
              <b-col sm="1"></b-col>
              <b-col sm="10"
                style="width:300px">
                <b-form-input id="input input-password"
                  placeholder="Your Password"
                  v-model="form.password"
                  required></b-form-input>
              </b-col>
              <b-col sm="1"></b-col>
            </b-row>
          </b-col>

          <!-- checkbox -->
          <b-col sm="8"
            style="margin:10px 0px 10px 0px;">
            <b-check class="check-passwd">Remember Password</b-check>
          </b-col>
        </b-container>

        <!-- 操作按钮 -->
        <b-col bg-variant="light"
          id="btn-card">
          <b-button id="signin-btn"
            href="#"
            variant="success"
            v-on:click="userSignin">Sign In</b-button>
          <b-button id="signup-btn"
            to="/signup"
            variant="secondary">Sign Up</b-button>
        </b-col>
      </b-card>
    </b-row>
    <b-row>
      <a class="mx-auto"
        href="/resetpassword">Reset Passwords</a>
    </b-row>
  </div>
</template>

<script>
import xeConnectorApiService from '@/api-services/xeConnectorApiService';
import Cookies from 'js-cookie';

export default {
  name: 'login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      loginFailed: false,
      alertMessage: '',
    };
  },
  methods: {
    userSignin(event) {
      if (event) {
        // eslint-disable-next-line
        console.log(this.form);
        xeConnectorApiService
          .userSignin(this.form)
          .then((response) => {
            // eslint-disable-next-line
            console.log(response.data);
            if (
              response.data.status === 'success' &&
              response.data.user_session_id != null
            ) {
              // eslint-disable-next-line
              console.log(
                `${response.data.status}|${response.data.user_session_id}`,
              );
              // todo: store session ID in cookie
              Cookies.set('session_id', response.data.user_session_id);
              this.$router.push('Dashboard');
            } else {
              this.alertMessage = this.response.data.error_message;
              this.loginFailed = true;
            }
          })
          .catch((error) => {
            // eslint-disable-next-line
            console.log(error.data);
            this.alertMessage = 'Login failed due to backend issue.';
            this.loginFailed = true;
          });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login-title {
  background-color: lightgray;
  text-align: center;
  font-size: 30px;
  font-style: italic;
  margin: 0px 0px 20px 0px;
  border-bottom: 2px solid lightseagreen;
}
#login-box {
  margin-top: 70px;
  margin-bottom: 70px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  /* background-color:lightgray; */
}
#btn-card {
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
}

.check-passwd {
  padding-left: 36px;
}

#signin-btn {
  margin-right: 10px;
}

#signup-btn {
  margin-left: 20px;
}
</style>
