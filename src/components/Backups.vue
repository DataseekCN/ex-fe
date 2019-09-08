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
        <b-container fluid>
          <b-row>
            <div class="jumbotron">
              <div class="form-group">
                <b-row>
                  <label for="">Select your connection:</label>
                  <select class="form-control" id="connections">
                    <option v-for="connection in connections" v-model="selected_shop_uuid">{{connection.etsy_shopname}} <--> {{connection.xero_orgname}}</option>
                  </select>
                </b-row>

                <b-row>
                  <b-col class="m-2">
                    <p>Select date range to download:</p>
                  </b-col>
                  <b-col class="m-2">
                    <b-row>
                      <b-col>
                        <label>From:</label>
                      </b-col>
                      <b-col>
                        <input type="date"
                        id="from-date-input"
                        class="form-control"
                        placeholder="from"
                        v-model="download_from_date"
                        >
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col class="m-2">
                    <label>To:</label>
                    <input type="date"
                    id="from-date-input"
                    class="form-control"
                    placeholder="from"
                    v-model="download_from_date"
                    >
                  </b-col>
                </b-row>

                <b-row align-self-center>
                  <b-col class="m-2">
                    <a class="btn btn-primary btn-lg"
                    href="Jumbo action link"
                    role="button"
                    v-on:click="clickToDownloadCsv"
                    >Download CSV</a>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-row>
        </b-container>
      </b-row>
    </b-col>
  </b-row>
</div>
</template>

<script>
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import Cookies from 'js-cookie';
import xeConnectorApiService from '@/api-services/xeConnectorApiService';

export default {
  name: 'Backups',
  components: {
    NavBar,
    SideBar,
  },
  created() {
    Cookies.get('ex_session_id');
  },
  data() {
    return {
      connections: [{
        connection_id: 'aaaa-bbbb-cccc-dddd',
        etsy_shopname: 'devshop1',
        xero_orgname: 'demo company',
        status: 'connected',
        last_connected: '08-04-2019',
      },
      {
        connection_id: 'bbbb-cccc-dddd-eeee',
        etsy_shopname: 'devshop2',
        xero_orgname: 'demo company',
        status: 'connected',
        last_connected: '08-04-2019',
      },
      ],
      selected_shop_uuid: null,
      download_from_date: null,
      download_to_date: null,
    };
  },
  methods: {
    clickToDownloadCsv(event) {
      const downloadRequest = {
        session_id: Cookies.get('ex_session_id'),
        connection_id: this.selected_shop_uuid,
        from_date: this.download_from_date,
        to_date: this.download_to_date,
      };

      if (event) {
        xeConnectorApiService.downloadCsv(downloadRequest).then((response) => {
          if (response.status === 'success') {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.pdf'); // or any other extension
            document.body.appendChild(link);
            link.click();
          } else {
            // TO DO: display error message
          // eslint-disable-next-line
          console.log(response.body);
          }
        }).catch((error) => {
          // display error and handle exception
          // eslint-disable-next-line
          console.log(error.response);
        });
      }
    },
  },
};
</script>

<style>
.table, #shop-name-input {
  margin: 30px 30px 30px 30px;
}
</style>