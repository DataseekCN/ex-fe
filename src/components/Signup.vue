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
          <b-row class="my-1" v-for="type in types" :key="type">
            <b-col sm="4">
              <label :for="`${type}`">{{ type }}:</label>
            </b-col>
            <b-col sm="8">
              <b-form-input :id="`${type}`" :type="type"></b-form-input>
            </b-col>
          </b-row>
        </b-container>
        <b-button href="/verifyemail" variant="success">Sign up</b-button>
        <b-button to="/" variant="danger">Cancel</b-button>
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
        'Email',
        'First Name',
        'Last Name',
        'Password',
        'Confirm Password',
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