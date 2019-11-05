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
      <div class="col-10"
        style="margin-left:50px; margin-top:20px; text-align:center">
        <div class="col-12 package">
          <div class="col-3 p"
            v-for="info in packages"
            v-bind:key="info.id">
            <tip :title="info.title"
              :syncTime="info.syncDate"
              :text="info.text"
              :price="info.price"
              :isCurrent="info.isSubsc"></tip>
          </div>
        </div>
        <div class="col-12  backup">
          <div class="col-5 backup-tab">
            <div class="col-8 ">
              <div class="row">
                <h4>Backup rolling data of 1 year</h4>
              </div>
              <div class="row">
                <p style="margin-top:15px;">$10/year</p>
                <button class="btn ">Addon</button>
              </div>
            </div>
          </div>
          <div class="col-5 backup-tab">
            <div class="col-8"
              style="float:right;">
              <div class="row">
                <h4>Backup rolling data of 1 year</h4>
              </div>
              <div class="row">
                <p style="margin-top:15px;">$10/year</p>
                <button class="btn ">Addon</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 tabs">
          <div class="tab col-10">
            <b-table id="table "
              bordered
              small
              responsive
              :items="comingBills"
              :busy="isBusy">
              <div slot="table-busy"
                class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
            </b-table>
          </div>
          <div class="tab col-10">
            <b-table id="table table-bordered"
              bordered
              small
              responsive
              :items="pastBills"
              :busy="isBusy">
              <div slot="table-busy"
                class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
            </b-table>
          </div>
        </div>

      </div>
    </b-row>

  </div>
</template>
<script>
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import Tip from '@/components/core/Tip';
import Cookies from 'js-cookie';
import xeConnectorApiService from '@/api-services/xeConnectorApiService';

export default {
  name: 'Subscription',
  components: {
    NavBar,
    SideBar,
    Tip,
    xeConnectorApiService,
  },
  data() {
    return {
      sessionId: '',
      packages: [
        {
          id: '1',
          title: 'Lite',
          syncDate: 'sync daily',
          text: 'unlimited transactions unlimited items',
          price: '$5/month',
          isSubsc: true,
        },
        {
          id: '2',
          title: 'Business',
          syncDate: 'sync every 10 mins',
          text: 'unlimited transactions unlimited items',
          price: '$10/month',
          isSubsc: false,
        },
        {
          id: '3',
          title: 'Longterm',
          syncDate: 'syncs every 10 mins',
          text: 'unlimited transactions unlimited items',
          price: '$90/year',
          isSubsc: false,
        },
      ],
      comingBills: [
        {
          Description: '-',
          Period: '-',
          Amount: '-',
          'Due Date': '',
          Status: '',
          Action: '-',
        },
      ],
      pastBills: [
        {
          Description: '-',
          Period: '-',
          Amount: '-',
          'Due Date': '',
          Status: '',
          Action: '-',
        },
      ],
      isBusy: false,
    };
  },
  methods: {
    init() {
      this.sessionId = Cookies.get('session_id');
    },
    getBills() {
      xeConnectorApiService.showBills(this.sessionId).then((response) => {
        if (response.Status === '200') {
          this.comingBills = response.future_bills;
          this.pastBills = response.past_bills;
        }
      });
    },
  },
  mounted() {
    this.init();
    this.getBills();
  },
};
</script>
<style scoped>
.package {
  display: inline-flex;
}
.p {
  background-color: lightgray;
  margin: 10px 20px 10px 20px;
}
.backup {
  display: inline-flex;
  margin: 0px 0px 20px 0px;
}
.backup-tab {
  margin: 10px 0px 10px 0px;
}
.backup-tab div {
  text-align: center;
  background-color: lightgray;
  margin: 10px 10px 10px 0px;
  padding: 10px 0px 10px 0px;
}
.backup-tab .row {
  margin-left: 50px;
}
.backup-tab button {
  float: right;
  margin-left: 120px;
  background-color: cadetblue;
}
.tabs {
  margin-top: 20px;
}
b-table {
  /* margin: 30px 50px 30px 30px; */
  border: 1px solid black;
}
</style>