<template>
  <v-app class="background-red">
    <v-app-bar v-if="$router.currentRoute.name != 'home'" app color="#8C251C" dark flat>
      <v-icon dark @click="goHome">mdi-arrow-left</v-icon>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  methods: {
    goHome() {
      this.$router.push("/")
    }
  }
};
</script>

<style>
.background-red {
  background: radial-gradient(circle,
      #8C251C,
      #BF3326) !important;
  background-repeat: no-repeat !important;
  -webkit-font-smoothing: antialiased !important;
  color: white !important;
}
</style>