<template>
  <div class="home">
    <v-parallax height="700" dark src="@/assets/img/web.png">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-card class="mx-auto" max-width="350">
            <v-img
              src="@/assets/img/fernando.jpg"
              class="white--text text--darken-4 align-end"
              gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,0),rgba(0,0,0,0), rgba(0,0,0,.6)"
            >
              <v-card-title>Fernando Martins</v-card-title>
            </v-img>
            <v-card-subtitle class="black--text">Software Engineer</v-card-subtitle>
            <v-card-text>
              <div>GDG Madeira &amp; GDG Tech Sessions</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-parallax>
    <SmallBio />
    <GDGProjects />
  </div>
</template>

<script>
// // @ is an alias to /src
import SmallBio from "@/components/SmallBio.vue";
import GDGProjects from "@/components/GDGProjects.vue";

export default {
  name: "Home",
  components: {
    SmallBio,
    GDGProjects
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: -4rem;
}
</style>
