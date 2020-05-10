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

        <v-chip-group column active-class="primary--text">
          <v-chip class="chip" v-for="i in 15" :key="i">{{chips[i%3]}}</v-chip>
        </v-chip-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    chips: ["Web Development", "Python", "CSS"]
  }),
  methods: {
    randomChip() {
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

.chip{
  margin-left: 2px;
}
</style>