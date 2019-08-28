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
      <b-col class="col-10"
        style="margin-left:50px; text-align:center">
        <con-info :data="connections"></con-info>

      </b-col>
    </b-row>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import conInfo from '@/components/core/ConInfo';
import Cookies from 'js-cookie';
import xeConnectorApiService from '@/api-services/xeConnectorApiService';

export default {
  name: 'connctions',
  components: {
    NavBar,
    SideBar,
    conInfo,
  },
  data() {
    return {
      // connection group information
      connections: [
        {
          connection_id: 'uuid',
          etsy_shopname: 'devshop',
          xero_orgname: 'demo company',
          status: 'connected',
          last_connected: '08-04-2019',
        },
        {
          connection_id: 'uuid',
          etsy_shopname: 'devshop',
          xero_orgname: 'demo company',
          status: 'connected',
          last_connected: '08-04-2019',
        },
      ],
    };
  },
  methods: {
    getAllConnections() {
      const sessionId = Cookies.get('session_id');
      xeConnectorApiService.getAllConnections(sessionId).then((response) => {
        if (response.status === '200') {
          this.connections = response.connections;
        }
      });
    },
  },
  mounted: {},
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
