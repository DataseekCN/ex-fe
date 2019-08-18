<template>
  <div id="nav-tab-card" class="tab-pane fade show active">
    <p class="alert alert-success" v-if="paymentStatus === 'success'">Payment was successful, please click next to continue.</p>
    <p class="alert alert-success" v-if="paymentStatus === 'failed'">Payment failed, please enter your details and try again.</p>
    <form role="form" v-if="paymentStatus !== 'success'">
      <div class="form-group">
        <label for="username">Full name (on the card)</label>
        <input type="text" name="username" placeholder="Jason Doe" required class="form-control" v-model="card.ccName">
      </div>
      <div class="form-group">
        <label for="cardNumber">Card number</label>
        <div class="input-group">
          <input type="text" name="cardNumber" placeholder="Your card number" class="form-control" required v-model="card.ccCard">
          <div class="input-group-append">
            <span class="input-group-text text-muted">
                <i class="fa fa-cc-visa mx-1"></i>
                <i class="fa fa-cc-amex mx-1"></i>
                <i class="fa fa-cc-mastercard mx-1"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <div class="form-group">
            <label><span class="hidden-xs">Expiration</span></label>
            <div class="input-group">
              <input type="text" placeholder="MM/YY" name="" class="form-control" required v-model="card.ccExpDate">
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group mb-4">
            <label data-toggle="tooltip" title="Three-digits code on the back of your card">CSV
                <i class="fa fa-question-circle"></i>
            </label>
            <input type="text" required class="form-control" v-model="card.ccCSV">
          </div>
        </div>
      </div>
      <button type="button" class="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> Confirm  </button>
    </form>
  </div>
</template>

<script>
import xeConnectorApiService from '@/api-services/xeConnectorApiService';

export default {
  components: {
  },
  name: 'CcPayments',
  data() {
    return {
      card: {
        ccName: '',
        ccEmail: '',
        ccCard: '',
        ccExpDate: '',
        ccCSV: '',
        amount: 0,
      },
      paymentStatus: null,
    };
  },
  method: {
    makePayment(event) {
      if (event) {
        xeConnectorApiService.makePayment(this.card).then((response) => {
          // eslint-disable-next-line
          console.log(response.data);
        }).catch((error) => {
          // eslint-disable-next-line
          console.log(error.response);
        });
      }
    },
  },
};
</script>