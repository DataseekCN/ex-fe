<template>
  <div id="card"
    class=""
    style="background:data.back_img">
    <img id="logo"
      src="imgUrl" />
    <div>
      <span id="title">{{title}}</span>
    </div>
    <div id="sub_title"><span>{{subTitle}}</span></div>
    <div id="text">
      <span>Last connected:{{lastTime}}</span><br />
      <span>Status:{{status}}</span>
    </div>
    <div style="margin-bottom:20px">
      <i class="fa fa-plus-circle fa-2x"
        style="color:green"
        v-if="status=='connected'"></i>
      <i class="fa fa-times-circle fa-2x"
        style="color:red"
        v-if="status=='disconnected'"></i>
    </div>
    <button id="connect-btn"
      class="btn"
      v-on:click="connectTo(data.btnUrl, data.id)"><strong>connect</strong></button>
  </div>
</template>
<script>
export default {
  name: 'MyCard',
  data() {
    return {
      id: '',
    };
  },
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    lastTime: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  methods: {
    connectTo(url, id) {
      this.id = id;
      this.$router.push({ name: '', params: { id } });
    },
  },
};
</script>
<style scoped>
#card {
  margin: 50px 10px 20px 10px;
  padding-top: 20px;
  width: 200px;
  height: 400px;
  text-align: center;
  display: table;
  background-color: floralwhite;
  border: 2px solid black;
}
#logo {
  margin: 10px 5px 20px 5px;
  width: 100px;
  height: 100px;
}
#title {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  height: 20%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
#sub_title {
  height: 10%;
  text-align: center !important;
}

#text {
  height: 15%;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.btn {
  height: 10%;
  background-color: darkseagreen;
}
</style>