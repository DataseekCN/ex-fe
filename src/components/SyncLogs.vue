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
        <div class="col-12 logs"
          v-for=" log in logs"
          v-bind:key="log.id">
          <log :data="log"
            :errors="errors"
            @show="query"></log>
        </div>
      </div>
    </b-row>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import Log from '@/components/core/Log';
import Cookies from 'js-cookie';
import xeConnectorApiService from '@/api-services/xeConnectorApiService';

export default {
  name: 'SyncLogs',
  components: {
    NavBar,
    SideBar,
    Log,
  },
  data() {
    return {
      logs: [
        {
          id: '01',
          shop_name: 'shop01',
          xero_name: 'xero01',
          items: [
            {
              Title: '-',
              Description: '-',
              SKU: '-',
              Transaction: '-',
              'Xero Invoke ID': '-',
              'Sync Status': '-',
              'Sync Time': '-',
              Total: '-',
            },
          ],
          isBusy: false,
        },
        {
          id: '02',
          shop_name: 'shop01',
          xero_name: 'xero01',
          items: [
            {
              Title: '-',
              Description: '-',
              SKU: '-',
              Transaction: '-',
              'Xero Invoke ID': '-',
              'Sync Status': '-',
              'Sync Time': '-',
              Total: '-',
            },
          ],
          isBusy: false,
        },
      ],
      errors: [{ id: 1, text: '错误日志01' }, { id: 2, text: '错误日志02' }],
      connections: [],
      sessionId: '',
    };
  },
  methods: {
    query(data) {
      if (data !== null) {
        this.getSyncLog(data.connectionId, data.fromDate, data.toDate);
      }
    },
    getAllConnections() {
      const sessionId = Cookies.get('session_id');
      this.sessionId = sessionId;
      xeConnectorApiService.getAllConnections(sessionId).then((response) => {
        if (response.status === '200') {
          this.connections = response.connections;
        }
      });
    },

    getRecentFive() {
      if (this.connections.length > 0) {
        const conns = this.connections;
        conns.forEach((item) => {
          const connId = item.get('connection_id');
          xeConnectorApiService
            .recentFive(this.sessionId, connId)
            .then((response) => {
              if (response.status === '200') {
                this.logs = response.last_five_sync;
              }
            });
        });
      }
    },

    getSyncLog(connectionId, fromDate, toDate) {
      xeConnectorApiService
        .syncLog(this.sessionId, connectionId, fromDate, toDate)
        .then((response) => {
          if (response.status === '200') {
            this.logs = response.log;
          }
        });
    },
  },
  mounted() {
    this.getAllConnections();
    this.getRecentFive();
  },
};
</script>
<style scoped>
.logs {
  width: 90%;
}
</style>