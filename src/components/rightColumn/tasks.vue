<template>
  <div>
    <v-card class="mx-auto eval-card">
      <v-list>
        <div class="list-header-div">
          <v-subheader class="subheader">Tasks</v-subheader>
          <v-btn class="pls-btn" outlined small color="#404040">
            <v-icon>mdi-plus-circle-outline</v-icon>
          </v-btn>
        </div>

        <v-list-item-group>
          <v-list-item v-for="i in no_taks" :key="i">
            <template>
              <v-list-item-action>
                <v-checkbox :v-model="task.active" color="#2962FF"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="task-title">{{task.title}}</v-list-item-title>
                <v-list-item-subtitle v-html="task.subtitle" class="task-subtitle"></v-list-item-subtitle>
                <v-divider class="eval-item-divider" v-show="i!=no_taks"></v-divider>
              </v-list-item-content>
              <v-list-item-avatar>
                <v-avatar color="#2962FF" size="36">
                  <span class="white--text avatar-headline">KP</span>
                </v-avatar>
              </v-list-item-avatar>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    no_taks: 6,
    task: {
      active: false,
      title: "Add Checkout Button",
      subtitle:
        "<span>2MIN AGO   <span class='mdi mdi-calendar-blank'></span>   DUE:   03:00pm     02/05/2020</span> "
    }
  }),
  methods: {}
};
</script>

<style scoped>
.eval-card {
  border-radius: 10px !important;
  border: 1px solid #e4e0e0;
  box-shadow: none;
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
  margin: auto;
  width: 100%;
}
.task-subtitle {
  color: #bcbcbc;
  font-size: 12px;
  margin-bottom: 10px;
}

.avatar-headline{
  font-size: 15px !important;
  text-align: center;
}
</style>