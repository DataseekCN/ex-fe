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
                <label for="">Select your connection:</label>
                <select class="form-control" name="" id="">
                  <option></option>
                  <option></option>
                  <option></option>
                </select>
              </div>
              <p class="lead">
                <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Download CSV</a>
              </p>
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

export default {
  name: 'Backups',
  components: {
    NavBar,
    SideBar,
  },
  created() {
    Cookies.set('ex_session_id', 'value');
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style>
.table, #shop-name-input {
  margin: 30px 30px 30px 30px;
}
</style>