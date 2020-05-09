<template>
  <div id="#skills">
    <v-card class="mx-auto eval-card">
      <v-list>
        <div class="list-header-div">
          <v-subheader class="subheader">Experience</v-subheader>
          <v-btn class="pls-btn" outlined small color="#404040">
            <v-icon>mdi-plus-circle-outline</v-icon>
          </v-btn>
        </div>

        <v-chip class="chip" v-for="i in 15" :key="i">{{chips[i%3]}}</v-chip>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    chips: ["Web Development", "Python", "CSS"]
  }),
  methods:{
      randomChip(){
          return Math.floor(Math.random() * 3);
      }
  }
};
</script>

<style scoped>
.eval-card {
  margin-top: 5%;
  border-radius: 10px !important;
}
.list-header-div {
  height: auto;
  margin: 10px;
}
.subheader {
  display: inline;
  font-size: 0.999rem;
  color: #404040 !important;
}
.pls-btn {
  display: inline;
  border: none;
  font-size: 11px !important;
  margin: -5px 1px !important;
  float: right;
}
.eval-item-divider {
  box-shadow: 0px 2px 4px 1px rgba(188, 188, 188, 0.2),
    0px 4px 5px 0px rgba(188, 188, 188, 0.14),
    0px 1px 10px 0px rgba(188, 188, 188, 0.12) !important;
  margin-left: 20px;
}
.avatar-headline {
  font-size: 15px !important;
  text-align: center;
}

.notes-subtitle {
  color: #bcbcbc;
  font-size: 14px;
}
.chip{
    margin: 3px 5px;
}
</style>