<template>
  <v-container class="fill-height d-flex flex-column justify-space-around content-size">
    <div class="full-width">
      <v-img src="../assets/images/bullyingGame/home.png" max-height="212" max-width="328" cover
        class="bg-grey-lighten-2 rounded-lg mx-auto"></v-img>
      <article class="text-justify mt-3">
        VAMOS FALAR SOBRE BULLYING!
      </article>
    </div>
    <div class="full-width">
      <v-btn @click="pushToGame" class="mt-3" outlined large block rounded dark>Vamos lá?</v-btn>
    </div>
  </v-container>
</template>

<script>

export default {
  name: "HomeView",

  methods: {
    pushToGame() {
      this.$router.push("jogar")
    }
  },
  created() {
    console.log(this.$router)
  }
}
</script>

<style scoped>
.content-size {
  max-width: 328px;
  margin: auto;
}

.full-width {
  width: 100%;
}

::v-deep .v-btn {
  text-transform: none;
}
</style>
