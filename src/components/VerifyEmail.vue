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
              Please go to your email address and click on verify my email link.
            </p>
          </b-row>
        </b-container>
        <b-button to="/connections" variant="danger">OK</b-button>
      </b-card>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      types: [
      ],
    };
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