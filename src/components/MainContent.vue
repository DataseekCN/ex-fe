<template>
  <div>
    <b-row>
      <b-col>
        <NavBar />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="col-auto">
        <SideBar />
      </b-col>
      <b-col class="col-10"
        style="margin-left:50px; text-align:center">
        <router-view></router-view>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';

export default {
  name: 'MainContent',
  components: { NavBar, SideBar },
};
</script>