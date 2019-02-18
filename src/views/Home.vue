<template>
  <div class="home">
    <v-btn class="pink white--text">This is a button</v-btn>
    <v-btn depressed color="pink">hello</v-btn>
    <v-btn flat color="pink">click me</v-btn>
    <v-btn depressed class="pink white--text">
      <v-icon left>cake</v-icon>The cake is a lie
    </v-btn>

    <v-btn depressed small class="pink white--text">
      <v-icon small left>cake</v-icon>The cake is a lie
    </v-btn>

    <v-btn depressed large class="pink white--text">The cake is a lie
      <v-icon large right>cake</v-icon>
    </v-btn>

    <v-btn depressed small dark color="purple">
      <span>The cake is a lie</span>
      <v-icon small right>cake</v-icon>
    </v-btn>

    <v-btn depressed small fab dark color="purple">
      <v-icon small>cake</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
