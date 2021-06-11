<template>
  <v-container>
    <v-row>
      <v-autocomplete @keydown="onKeypress($event)"></v-autocomplete>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',
    props: {
      keyName: {
        default: 'Enter'
      }
    },
    methods: {
      onKeypress(e) {
        if (e.key === this.keyName) {
          //Faça o que você deve fazer aqui...
          console.log(e.key);
        }
      }
    },
    data: () => ({
      
    }),
  }
</script>
