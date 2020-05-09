<template>
  <div>
    <information></information>
    <experience></experience>
    <v-row no-gutters>
      <v-col cols="6" class="edu-col">
        <education></education>
      </v-col>
      <v-col cols="6">
        <skills></skills>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import information from "./information";
import experience from "./experience";
import education from "./education";
import skills from "./skills";
export default {
  components: {
    information,
    experience,
    education,
    skills
  }
};
</script>

<style scoped>
.edu-col{
  padding-right: 25px !important;
}
</style>