<template>
<div>
  <b-row>
    <b-col>
      <NavBar/>
    </b-col>
  </b-row>
  <b-row>
    <b-col class="col-3">
      <SideBar/>
    </b-col>
    <b-col class="col-9">
      <b-row>
        <b-container id="shop-name-input" fluid>
          <b-row>
            <b-col>
              <label for="input-small">Shop Name:</label>
            </b-col>
            <b-col>
              <b-form-input
              id="input-small"
              size="sm"
              type="text"
              v-model="form.inputShopName"
              placeholder="No Spaces..."></b-form-input>
            </b-col>
             <b-col>
              <b-button id="check-btn" v-on:click="checkShop">Get Shop Details</b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-row>
      <b-row> 
        <b-table id="shop-info-table" striped hover :items="items" :busy="isBusy">
          <div slot="table-busy" class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
          </div>
        </b-table>
      </b-row>
    </b-col>
  </b-row>
</div>
</template>

<script>
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import EtsyApiService from '@/api-services/EtsyApiService';


export default {
  name: 'Dashboard',
  components: {
    NavBar,
    SideBar,
  },
  created() {
  },
  data() {
    return {
      isBusy: false,
      form: {
        inputShopName: '',
      },
      items: [
        { shop_name: '-', shop_id: '-', user_id: '-' },
      ],
    };
  },
  methods: {
    checkShop(event) {
      if (event) {
        this.isBusy = true;
        EtsyApiService.getShop(this.form.inputShopName).then((response) => {
          // eslint-disable-next-line
          console.log(response.data);
          this.items[0].shop_name = response.data.results[0].shop_name;
          this.items[0].shop_id = response.data.results[0].shop_id.toString();
          this.items[0].user_id = response.data.results[0].user_id.toString();
          this.isBusy = false;
        }).catch((error) => {
          // eslint-disable-next-line
          console.log(error.response);
          this.isBusy = false;
        });
      }
    },
  },
};
</script>

<style>
.table, #shop-name-input {
  margin: 30px 30px 30px 30px;
}
</style>