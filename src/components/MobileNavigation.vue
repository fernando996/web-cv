<template>
  <v-navigation-drawer v-model="show" clipped app>
    <v-list dense nav>
      <v-list-item v-for="item in menu" :key="item.text" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import socialNetworks from "./../assets/data/socialNetworks.json";
import menu from "./../assets/data/menu.json";
export default {
  name: "MobileNavigation",
  data: () => ({
    offsetTop: 0,
    socialNetworks: socialNetworks,
    menu: menu,
    show: false
  }),
  props: {
    drawer: Boolean
  },
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
  watch: {
    drawer: function(val) {
      this.show = val;
    },
    show: function(val) {
      if (val) return;
      this.$emit("update:draw", this.val);
    }
  }
};
</script>
