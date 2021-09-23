<template>
  <div class="d-flex">
    <div class="col-md-4">
      <v-list shaped>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-content>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
    <div class="col-md-8">
        <v-container> Olá </v-container>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  props: [],
  data() {
    return {};
  },
  methods: {},
};
</script>