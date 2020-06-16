<template>
  <v-container>
    <div class="spacer"></div>
    <v-row>
      <v-col
        :align="this.$vuetify.breakpoint.mobile ? 'center' : 'right'"
        justify="center"
        cols="12"
        sm="4"
        xs="12"
        class="pb-4"
      >
        <v-img
          src="@/assets/img/programador.png"
          class="white--text text--darken-4 align-end"
          max-width="156"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="8" xs="12" class="pb-4">
        <h1 class="display-2 font-weight-bold text-center mb-3">Hello,</h1>
        <p class="text-center">
          I am Fernando Martins, a software engineer from Madeira, Portugal.
          <br />Challenges are part of my day and everyday I have a new story to tell about something I discovered.
          <br />I love to analyze and test devices in the market in order to find the logic applied in them.
        </p>
      </v-col>
    </v-row>

    <h4
      :class="`pt-5 text-right ${!this.$vuetify.breakpoint.mobile ? 'mr-14': ''}`"
    >Used Technologies,</h4>
    <v-row justify="space-around" class="pt-5">
      <!-- Social networks -->
      <v-tooltip bottom v-for="(technologie, key) in technologies" v-bind:key="key">
        <template v-slot:activator="{ on, attrs }">
          <v-icon large v-bind="attrs" v-on="on" :color="technologie.color">{{ technologie.icon }}</v-icon>
        </template>
        <span>{{ technologie.text }}</span>
      </v-tooltip>
    </v-row>
    <div class="spacer"></div>
  </v-container>
</template>

<script>
import technologies from "./../assets/data/technologies.json";

export default {
  name: "SmallBio",

  data: () => ({
    technologies: technologies
  }),
  computed: {}
};
</script>

<style lang="scss" scoped>
.spacer {
  height: 5rem;
}
</style>
