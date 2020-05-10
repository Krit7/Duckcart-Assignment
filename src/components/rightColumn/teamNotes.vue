<template>
  <div>
    <v-card class="mx-auto eval-card">
      <v-list>
        <div class="list-header-div">
          <v-subheader class="subheader">Team Notes</v-subheader>
          <v-btn class="pls-btn" outlined small color="#404040">
            <v-icon>mdi-plus-circle-outline</v-icon>
          </v-btn>
        </div>

        <v-list-item-group>
          <v-list-item v-for="i in no_items" :key="i">
            <v-list-item-avatar>
              <v-avatar color="#2962FF" size="36">
                <span class="white--text avatar-headline">KP</span>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="notes-title">{{item.title}}</v-list-item-title>
              <v-list-item-subtitle class="notes-subtitle">{{item.subtitle}}</v-list-item-subtitle>
              <v-divider class="eval-item-divider" v-show="i!=no_items"></v-divider>
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
    no_items :4,
    item: {
      title: "Kamal Pratap",
      subtitle: "Hey guys, I have pushed my progress to the master branch"
    }
  })
};
</script>

<style scoped>
.eval-card {
  border-radius: 10px !important;
  border: 1px solid #e4e0e0;
  box-shadow: none;
  margin: 25px 0;
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

.notes-subtitle {
  color: #bcbcbc;
  font-size: 12px;
  margin-bottom: 8px;
}
</style>