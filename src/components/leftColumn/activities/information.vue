<template>
  <div id="#information">
    <v-card class="mx-auto eval-card">
      <v-list>
        <div class="list-header-div">
          <v-subheader class="subheader">Information</v-subheader>
          <v-btn class="pls-btn" outlined small color="#404040">
            <v-icon>mdi-plus-circle-outline</v-icon>
          </v-btn>
        </div>

        <v-list-item-group>
          <v-list-item v-for="(item,index) in info" :key="index">
            <v-list-item-content>
              <v-list-item-title class="notes-title">
                {{item.title}}
                <span class="notes-subtitle">{{item.subtitle}}</span>
              </v-list-item-title>
              <v-divider class="eval-item-divider" v-show="index!=no_info-1"></v-divider>
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
    no_info: 4,
    info: [
      {
        title: "Email",
        subtitle: "kamalpratap@xyz.com"
      },
      {
        title: "Phone",
        subtitle: "+91-9874857392"
      },
      {
        title: "Social",
        subtitle: "github.com/kamalpratap"
      },
      {
        title: "Links",
        subtitle: `codepen.io/kamalpratap,  yahoo.in/kamalpratap`
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
}
.avatar-headline {
  font-size: 15px !important;
  text-align: center;
}
.notes-title{
margin-bottom: 12px;
}
.notes-subtitle {
  color: #bcbcbc;
  font-size: 12px;
  margin-left: 50px;
  
}
</style>