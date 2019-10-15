<template>
  <div>
    <b-row>
      <b-col>
        <NavBar />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="col-auto">
        <SideBar />
      </b-col>
      <b-col class="col-10">
        <b-row style="margin:10px;">
          <b-container fluid>
            <b-row id="shop-name-search">
              <b-col style="margin-bottom:10px">
                <b-form-input id="input-small"
                  size="sm"
                  type="text"
                  v-model="form.inputShopName"
                  placeholder="shop name"></b-form-input>
              </b-col>
              <b-col>
                <button type="button"
                  class="btn  btn-sm btn-block">shop details</button>
              </b-col>
            </b-row>
          </b-container>
        </b-row>
        <b-row class="lists">
          <b-col class="col-11 shop-lists"
            style="margin-left:60px">
            <!-- user reports tax lists-->
            <div class="shop-table"
              v-for="info in shop_lists"
              v-bind:key="info.id">
              <!-- connecting relation-->
              <table-card :shop="info.conn"
                :summarys="info.summaryInfo"
                :items="info.logs"
                :isBusy="isBusy"></table-card>
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
import TableCard from '@/components/core/TableCard';
import Cookies from 'js-cookie';
import xeConnectorApiService from '@/api-services/xeConnectorApiService';

export default {
  name: 'Dashboard',
  components: {
    NavBar,
    SideBar,
    TableCard,
  },
  created() {},
  data() {
    return {
      shop_lists: [
        {
          conn: {
            connection_id: 1,
            etsy_shopname: 'shop01',
            xero_orgname: 'xero01',
          },
          logs: [
            {
              sync_id: '1',
              title: 'Dark Floral',
              desc: 'Pring of Dark Floral',
              sku: 'DF-001',
              transaction_id: '123456677',
              xero_inv_id: '1111-2222-3333-4444-55555',
              sync_status: 'success',
              sync_time: '12/08/2019T12:00',
              total: '123.00',
            },
            {
              sync_id: '2',
              title: 'Dark Floral',
              desc: 'Pring of Dark Floral',
              sku: 'DF-001',
              transaction_id: '123456677',
              xero_inv_id: '1111-2222-3333-4444-55555',
              sync_status: 'success',
              sync_time: '12/08/2019T12:00',
              total: '123.00',
            },
          ],
          summaryInfo: [
            { id: 1, name: 'total_transactions_amount', num: 233231 },
            { id: 2, name: 'total_transactions_number', num: 87 },
            { id: 3, name: 'total_fees_amount', num: 6890 },
            { id: 4, name: 'total_fees_number', num: 77 },
          ],
        },
      ],
      connections: [],
      form: {
        inputShopName: '',
      },
      isBusy: false,
      sessionId: '',
    };
  },
  methods: {
    init() {
      this.sessionId = Cookies.get('session_id');
    },

    getAllConnections() {
      debugger;
      xeConnectorApiService.getAllConnection(this.sessionId).then((response) => {
        if (response.status === '200') {
          this.connections = response.connections;
        }
      });
    },

    getRecentFive() {
      debugger;
      let connection = null;
      let details = null;
      let summary = null;
      if (this.connections.length > 0) {
        const conns = this.connections;
        conns.forEach((item) => {
          const connId = item.get('connection_id');

          xeConnectorApiService
            .recentFive(this.sessionId, connId)
            .then((response) => {
              if (response.status === '200') {
                // TODO assembly data
                connection = item;
                details = response.last_five_sync;
              }
            });

          xeConnectorApiService
            .summary(this.sessionId, connId)
            .then((response) => {
              if (response.status === '200') {
                const tta = response.total_transactions_amount;
                const ttn = response.total_transactions_number;
                const tfa = response.total_fees_amount;
                const tfn = response.total_fees_number;
                summary = [
                  { id: 1, name: 'total_transactions_amount', num: tta },
                  { id: 2, name: 'total_transactions_number', num: ttn },
                  { id: 3, name: 'total_fees_amount', num: tfa },
                  { id: 4, name: 'total_fees_number', num: tfn },
                ];
              }
            });
          const array = {
            conn: connection,
            logs: details,
            summaryInfo: summary,
          };
          this.shop_lists.push(array);
        });
      }
    },
  },
  mounted() {
    this.init();
    this.getAllConnections();
    this.getRecentFive();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.table,
#shop-name-input {
  margin: 10px 30px 30px 30px;
}

#shop-name-search {
  /* background-color:lightblue; */
  margin: 3px 0px 2px 0px;
  height: 50px;
}
.btn {
  text-align: center;
  background-color: gainsboro;
}
#shop_detail_label {
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  text-size-adjust: auto;
  font-weight: 100;
}
.row .lists {
  margin-top: 50px;
  margin-left: 10px;
}

.shop-table {
  width: 100%;
  background-color: lightgray;
  margin-bottom: 20px;
  border-radius: 5px;
}
.shop-connection {
  width: 80%;
  height: 80px;
  padding-top: 12px;
  margin: 30px 0px 10px 0px;
}

.shop-name {
  width: 20%;
  height: 50px;
  float: left;
  margin: 2px 0px 0px 20px;
  border: 3px solid black;
  background-color: lightyellow;
  border-radius: 5px;
}
.arrow {
  float: left;
  margin: 2px 0px 0px 12px;
  width: 100px;
}
.xero-name {
  width: 20%;
  float: left;
  height: 50px;
  margin: 2px 0px 0px 10px;
  border: 3px solid black;
  background-color: lightyellow;
  border-radius: 5px;
}
.text-display {
  text-align: center;
  font-size: 150%;
  font-weight: bold;
}
.table-block {
  width: 80%;
  background-color: white;
  margin-right: 20px;
}

#shop-info-table {
  width: 98%;
  margin: 1px 5px 1px 5px;
}

#content {
  display: inline-flex;
  width: 95%;
  margin-bottom: 10px;
}

#sync-summary {
  width: 38%;
}
.summarys {
  background-color: white;
  list-style-type: none;
  margin-left: 0px;
  width: 100%;
}
.summarys .s-detial {
  height: 40px;
  text-align: left;
  margin-top: 1px;
  background-color: antiquewhite;
}
.s-msg {
  float: left;
  margin: 8px 0px 0px 4px;
}
.s-msg-num {
  float: right;
  margin: 8px 6px 0px 0px;
  font-size: 2px;
  font-weight: 200;
  color: aliceblue;
  background-color: cadetblue;
  border: none;
  border-radius: 5px;
}
</style>