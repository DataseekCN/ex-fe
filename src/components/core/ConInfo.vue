<template>
  <b-row>
    <b-row v-for="info in data"
      :key="info.connection_id"
      class="conn-group">

      <my-card :imgUrl="2"
        :title="Etsy"
        :subTitle="info.etsy_shopname"
        :lastTime="info.last_connected"
        :status="info.status"
        class="col-4"></my-card>
      <div class="line"
        style="display:block">
        <div>
          <i class="fa fa-long-arrow-right fa-3x"></i>
          <i class="fa fa-check-circle fa-3x"
            style="color:green"></i>
          <i class="fa fa-long-arrow-right fa-3x"></i>
        </div>
        <div style="margin-top:50px;">
          <span> last successful sync:</span><br />
          <span> {{info.last_connected}}</span>
        </div>
      </div>
      <my-card :imgUrl="2"
        :title="Xero"
        :subTitle="info.xero_orgname"
        :lastTime="info.last_connected"
        :status="info.status"
        class="col-4"></my-card>
    </b-row>

    <b-row class="conn-group">
      <my-card :imgUrl="dataForm.imgUrl"
        :title="dataForm.title"
        :subTitle="dataForm.subTitle"
        :lastTime="dataForm.lastTime"
        :status="dataForm.status"
        class="col-4"></my-card>
      <div class="line"
        style="display:block">
        <div>
          <i class="fa fa-long-arrow-right fa-3x"></i>
          <button style="border:0px; backgroud:none; "
            @click="addConnection()">
            <i class="fa fa-plus-circle fa-3x"
              style="color:gray"></i>
          </button>
          <i class="fa fa-long-arrow-right fa-3x"></i>
        </div>
        <div style="margin-top:50px;">
          <span> Add month account:</span><br />
          <span> {{dataForm.bill}}</span>
        </div>
      </div>
      <my-card :imgUrl="dataForm.imgUrl"
        :title="dataForm.title"
        :subTitle="dataForm.subTitle"
        :lastTime="dataForm.lastTime"
        :status="dataForm.status"
        class="col-4"></my-card>
    </b-row>

  </b-row>
</template>

<script>
import MyCard from './Card';

export default {
  name: 'ConInfo',
  components: {
    MyCard,
  },
  data() {
    return {
      dataForm: {
        imgUrl: 'http://www.baidu.com',
        title: 'Etsy',
        subTitle: 'shop02',
        lastTime: '08-04-2019',
        status: 'disconnected',
        bill: '+$10/month',
      },
    };
  },
  // parent component transfer params
  props: {
    // the information between  Etsy and  Xero
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    connectShop(id) {
      const shopId = id;
      this.$router.push({ name: '/', params: { shopId } });
    },
    connectTax(id) {
      const taxId = id;
      this.$router.push({ name: '/', params: { taxId } });
    },
    addConnection() {
      this.$router.push({ name: 'Setup' });
    },
  },
  // mounted: {},
};
</script>
<style scoped>
.conn-group {
  /* display: table; */
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  margin: 0 auto;
}
.conn-group div {
  vertical-align: middle;
}
.shop {
  float: left;
}
.line {
  width: 20%;
  max-width: 30%;
  height: 400px;
  float: left;
  margin: 50px 10px 10px 10px;
  text-align: center;
  position: relative;
}
.line div {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>