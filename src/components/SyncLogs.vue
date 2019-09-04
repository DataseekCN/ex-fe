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
        style="margin-left:100px; margin-top:50px; text-align:center">
        <div class="col-10 logs"
          v-for=" info in infos"
          v-bind:key="info.id">
          <log :data="info"></log>
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
    };
  },
};
</script>
<style scoped>
.logs {
  width: 70%;
}
</style>