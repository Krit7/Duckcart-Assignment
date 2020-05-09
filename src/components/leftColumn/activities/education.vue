<template>
  <div id="#education">
    <v-card class="mx-auto eval-card">
      <v-list>
        <div class="list-header-div">
          <v-subheader class="subheader">Education</v-subheader>
          <v-btn class="pls-btn" outlined small color="#404040">
            <v-icon>mdi-plus-circle-outline</v-icon>
          </v-btn>
        </div>

        <v-list-item-group v-for="(item,index) in experience" :key="index">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="notes-title">{{item.title}}</v-list-item-title>
              <v-list-item-subtitle class="notes-subtitle">{{item.post}}</v-list-item-subtitle>
              <v-list-item-subtitle class="notes-subtitle">{{item.year}}</v-list-item-subtitle>
              <v-list-item-subtitle class="notes-subtitle">{{item.detail}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    experience: [
      {
        title: "SSC",
        post: "St. Mary High School",
        year: "Sept 2016",
        detail: "CGPA 9.2"
      },
      {
        title: "SSC",
        post: "St. Mary High School",
        year: "Sept 2018",
        detail: "Percentage 96%"
      }
    ]
  })
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
</style>