<template>
<div>
  <b-row>
    <b-col>
      <NavBar/>
    </b-col>
  </b-row>
  <b-row>
    <b-col class="col-auto">
      <SideBar/>
    </b-col>
    <b-col class="col-9">
      <b-row>
        <b-card
          title="Your App"
          img-src="data:image/png;base64,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"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 14rem;"
          class="mb-2"
        >
          <b-card-text>
            Sign in to your XX account and authorise XX for transaction data. 
          </b-card-text>

          <b-button href="https://www.etsy.com/" variant="primary">Connect to XX</b-button>
        </b-card>

        <b-card
          title="Card Title"
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg2tEixwrOO2NoK4ke7LnOK5YUVWGPjEcgRT9TLmY2sSZqIdU"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 14rem;"
          class="mb-2"
        >
          <b-card-text>
            Sign in to Xero and authorise XX for creating contacts, items and invoices. 
          </b-card-text>

          <b-button href="https://go.xero.com" variant="primary">Connect to Xero</b-button>
        </b-card>
      </b-row>

    </b-col>
  </b-row>
</div>
</template>

<script>
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';

export default {
  name: 'Connections',
  components: {
    NavBar,
    SideBar,
  },
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.card {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
}
</style>
