<template>
  <div>
    <v-container class="lighten-5">
      <v-row no-gutters>
        <v-col cols="8" class="main-left-col">
          <name></name>
          <router-view></router-view>
        </v-col>
        <v-col cols="4">
          <evaluation></evaluation>
          <teamNotes></teamNotes>
          <tasks></tasks>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import evaluation from './rightColumn/evaluation'
import teamNotes from './rightColumn/teamNotes'
import tasks from './rightColumn/tasks'
import name from './leftColumn/name'

export default {
  components: {
    name,
    tasks,
    evaluation,
    teamNotes
  }
};
</script>

<style scoped>
.main-left-col {
  padding-right: 50px;
}

.empty{
  height: 500px;
}

</style>