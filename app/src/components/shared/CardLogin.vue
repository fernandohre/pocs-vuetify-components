<template>
  <div class="card-login">
    <v-container>
      <v-card elevation="4" light>
        <v-card-title>
          <v-layout align-center justify-space-between>
            <h3 class="headline">{{titulo}}</h3>
            <v-flex>
              <v-img
                :alt="platformName"
                class="ml-3"
                contain
                height="48px"
                position="center right"
                src="../../assets/login.svg"
              ></v-img>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <p>Acesse com seu email e senha:</p>
          <v-form>
            <v-text-field outline label="Email" type="text"></v-text-field>
            <v-text-field
              outline
              hide-details
              label="Senha"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
          <v-btn color="yellow darken-1" flat> Esqueceu sua senha? </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="yellow darken-1" :large="$vuetify.breakpoint.smAndUp">
            <v-icon left>mdi-lock</v-icon>
            Entrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
    props: {
        titulo: {
            default: 'Login'
        },
        urlAutenticacao: {
            default: ''
        }
    }
};
</script>