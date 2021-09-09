<template>
  <v-app>
    <v-app-bar
      app
      color="deep-purple"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          class="shrink mt-1 hidden-sm-and-down"
          src="./assets/accounting.svg"
          max-width="100"
        />
        <v-toolbar-title>Trivial</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Documentação de ajuda</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">Início</v-tab>
          <v-tab to="/Cliente">Sou Cliente</v-tab>
          <v-tab to="/Contador">Sou Contador</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>
