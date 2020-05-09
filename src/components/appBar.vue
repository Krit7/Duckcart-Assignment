<template>
  <section>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense>
        <v-list-item link @click.stop="drawer = !drawer" class="inogit-list">
          <v-list-item-action>
            <v-icon>mdi-menu</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="inogit-list-item">INOGIT</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link v-for="(item, index) in appDrawers" :key="index">
          <v-list-item-action>
            <v-icon class="list-item-icon">{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="list-item">{{item.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="white" flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-show="!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="toolbar-title">
        <span class="toolbar-title-first">Employees</span>
        <span class="toolbar-title-second">/Profile</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </section>
</template>


<script>

export default {
  data: () => {
    return {
      drawer: false,
      showDivider: 0,
      appDrawers: [
        {
          icon: "mdi-view-dashboard",
          name: "Dashboard"
        },
        {
          icon: "mdi-account-multiple",
          name: "Candidates"
        },
        {
          icon: "mdi-briefcase",
          name: "Jobs"
        },
        {
          icon: "mdi-message-text",
          name: "Mailbox"
        },
        {
          icon: "mdi-cog",
          name: "Settings"
        },
        {
          icon: "mdi-waves",
          name: "Pools"
        },
        {
          icon: "mdi-poll-box",
          name: "Assessments"
        },
        {
          icon: "mdi-google-circles-communities",
          name: "Team Members"
        },
        {
          icon: "mdi-currency-usd-circle",
          name: "Billing"
        },
        {
          icon: "mdi-clipboard-text",
          name: "Guidlines"
        },
        {
          icon: "mdi-message-alert",
          name: "Feedback"
        },
        {
          icon: "mdi-help-circle",
          name: "Contact Us"
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped>
.inogit-list {
  margin: 7px 0 15px;
}
.inogit-list-item {
  color: #2962ff;
  font-size: 1.125rem !important;
  font-weight: 600 !important;
}
.list-item {
  color: #5f6368;
  font-size: 0.9125rem !important;
}
.toolbar-title {
  margin: auto;
  margin-top: 17px;
}
.toolbar-title-first {
  text-transform: uppercase;
  color: #404040;
  font-weight: 500;
}
.toolbar-title-second {
  text-transform: uppercase;
  color: #5f6368;
  font-weight: 400;
}
</style>