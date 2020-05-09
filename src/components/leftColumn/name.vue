<template>
  <section>
    <v-banner two-line>
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" class="img-avatar" />
      <div class="detail-info">
        <p class="name">Kamal Paratap</p>
        <p class="position">full stack developer</p>
        <p class="last-activity">last activity</p>
      </div>
    </v-banner>
    <v-tabs centered grow>
      <v-tab v-for="(tab,index) in tabs" :key="index" >
        <router-link  :to="tab" class="router-link">{{tab}}</router-link>
      </v-tab>
    </v-tabs>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      tabs: ["overview", "activities", "assessments", "files", "resume"]
    };
  }
};
</script>

<style scoped>
.img-avatar {
  height: 120px;
  width: 120;
  border-radius: 50%;
  float: left;
}
.detail-info {
  float: right;
  margin-top: 9%;
  padding-left: 17px;
}
.name {
  font-size: 34px;
  color: #404040;
  margin-bottom: 12px;
}
.position {
  font-size: 18px;
  color: #bcbcbc;
  margin-bottom: 6px;
}
.last-activity {
  font-size: 18px;
  color: #bcbcbc;
}
.router-link {
  color: #2962ff !important;
  text-decoration: none;
}
</style>