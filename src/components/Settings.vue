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
              <b-form-input :id="`type-${type}`" :type="type" v-model="form_outputs[label]" :placeholder="current_settings[label]"></b-form-input>
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

      <b-row class="m-2">
        <b-col-5 class="m-2">
          <button type="button" class="btn btn-primary btn-lg btn-block" v-on:click="output">Save</button>
        </b-col-5>
        <b-col-5 class="m-2">
          <button type="button" class="btn btn-primary btn-lg btn-block">Cancel</button>
        </b-col-5>
      </b-row>
    </b-col>
  </b-row>
</div>
</template>

<script>
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import xeConnectorApiService from '@/api-services/xeConnectorApiService';
import Cookies from 'js-cookie';

export default {
  name: 'Settings',
  components: {
    NavBar,
    SideBar,
  },
  data() {
    return {
      current_settings: {
        Name: 'null name',
        Company: 'null company',
        Country: 'null Country',
        Email: 'null Email',
      },
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
    xeConnectorApiService.getSettings({ session_id: Cookies.get('name') }).then((response) => {
      this.current_settings.Name = response.body.current_settings.Name;
      this.current_settings.Company = response.body.current_settings.Company;
      this.current_settings.Country = response.body.current_settings.Country;
      this.current_settings.Email = response.body.current_settings.Email;
    }).catch((error) => {
      // eslint-disable-next-line
      console.log(error);
    });
  },
  methods: {
    output(event) {
      const changePssswordRequest = {
        session_id: Cookies.get('name'),
        old_passwords: this.newpasswords_outputs.Old,
        new_passwords: this.newpasswords_outputs.Old,
      };

      if (event) {
        xeConnectorApiService.userUpdateSettings(this.form_outputs).then((response) => {
          // eslint-disable-next-line
          console.log(response);
          this.$router.go();
        }).catch((error) => {
          // eslint-disable-next-line
          console.log(error); 
        });

        if (this.newpasswords_outputs.New === this.newpasswords_outputs.Confirm &&
        this.newpasswords_outputs.New !== this.newpasswords_outputs.Old) {
          xeConnectorApiService.userChangePassword(changePssswordRequest).then((response) => {
            // eslint-disable-next-line
            console.log(response);
          }).catch((error) => {
            // eslint-disable-next-line
            console.log(error); 
          });
        }
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
