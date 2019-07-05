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
  },
};
</script>

<style>
.table, #shop-name-input {
  margin: 30px 30px 30px 30px;
}
</style>