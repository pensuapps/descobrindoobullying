<template>
  <v-container class="fill-height d-flex flex-column justify-space-between content-size">
    <div class="full-width">
      <v-img src="../assets/images/bullyingGame/end.png" max-height="212" max-width="328" cover
        class="bg-grey-lighten-2 rounded-lg mx-auto"></v-img>

      <p class="mt-3">Quero saber mais: <a class="primary--text"
          @click="goToVideo1">https://www.youtube.com/watch?v=Oi3K9KDt_FY</a></p>
      <p>Para pais e professores: <a class="primary--text"
          @click="goToVideo2">https://www.youtube.com/watch?v=21mDekTZwsw</a></p>

    </div>
    <div class="full-width grid-3" v-if="showButtons">
      <div class="d-flex flex-column align-center" @click="handleButton">
        <v-btn fab depressed color="#3174CC" dark>
          <v-icon> mdi-thumb-up </v-icon>
        </v-btn>
        <p class="text-center">Entendi</p>
      </div>
      <div class="d-flex flex-column align-center" @click="handleButton">
        <v-btn fab depressed dark color="#94BF36">
          <v-icon> mdi-lightbulb </v-icon>
        </v-btn>
        <p class="text-center">Interessante</p>
      </div>
      <div class="d-flex flex-column align-center" @click="handleButton">
        <v-btn fab depressed dark color="#BF3A22">
          <v-icon> mdi-thumb-down </v-icon>
        </v-btn>
        <p class="text-center">Não Entendi</p>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "AboutView",

  data: () => ({
    showButtons: true
  }),
  methods: {
    handleButton() {
      this.showButtons = false
    },
    goToVideo1() {
      window.open('https://www.youtube.com/watch?v=M7wqlF3YM_g', '_blank');
    },
    goToVideo2() {
      window.open('https://www.youtube.com/watch?v=21mDekTZwsw', '_blank');
    }
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

.grid-3 {
  display: grid !important;
  grid-template-columns: 1fr 1fr 1fr;
}

a {
  text-decoration: underline;
}
</style>