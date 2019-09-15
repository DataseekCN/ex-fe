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
      </div>
      <div class="col-10 row"
        style="margin-left:50px; margin-top:20px; text-align:center">
        <div class="col-5">
          <div>
            <div class="row">
              <p>Backup rolling data of 1 year</p>
            </div>
            <div class="row">
              <p>$10/year</p>
              <button class="btn ">Addon</button>
            </div>
          </div>
        </div>
        <div class="col-5">
          <div>
            <div class="row">
              <p>Backup rolling data of 1 year</p>
            </div>
            <div class="row">
              <p>$10/year</p>
              <button class="btn ">Addon</button>
            </div>
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

export default {
  name: 'Subscription',
  components: {
    NavBar,
    SideBar,
    Tip,
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
    };
  },
  methods: {
    init() {
      this.sessionId = Cookies.get('session_id');
    },
  },
  mounted() {},
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
</style>