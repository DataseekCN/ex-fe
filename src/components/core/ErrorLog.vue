<template>
  <div id="error-log"
    class="error-log"
    v-if="isDisplay">
    <div style="width:60%;  text-align:left;">
      <span style="margin-left:20px;">Error</span>
      <ul class="log-detail"
        style="list-style:none;">
        <li v-for="log in data"
          v-bind:key="log.id">--{{log.text}}</li>
      </ul>
    </div>
    <div id="error-btn"
      class="error-btn">
      <tr />
      <button class="btn btn-warning btn-sm"
        v-on:click="detail()">详情</button>
      <tr />
      <button class="btn btn-success btn-sm"
        v-on:click="quit()">确定</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ErrorLog',
  data() {
    return {};
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    isDisplay: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    detail() {},
    quit() {
      this.isDisplay = false;
    },
  },
};
</script>
<style scoped>
.error-log {
  width: 30%;
  z-index: 1;
  float: right;
  margin-top: -50px;
  display: inline-flex;
  background-color: gainsboro;
  filter: alpha(Opacity=70);
  -moz-opacity: 0.7;
  opacity: 0.7;
}
.error-btn {
  width: 30%;
  /* float: right; */
  margin: 20px 10px 10px 10px;
}

.error-btn button {
  margin: 5px 0px 10px 0px;
}
</style>