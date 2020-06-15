<template>
  <v-app-bar app :color="locationColor" :flat="locationFlat" v-scroll="onScroll" dark>
    <v-spacer></v-spacer>

    <div class="pr-16">
      <!-- Navigation links -->
      <template v-for="link in menu">
        <v-btn
          :to="link.path"
          @click="_menu(link.text)"
          text
          v-bind:key="link.text"
          :color="appBarIconColor"
        >{{ link.text }}</v-btn>
      </template>

      <!-- Social networks -->
      <v-tooltip bottom v-for="(social, key) in socialNetworks" v-bind:key="key">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            @click="_social(social.text)"
            :href="social.href"
            target="_blank"
            icon
            color="white"
          >
            <v-icon>{{ social.icon }}</v-icon>
          </v-btn>
        </template>
        <span>{{ social.text }}</span>
      </v-tooltip>
    </div>
  </v-app-bar>
</template>

<script>
import socialNetworks from "./../assets/data/socialNetworks.json";
import menu from "./../assets/data/menu.json";
export default {
  name: "Header",
  data: () => ({
    offsetTop: 0,
    socialNetworks: socialNetworks,
    menu: menu
  }),
  computed: {
    // a computed getter
    locationColor: function() {
      return this.appBarLocDef() ? "transparent" : "primary";
    },
    appBarIconColor: function() {
      return this.appBarLocDef() ? "light-blue accent-4" : "white";
    },
    locationFlat: function() {
      return this.appBarLocDef();
    }
  },
  methods: {
    _social(text) {
      this.$gtag.event("Social", {
        event_category: "Click",
        event_label: text
      });
    },
    _menu(text) {
      this.$gtag.event("Navigation", {
        event_category: "Click",
        event_label: text
      });
    },
    onScroll() {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
    },
    appBarLocDef() {
      let path = this.$route.path || false;
      return path == "/" && this.offsetTop < 445;
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  }
};
</script>
