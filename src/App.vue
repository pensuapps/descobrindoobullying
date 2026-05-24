<template>
  <v-app class="background-red">
    <v-app-bar
      app
      color="#8C251C"
      dark
      flat
    >
      <v-icon dark @click="goHome">mdi-arrow-left</v-icon>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  methods: {
    goHome() {
      if (this.$route.path == "/") {
        window.open("https://explorandominhamente.netlify.app/");
      }

      this.$router.push("/");
    },
  },
};
</script>

<style>
.background-red {
  background: radial-gradient(circle, #8c251c, #bf3326) !important;
  background-repeat: no-repeat !important;
  -webkit-font-smoothing: antialiased !important;
  color: white !important;
}
</style>
