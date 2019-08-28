<template>
  <div>
    <b-row>
      <b-col>
        <NavBar/>
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col>
        <div class="jumbotron">
          <div class="alert alert-danger" role="alert" v-if="submitFailed">
            {{ alertMessage }}
          </div>

          <div id="step1-connections" v-if="step === 1">
            <h1 class="display-3">Connnections</h1>
            <p class="lead">Connect your Etsy and Xero accounts to authorise EX Sync</p>
            <b-row class="justify-content-center">
              <b-col class="col-6 col-sm-5 col-xs-5">
                <div class="card text-left">
                  <div class="card-body">
                    <h4 class="card-title">Etsy Connection</h4>
                    <p class="card-text">Connect to your Etsy account and authorise EX Sync</p>
                    <button
                      type="button"
                      id="etsy-con-btn"
                      class="btn btn-primary"
                      btn-lg
                      btn-block
                      v-if="etsyConnection !== true"
                      v-on:click="etsyAuthRedirect"
                    >Connect to Etsy</button>
                    <button
                      type="button"
                      id="etsy-con-btn"
                      class="btn btn-success"
                      btn-lg
                      btn-block
                      v-if="etsyConnection === true"
                    >Connected</button>
                    <a class="text-success" v-if="etsyConnection === true">&#10004;</a>
                    <a class="text-danger" v-if="etsyConnection === false">&#10007;</a> 
                  </div>
                </div>
              </b-col>
              <b-col class="col-6 col-sm-5 col-xs-5">
                <div class="card text-left">
                  <div class="card-body">
                    <h4 class="card-title">Xero Connection</h4>
                    <p
                      class="card-text"
                    >Connect to your Xero account and authorise your organisation to EX Sync</p>
                    <button
                      type="button"
                      id="xero-con-btn"
                      class="btn btn-primary"
                      btn-lg
                      btn-block
                      v-if="xeroConnection !== true"
                    >Connect to Xero</button>
                    <button
                      type="button"
                      id="etsy-con-btn"
                      class="btn btn-success"
                      btn-lg
                      btn-block
                      v-if="xeroConnection === true"
                      href = "https://localhost:8080/"
                    >Connected</button>
                    <a v-bind:href="etsyAuthRedirectUri">redirect</a>
                    <a class="text-success" v-if="xeroConnection === true">&#10004;</a>
                    <a class="text-danger" v-if="xeroConnection === false">&#10007;</a>                  </div>
                </div>
              </b-col>
            </b-row>
          </div>

          <div id="step2-setup" v-if="step === 2">
            <h1 class="display-3">Setup</h1>
            <p class="lead"></p>
            <b-row class="justify-content-center">
              <b-col class="col-12">
                <b-row class="my-3">
                  <b-col class="col-3  text-right">
                  <label for="input-etsy-shopname">Etsy Shop Name: </label>
                  </b-col>
                  <b-col class="col-6">
                  <input type="text"
                  id="input-etsy-shopname"
                  class="form-control" 
                  placeholder="enter your Etsy shop name"
                  v-model="form.etsyShopName"
                  v-on:blur="checkShopName"
                  >
                  </b-col>
                  <b-col class="col-1">
                    <div class="text-success" v-if="shopNameValid === true">&#10004;</div>
                    <div class="text-danger" v-if="shopNameValid === false">&#10007;</div>
                  </b-col>
                </b-row>

                <b-row class="my-3">
                  <b-col class="col-3  text-right">
                  <label for="input-sync-from-date">Sync Data From: </label>
                  </b-col>
                  <b-col class="col-6">
                  <input type="date"
                  id="input-sync-from-date"
                  class="form-control" 
                  placeholder="enter the date you would like data to sync from e.g. begining of this financial year"
                  v-model="form.syncFromDate"
                  >
                  </b-col>
                  <b-col class="col-1">
                    <div class="text-success" v-if="form.syncFromDate !== ''">&#10004;</div>
                  </b-col>
                </b-row>

                <b-row class="my-3">
                  <b-col class="col-3 text-right">
                  <label for="checkbox-customerInfoHandle">Customer information:</label>
                  </b-col>
                  <b-col class="col-6 text-left">
                    <b-form-checkbox
                      id="checkbox-customerInfoHandle"
                      v-model="form.customerInfoHandle"
                      name="checkbox-customerInfoHandle"
                      value="true"
                      unchecked-value="false"
                    >
                      sync name, contact and addresss with Xero contacts.
                    </b-form-checkbox>
                  </b-col>
                  <b-col class="col-1">
                    <div class="text-success" v-if="form.customerInfoHandle !== null">&#10004;</div>
                  </b-col>
                </b-row>

                <!-- sales accounts -->
                <b-row class="my-3">
                  <b-col class="col-3 text-right">
                  <label for="select-xeroRevenueAccounts">Sales Account Mapping to Xero:</label>
                  </b-col>
                  <b-col class="col-6 text-left">
                    <b-form-select v-model="form.xeroRevenueAccount" :options="xeroRevenueAccounts"></b-form-select>
                  </b-col>
                </b-row>

                <!-- fees accounts -->
                <b-row class="my-3">
                  <b-col class="col-3 text-right">
                  <label for="select-xeroExpenseAccounts">Fees Account Mapping to Xero:</label>
                  </b-col>
                  <b-col class="col-6 text-left">
                    <b-form-select v-model="form.xeroExpenseAccount" :options="xeroExpenseAccounts"></b-form-select>
                  </b-col>
                </b-row>

                <!-- shipping accounts -->
                <b-row class="my-3">
                  <b-col class="col-3 text-right">
                  <label for="select-xeroShippingAccounts">Shipping Account Mapping to Xero:</label>
                  </b-col>
                  <b-col class="col-6 text-left">
                    <b-form-select v-model="form.xeroShippingAccount" :options="xeroShippingAccounts"></b-form-select>
                  </b-col>
                </b-row>

                <b-row class="my-3">
                  <b-col class="col-3 text-right">
                  <label for="checkbox-listingInfoHandle">Listing information:</label>
                  </b-col>
                  <b-col class="col-6 text-left">
                    <b-form-checkbox
                      id="checkbox-listingInfoHandle"
                      v-model="form.listingInfoHandle"
                      name="checkbox-listingInfoHandle"
                      value="true"
                      unchecked-value="false"
                    >
                      sync listing title, description and price with Xero items.
                    </b-form-checkbox>
                  </b-col>
                  <b-col class="col-1">
                    <div class="text-success" v-if="form.listingInfoHandle !== null">&#10004;</div>
                  </b-col>
                </b-row>

              </b-col>
            </b-row>
          </div>

          <div id="step3-subscription" v-if="step === 3">
            <h1 class="display-3">Subscription</h1>
            <p class="lead"></p>
            <b-row class="justify-content-center my-3">
              <b-col class="col-3">
                <div class="card text-center">
                  <div class="card-body">
                    <h4 class="card-title">Lite</h4>
                    <ul>
                      <li>
                        <p class="card-text text-left">sync daily</p>
                      </li>
                      <li>
                        <p class="card-text text-left">unlimited transacitons sync</p>
                      </li>
                      <li>
                        <p class="card-text text-left">unlimited customer sync</p>
                      </li>
                      <li>
                        <p class="card-text text-left">unlimited listing sync</p>
                      </li>
                    </ul>
                    <p>
                      $10 / month
                    </p>
                    <b-button href="#" variant="primary" v-on:click="subscriptionPlan = 'Business'">select</b-button>
                  </div>
                </div>
              </b-col>
              <b-col class="col-3">
                <div class="card text-center">
                  <div class="card-body">
                    <h4 class="card-title">Business</h4>
                    <ul>
                      <li>
                        <p class="card-text text-left">sync every 10 minutes</p>
                      </li>
                      <li>
                        <p class="card-text text-left">unlimited transacitons sync</p>
                      </li>
                      <li>
                        <p class="card-text text-left">unlimited customer sync</p>
                      </li>
                      <li>
                        <p class="card-text text-left">unlimited listing sync</p>
                      </li>
                    </ul>
                    <p>
                      $10 / month
                    </p>
                    <b-button href="#" variant="primary" v-on:click="subscriptionPlan = 'Lite'">select</b-button>
                  </div>
                </div>
              </b-col>
              <b-col class="col-3">
                <div class="card text-center">
                  <div class="card-body">
                    <h4 class="card-title">Longterm</h4>
                    <ul>
                      <li>
                        <p class="card-text text-left">sync every 10 minutes</p>
                      </li>
                      <li>
                        <p class="card-text text-left">unlimited transacitons sync</p>
                      </li>
                      <li>
                        <p class="card-text text-left">unlimited customer sync</p>
                      </li>
                      <li>
                        <p class="card-text text-left">unlimited listing sync</p>
                      </li>
                    </ul>
                    <p>
                      $99 / year
                    </p>
                    <b-button href="#" variant="primary" v-on:click="subscriptionPlan = 'Longterm'">select</b-button>
                  </div>
                </div>
              </b-col>
            </b-row>

            <b-row class="justify-content-center my-3">
              <b-col class="col-3">
                <div class="card text-center">
                  <div class="card-body">
                    <h4 class="card-title">Backup rolling data of 1 year</h4>
                    <p>
                      $10 / year
                    </p>
                    <b-button href="#" variant="primary" v-on:click="backupOption = '1'">select</b-button>
                  </div>
                </div>
              </b-col>
              <b-col class="col-3">
                <div class="card text-center">
                  <div class="card-body">
                    <h4 class="card-title">Backup rolling data of 7 years</h4>
                    <p>
                      $50 / year
                    </p>
                    <b-button href="#" variant="primary" v-on:click="backupOption = '7'">select</b-button>
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>

          <div id="step4-billing" v-if="step === 4">
            <h1 class="display-3">Billing</h1>
            <p class="lead"></p>
              <div class="container">
                <cc/>
              </div>
          </div>

          <div id="step5-complete" v-if="step === 5">
            <h1 class="display-3">Setup Completed</h1>
            <p class="lead">your sync will start shortly, you will be redirected to </p>
            <b-row class="justify-content-center">
              <b-col class="col-12">
                <b-button href="#" variant="success" v-on:click="submitSetupForm">Start data Sync</b-button>
              </b-col>
            </b-row>
          </div>

          <b-row class="my-3 justify-content-between">
            <b-col class="col-4">
              <button type="button" class="btn btn-secondary" btn-lg btn-block v-if="step !== 1" v-on:click="prev">Previous</button>
            </b-col>
            <b-col class="col-4">
              <button type="button" class="btn btn-secondary" btn-lg btn-block v-if="step !== 5" v-on:click="next">Next</button>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import xeConnectorApiService from '@/api-services/xeConnectorApiService';
import cc from '@/components/CcPayments';

export default {
  name: 'Setup',
  components: {
    NavBar,
    cc,
  },
  data() {
    return {
      app_account: { app_account: 'etsy@dataseek.info' },
      etsyAuthRedirectUri: 'https://www.etsy.com/404',
      step: 1,
      steps: ['Connections', 'Setup', 'Subscription', 'Billing', 'Complete'],
      shopNameValid: null,
      etsyConnection: null,
      xeroConnection: true,
      onnectionId: null,
      form: {
        etsyShopName: '',
        syncFromDate: '',
        customerInfoHandle: null,
        xeroSalesAccount: '',
        xeroExpenseAccount: '',
        xeroShippingAccount: '',
        listingInfoHandle: null,
        subscriptionPlan: '',
        backupOption: '',
      },
      xeroRevenueAccounts: ['200 - Sales', '201 - Other Sales'],
      xeroExpenseAccounts: ['400 - Expsnes', '401 - Other Expense'],
      xeroShippingAccounts: ['555 - Shipping', '501 - Other Shipping'],
      submitFailed: false,
      alertMessage: '',
    };
  },
  created() {
    xeConnectorApiService.etsyTokenApply(this.app_account).then((response) => {
      if (response.body.status === 'wait_authorize') {
        this.etsyAuthRedirectUri = response.body.grant_url;
      }
      // eslint-disable-next-line
      console.log(response.data);
    }).catch((error) => {
      // eslint-disable-next-line
      console.log(error.data);
    });
  },
  methods: {
    prev() {
      this.step = this.step - 1;
    },
    next() {
      this.step = this.step + 1;
    },
    checkShopName(event) {
      if (event) {
        xeConnectorApiService.checkEtsyShopName(this.form.etsyShopName.toLowerCase().replace(/\s/g, '')).then((response) => {
          if (response.data.status === 'success') {
            // shop is found in etsy
            this.shopNameValid = true;
            this.form.etsyShopName = this.form.etsyShopName.toLowerCase().replace(/\s/g, '');
          } else {
            // shop cannot be found
            this.shopNameValid = false;
          }
        }).catch((error) => {
          this.shopNameValid = false;
          // eslint-disable-next-line
          console.log(error.data);
          this.alertMessage = 'Shop is not able to be found on Etsy...';
          this.submitFailed = true;
        });
      }
    },
    getXeroAccounts(event) {
      if (event) {
        // xeConnectorApiService.checkEtsyShopName
      }
    },
    submitSetupForm(event) {
      if (event) {
        // xeConnectorApiService.submitSetupForm
      }
    },
    etsyAuthRedirect(event) {
      if (event) {
        window.location.href = this.etsyAuthRedirectUri;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
