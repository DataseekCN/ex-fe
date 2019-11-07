<template>
  <div>
    <con-info :data="connections"></con-info>
  </div>
</template>

<script>
import conInfo from '@/components/core/ConInfo';
import Cookies from 'js-cookie';
import xeConnectorApiService from '@/api-services/xeConnectorApiService';

export default {
  name: 'connections',
  components: {
    conInfo,
  },
  data() {
    return {
      // connection group information
      connections: [
        {
          connection_id: 'id_121',
          etsy_shopname: 'devshop',
          xero_orgname: 'demo company',
          status: 'connected',
          last_connected: '08-04-2019',
        },
        {
          connection_id: 'id_122',
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
      debugger;
      const sessionId = Cookies.get('session_id');
      xeConnectorApiService.getAllConnections(sessionId).then((response) => {
        if (response.status === '200') {
          this.connections = response.connections;
        }
      });
    },
  },
  mounted() {
    this.getAllConnections();
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
