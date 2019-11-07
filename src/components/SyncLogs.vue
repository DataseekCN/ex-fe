<template>
  <div>
    <b-row>
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
import Log from '@/components/core/Log';
import Cookies from 'js-cookie';
import xeConnectorApiService from '@/api-services/xeConnectorApiService';

export default {
  name: 'SyncLogs',
  components: {
    Log,
  },
  data() {
    return {
      logs: [
        {
          id: '01',
          conn: {
            connection_id: 'uuid',
            etsy_shopname: 'devshop',
            xero_orgname: 'demo company',
            status: 'connected',
            last_connected: '08-04-2019',
          },
          items: [
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
          isBusy: false,
        },
        {
          id: '02',
          conn: {
            connection_id: 'uuid',
            etsy_shopname: 'devshop',
            xero_orgname: 'demo company',
            status: 'connected',
            last_connected: '08-04-2019',
          },
          items: [
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
      let index = 0;
      if (this.connections.length > 0) {
        const conns = this.connections;
        conns.forEach((item) => {
          const connId = item.get('connection_id');
          xeConnectorApiService
            .recentFive(this.sessionId, connId)
            .then((response) => {
              if (response.status === '200') {
                this.logs = response.last_five_sync;
                const log = {
                  id: (index += 1),
                  conn: item,
                  items: response.last_five_sync,
                  isBusy: false,
                };
                this.logs.push(log);
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