<template>
  <v-app>
    <app-bar></app-bar>
  </v-app>
</template>

<script>
import appBar from './components/appBar'

export default {
  name: 'App',

  components: {
    appBar,
  },

  data: () => ({
  }),
};
</script>
