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
        <b-row>
          <p>Subscription:</p>
        </b-row>

        <b-row>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Title</h4>
              <p class="card-text">Body</p>
            </div>
          </div>
        </b-row>

        <b-row>
          <p>Profile:</p>
        </b-row>

        <b-row>
          <div class="form-group">
            <label for=""></label>
            <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Help text</small>
          </div>
          <button type="button" name="" id="" class="btn btn-primary btn-lg btn-block">Save</button>
          <button type="button" name="" id="" class="btn btn-primary btn-lg btn-block">Cancel</button>
        </b-row>
      </b-row>
    </b-col>
  </b-row>
</div>
</template>

<script>
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';

export default {
  name: 'Settings',
  components: {
    NavBar,
    SideBar,
  },
  data() {
    return {
    };
  },
  created() {

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
