<template>
  <div class="shop-table">
    <!-- connecting relation-->
    <div class="shop-connection">
      <div class="shop-name text-display">
        <img src="" />
        {{shop.shop_name}}
      </div>
      <div class="arrow"><i class="fa fa-long-arrow-right fa-3x"></i></div>
      <div class="xero-name text-display">
        <img src="" />
        {{shop.xero_name}}</div>
    </div>
    <!-- single shop tax list -->
    <div id="content">
      <div class="table-block">
        <b-table id="shop-info-table"
          striped
          small
          responsive
          :items="items"
          :busy="isBusy">
          <div slot="table-busy"
            class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
          </div>
        </b-table>
      </div>
      <!-- Sync Summary -->
      <div id="sync-summary">
        <span>Sync Summary</span>
        <ul class="summarys">
          <li class="s-detial"
            v-for="summary in summarys"
            v-bind:key="summary.id">
            <div class="s-msg">{{summary.name}}</div>
            <button class="s-msg-num">32</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// import xeConnectorApiService from '@/api-services/xeConnectorApiService';

export default {
  name: 'TableCard',
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
      required: true,
    },
    summarys: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    isBusy: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<style scoped>
</style>