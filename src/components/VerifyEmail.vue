<template>
  <div>
    <b-row>
      <b-card
        title="Verify Your Email"
        tag="article"
        style="max-width: 40rem;"
        class="mb-2 mx-auto"
        id="login-box"
      >
        <b-container fluid>
          <b-row class="my-1">
            <p>
              Please go to your email and click on verify link.
            </p>
          </b-row>
        </b-container>
        <b-button v-on:click="resentEmail" variant="secondary">Resend Verification Email</b-button>
        <b-button to="/connections" variant="danger">I have Verified My Account</b-button>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import xeConnectorApiService from '@/api-services/xeConnectorApiService';

export default {
  name: 'VerifyEmail',
  data() {
    return {
      types: [
      ],
    };
  },
  methods: {
    resentEmail(event) {
      if (event) {
        xeConnectorApiService.userEmailVerification(this.form).then((response) => {
          // eslint-disable-next-line
          console.log(response.data);
        }).catch((error) => {
          // eslint-disable-next-line
          console.log(error.data);
        });
        Cookies.get('ex_session_id');
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