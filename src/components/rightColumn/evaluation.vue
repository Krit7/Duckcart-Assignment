<template>
  <div>
    <v-card class="mx-auto eval-card" elevation="0">
      <v-list>
        <v-row no-gutters>
          <v-col md="3" xs="2">
            <v-subheader class="subheader">Evaluation</v-subheader>
          </v-col>
          <v-col md="3" xs="2">
            <v-btn class="eval-btn" outlined small color="#2962FF">
              <v-icon class="eval-icon">mdi-calendar-blank</v-icon>SCHEDULE
            </v-btn>
          </v-col>
          <v-col md="2" xs="2">
            <v-btn class="eval-btn" outlined small color="#404040">
              <v-icon class="eval-icon only-icon">mdi-share-variant</v-icon>
            </v-btn>
          </v-col>
          <v-col md="2" xs="2">
            <v-btn class="eval-btn" outlined small color="#404040">
              <v-icon class="eval-icon only-icon">mdi-telegram</v-icon>
            </v-btn>
          </v-col>
          <v-col md="2" xs="2">
            <v-btn class="eval-btn" outlined small color="#2962FF">More</v-btn>
          </v-col>
        </v-row>

        <v-list-item-group>
          <v-list-item v-for="(item,index) in evalItemNames" :key="index">
            <v-list-item-content style="padding: 5px 0 !important; ">
              <v-divider class="eval-item-divider"></v-divider>
              <v-row no-gutters>
                <v-col md="4" sm="6">
                  <v-list-item-title class="eval-list-item-title">{{item}}</v-list-item-title>
                </v-col>
                <v-col md="4" sm="6">
                  <v-btn class="eval-btn" outlined small color="#2962FF">
                    <v-icon class="eval-icon">mdi-check</v-icon>PROCEED
                  </v-btn>
                </v-col>
                <v-col md="1" sm="3">
                  <v-btn class="eval-btn" outlined small color="#404040">
                    <v-icon class="eval-icon only-icon">mdi-cancel</v-icon>
                  </v-btn>
                </v-col>
                <v-col md="1" sm="2"></v-col>
                <v-col md="1" sm="3">
                  <v-btn class="eval-btn" outlined small color="#404040">
                    <v-icon class="eval-icon only-icon">mdi-dots-horizontal</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      evalItemNames: ["Job Name", "Pool Name"]
    };
  }
};
</script>

<style  scoped>
.eval-card {
  border-radius: 10px !important;
  border: 1px solid #e4e0e0;
  box-shadow: none;
}
.subheader {
  font-size: 0.999rem;
  color: #404040 !important;
}
.eval-btn {
  border: none;
  font-size: 11px !important;
  margin: 8px 1px !important;
}
.eval-icon {
  font-size: 16px !important;
}

.only-icon {
  font-size: 19px !important;
}

.eval-item-divider {
}
.eval-list-item-title {
  margin: 12px 0;
  color: #404040;
}
</style>