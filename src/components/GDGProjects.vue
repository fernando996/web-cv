<template>
  <v-container class="gdgProjects" fluid>
    <!-- <div class="spacer"></div> -->

    <h2 class="text-center display-1 py-10">Ongoing Adventures</h2>
    <v-row class="justify-center">
      <v-col cols="12" sm="4">
        <v-card max-width="500" class="mx-auto">
          <v-list-item>
            <v-list-item-avatar color="transparent">
              <img src="@/assets/img/gdg.png" alt="GDG Madeira" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline grey--text text-darken-3">GDG Madeira</v-list-item-title>
              <!-- <v-list-item-subtitle>Make good things together.</v-list-item-subtitle> -->
            </v-list-item-content>
          </v-list-item>

          <v-img src="@/assets/img/gdgImage.jpg" max-height="250" contain></v-img>

          <v-card-text>
            GDG (Google Developers Group) Madeira is a nonprofit local network of developers based on Madeira Island, that was created by a platform offered by Google Developers.
            <v-btn
              text
              href="https://gdgmadeira.xyz/"
              target="_blank"
              color="deep-purple accent-4"
            >Read More</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card max-width="500" class="mx-auto">
          <v-list-item>
            <v-list-item-avatar color="transparent">
              <img src="@/assets/img/clear_square_end_logo.png" alt="GDG Tech Sessions" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline grey--text text-darken-3">GDG Tech Sessions</v-list-item-title>
              <!-- <v-list-item-subtitle>Make good things together.</v-list-item-subtitle> -->
            </v-list-item-content>
          </v-list-item>

          <v-img src="@/assets/img/tech-sessions.png" max-height="250" contain></v-img>

          <v-card-text>
            A community to share even more content for our entire GDG community, regardless of their city or country. All together in a series of events previously scheduled.
            <v-btn
              text
              href="http://tech-sessions.com/"
              target="_blank"
              color="deep-purple accent-4"
            >Read More</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <div class="spacer"></div>
  </v-container>
</template>

<script>
import technologies from "./../assets/data/technologies.json";

export default {
  name: "GDGProjects",

  data: () => ({
    technologies: technologies
  })
};
</script>

<style lang="scss" scoped>
.spacer {
  height: 5rem;
}
.gdgProjects {
  background: #5097dd40;
}
</style>
