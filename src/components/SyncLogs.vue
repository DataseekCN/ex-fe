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
          v-for=" info in infos"
          v-bind:key="info.id">
          <log :data="info"
            :errors="errors"></log>
        </div>
      </div>
    </b-row>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import Log from '@/components/core/Log';

export default {
  name: 'SyncLogs',
  components: {
    NavBar,
    SideBar,
    Log,
  },
  data() {
    return {
      infos: [
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
    };
  },
};
</script>
<style scoped>
.logs {
  width: 90%;
}
</style>