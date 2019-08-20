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
    <b-col class="col-10">
      <b-row style="margin:10px;">
        <b-container  fluid>
          <b-row id="shop-name-search">
            <b-col style="margin-bottom:10px">
              <b-form-input
              id="input-small"
              size="sm"
              type="text"
              v-model="form.inputShopName"
              placeholder="shop name"></b-form-input>
            </b-col>
             <b-col>
               <button type="button" class="btn  btn-sm btn-block">shop details</button>
            </b-col>
          </b-row>
        </b-container>
      </b-row>
      <b-row  class="lists"> 
        <b-col class="col-11 shop-lists" >
          <!-- user reports tax lists-->
          <div class="shop-table" v-for="shop in shop_lists" v-bind:key="shop.id">
            <!-- connecting relation-->
            <div class="shop-connection">
              <div class="shop-name text-display">{{shop.shop_name}}</div>
              <div class="arrow"><i class="fa fa-long-arrow-right fa-3x" ></i></div>
              <div class="xero-name text-display">{{shop.xero_name}}</div>
            </div>
            <!-- single shop tax list -->
            <div id="content">
              <div class="table-block">
                <b-table id="shop-info-table" striped small responsive	 :items="items" :busy="isBusy">
                  <div slot="table-busy" class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                  </div>
                </b-table>
              </div>
              <!-- Sync Summary -->
              <div id="sync-summary">
                  <span>Sync Summary</span>
                  <ul class="summarys">
                    <li class="s-detial" v-for="summary in summarys" v-bind:key="summary.id">
                      <div class="s-msg">{{summary.name}}</div>
                      <button  class="s-msg-num" >32</button>
                    </li>
                  </ul>
              </div>
            </div>
           
          </div>
      
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
  name: 'Dashboard',
  components: {
    NavBar,
    SideBar,
  },
  created() {
  },
  data() {
    return {
      shop_lists: [
        { id: 1, shop_name: 'shop01', xero_name: 'xero1' },
        { id: 2, shop_name: 'shop02', xero_name: 'xero2' },
      ],
      summarys: [
        { id: 1, name: '派大星' },
        { id: 2, name: '章鱼哥' },
      ],
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
*{ margin:0; padding:0; }
.table, #shop-name-input {
  margin: 10px 30px 30px 30px;
}

#shop-name-search {
  /* background-color:lightblue; */
  margin:3px 0px 2px 0px;
  height: 50px;
 
}
.btn {
  text-align: center;
  background-color: gainsboro;
}
#shop_detail_label{
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  text-size-adjust: auto;
  font-weight: 100;
}
.row .lists{
  margin-top: 50px;
  margin-left: 10px;
}

.shop-table{
  width: 100%;
  background-color:lightgray;
  margin-bottom: 20px;
  border-radius: 5px;
}
.shop-connection{
  width: 80%;
  height: 80px;
  padding-top: 12px;
  margin: 30px 0px 10px 0px;
}

.shop-name{
  width: 20%;
  height: 50px;
  float: left;
  margin: 2px 0px 0px 20px;
  border: 3px solid black;
  background-color: lightyellow;
  border-radius: 5px;
}
.arrow{
  float: left;
  margin:2px 0px 0px 12px;
  width: 100px;
}
.xero-name{
  width: 20%;
  float: left;
  height: 50px;
  margin: 2px 0px 0px 10px;
  border: 3px solid black;
  background-color: lightyellow;
  border-radius: 5px;
}

.table-block{
  width: 60%;
  background-color: white;
  margin-right: 20px;
}

#shop-info-table{
  width: 98%;
  margin: 1px 5px 1px 5px;
}

#content {
  display: inline-flex;
  width: 95%;
  margin-bottom: 10px;
}

#sync-summary{
  width: 38%;
}
.summarys{
  background-color: white;
  list-style-type: none;
  margin-left: 0px;
  width: 100%;
}
.summarys .s-detial{
  height: 40px;
  text-align: left;
  margin-top: 1px;
  background-color: antiquewhite;
}
.s-msg{
  float: left;
  margin:8px 0px 0px 4px;
  
}
.s-msg-num{
  float: right;
  margin:8px 6px 0px 0px;
  font-size: 2px;
  font-weight: 200;
  color: aliceblue;
  background-color:cadetblue;
  border:none;
  border-radius: 5px;
}

</style>