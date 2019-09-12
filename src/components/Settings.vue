<template>
<div>
  <b-row>
    <b-col>
      <NavBar/>
    </b-col>
  </b-row>
  <b-row>
    <b-col class="col-auto">
      <SideBar/>
    </b-col>
    <b-col>
      <b-row>
        <b-col sm="4" class="my-3">
          <p>Current Subscription:</p>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Title</h4>
              <p class="card-text">Body</p>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-container fluid>
          <p>Profile:</p>
          <b-row class="my-1" v-for="(type, label) in form_inputs" :key="label">
            <b-col sm="2">
              <label :for="`type-${type}`">{{ label }}:</label>
            </b-col>
            <b-col sm="6">
              <b-form-input :id="`type-${type}`" :type="type" v-model="form_outputs[label]"></b-form-input>
            </b-col>
          </b-row>
        </b-container>
      </b-row>

      <b-row>
        <b-container fluid>
          <p>Reset Passwords:</p>
          <b-row class="my-1" v-for="(type, label) in newpasswords_inputs" :key="label">
            <b-col sm="2">
              <label :for="`type-${type}`">{{ label }}:</label>
            </b-col>
            <b-col sm="6">
              <b-form-input :id="`type-${type}`" :type="type" v-model="newpasswords_outputs[label]"></b-form-input>
            </b-col>
          </b-row>
        </b-container>
      </b-row>

      <b-row class="m-1">
        <b-col class="m-1">
          <button type="button" class="btn btn-primary btn-lg btn-block" v-on:click="output">Save</button>
        </b-col>
        <b-col class="m-1">
          <button type="button" name="" id="" class="btn btn-primary btn-lg btn-block">Cancel</button>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</div>
</template>

<script>
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';

export default {
  name: 'Settings',
  components: {
    NavBar,
    SideBar,
  },
  data() {
    return {
      form_inputs: {
        Name: 'text',
        Company: 'text',
        Country: 'text',
        Email: 'email',
      },
      form_outputs: {
        Name: null,
        Company: null,
        Country: null,
        Email: null,
      },
      newpasswords_inputs: {
        Old: 'password',
        New: 'password',
        Confirm: 'password',
      },
      newpasswords_outputs: {
        Old: null,
        New: null,
        Confirm: null,
      },
    };
  },
  created() {

  },
  methods: {
    output(event) {
      if (event) {
        // eslint-disable-next-line
        console.log(this.form_outputs)
        // eslint-disable-next-line
        console.log('--------------------')
        // eslint-disable-next-line
        console.log(this.newpasswords_outputs)
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.card {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
}
</style>
