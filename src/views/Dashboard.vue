<template>
  <div class="Dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-card flat class="pa-3">
        <v-layout row wrap>
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>Create a new website</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>Me</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due By</div>
            <div>1st Jan 2019</div>
          </v-flex>

          <v-flex xs2 sm4 md2>
            <div class="caption grey--text">Status</div>
            <div>Ongoing</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
