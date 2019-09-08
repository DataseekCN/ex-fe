<template>
  <div id="log"
    class="log">
    <!-- operation  bar-->
    <div id="operation"
      class="operation">
      <!-- shop connect xero -->
      <div id="connection"
        class="connection">
        <div class="shop-name text-display">
          <img src="" />
          {{data.shop_name}}
        </div>
        <div class="arrow"><i class="fa fa-long-arrow-right fa-3x"></i></div>
        <div class="xero-name text-display">
          <img src="" />
          {{data.xero_name}}
        </div>
      </div>
      <!-- time selection -->
      <div id="date-select"
        class="date-select">
        <date-picker v-model="date01"
          :config="options"></date-picker>
        <div style="width:10px"></div>
        <date-picker v-model="date02"
          :config="options"></date-picker>
      </div>
      <div style="float:right">
        <button id="show-btn"
          class="show-btn"
          @click="show">show</button>
      </div>
    </div>
    <!-- sync log details -->
    <div id="log-table"
      class="log-table">
      <b-table id="shop-info-table"
        style="z-index:-1;"
        hover
        small
        responsive
        :items="data.items"
        :busy="data.isBusy">
        <div slot="table-busy"
          class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </b-table>
      <!-- connect error logs -->
      <error-log :data="logs"
        :isDisplay="isDisplay"></error-log>
    </div>

  </div>
</template>

<script>
// Import this component
import datePicker from 'vue-bootstrap-datetimepicker';
import ErrorLog from '@/components/core/ErrorLog';

export default {
  name: 'Log',
  components: {
    datePicker,
    ErrorLog,
  },
  data() {
    return {
      connectionId: '',
      date01: new Date(),
      date02: new Date(),
      options: {
        format: 'DD/MM/YYYY',
        useCurrent: false,
      },
      isDisplay: false,
      logs: [{ id: 1, text: ' 错误日志01' }, { id: 2, text: '错误日志02' }],
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    errors: {
      type: Array,
      required: false,
    },
  },
  methods: {
    init() {
      if (this.errors !== undefined && this.errors.length > 0) {
        // eslint-disable-next-line no-console
        console.log(`errors 长度为 :${this.errors.length}`);
        this.isDisplay = true;
        this.logs = this.errors;
      }
      if (this.data !== undefined && this.data.length > 0) {
        this.connectionId = this.data.get('connection_id');
      }
    },
    show() {
      this.$emit('show', {
        connectionId: this.connectionId,
        fromDate: this.date01,
        toDate: this.date02,
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style scoped>
.log {
  width: 100%;
  z-index: -1;
  margin: 20px 0px 10px 20px;
  display: inline-block;
  background-color: lightgray;
}
.operation {
  width: 100%;
  float: left;
  margin: 10px 0px 10px 0px;
  display: inline-flex;
}
.connection {
  display: inline-flex;
  margin-left: 20px;
  margin-bottom: 10px;
  width: 50%;
}
.date-select {
  margin-left: 20px;
  width: 30%;
  display: inline-flex;
}

.show-btn {
  background-color: lightgray;
  margin-top: 5px;
  margin-left: 12px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: antiquewhite;
}

.text-display {
  text-align: center;
  font-size: 150%;
  font-weight: bold;
  margin: 0px 10px 0px 10px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: bisque;
}

.log-table {
  width: 90%;
  position: relative;
  z-index: 1;
  margin: 80px 20px 20px 20px;
  background-color: aliceblue;
}
</style>