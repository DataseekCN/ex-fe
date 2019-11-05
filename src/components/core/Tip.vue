<template>
  <div class="col-3 tab">
    <ul class="c">
      <li>
        <h3 style="text-align:center;">{{title}}</h3>
        <div class="context">
          <p>{{syncTime}}</p>
          <p>{{text}}</p>
          <p>{{price}}</p>
        </div>
      </li>
    </ul>
    <div class="btn"
      v-if="isCurrent">
      CurrentPlan
    </div>
    <div class="btn"
      v-else>
      <button>Upgrade</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tip',
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    syncTime: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    isCurrent: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<style scoped>
.tab {
  background-color: lightgray;
  width: 400px;
}
.c {
  list-style: none;
  float: left;
  margin: 10px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  text-align: left;
}
.context {
  width: 200px;
}
.c li {
  white-space: pre-wrap;
}
.btn {
  margin: 10px 0px 10px 45px;
  text-align: center;
}
</style>