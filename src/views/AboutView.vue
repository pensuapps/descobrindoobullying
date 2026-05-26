<template>
  <v-container
    class="max-height d-flex flex-column justify-space-between content-size"
  >
    <div class="full-width">
      <v-img
        src="../assets/images/bullyingGame/end.png"
        max-height="212"
        max-width="328"
        cover
        class="bg-grey-lighten-2 rounded-lg mx-auto"
      ></v-img>

      <h3 class="my-4"><strong> Bullying: dói por dentro, machuca por fora </strong></h3>

      <p>
        Bullying não é brincadeira. É quando alguém repete agressões físicas,
        verbais ou psicológicas contra outra pessoa que tem dificuldade de se
        defender. 
        
        <br>
        <br> Como identificar: 
        <ul>
          <li>
            Apelidos ofensivos;
          </li>
          <li>
             Ameaças, empurrões, bater;
          </li>
          <li>
             Espalhar mentiras e cyberbullying nas redes.  
          </li>
          
        </ul>
        <br>

        Causa: baixa
        autoestima, ansiedade, queda no rendimento escolar, medo de ir pra
        escola.

        <br><br>
        O que fazer: 
        <ol>
          <li>
            Não revide e não fique calado. Conte pra um
        adulto de confiança: pai, mãe, professor, coordenador.
          </li>
          <li>
            Se ver
        acontecendo com alguém, não ria e não filme. Apoie a vítima e conte para
        professores.
          </li>
          <li>
            A escola é obrigada por lei a ter plano de combate ao
        bullying.
      </li>
        </ol>
 
      </p>
      <p class="mt-3">
        Quero saber mais:
        <a class="primary--text" @click="goToVideo1"
          >https://www.youtube.com/watch?v=Oi3K9KDt_FY</a
        >
      </p>
      <p>
        Para pais e professores:
        <a class="primary--text" @click="goToVideo2"
          >https://www.youtube.com/watch?v=psieH5qBIpk</a
        >
      </p>
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
    showButtons: true,
  }),
  methods: {
    handleButton() {
      this.showButtons = false;
    },
    goToVideo1() {
      window.open("https://www.youtube.com/watch?v=Oi3K9KDt_FY", "_blank");
    },
    goToVideo2() {
      window.open("https://www.youtube.com/watch?v=psieH5qBIpk", "_blank");
    },
  },
};
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

.max-height {
  min-height: calc(100dvh - 4rem);
}
</style>
