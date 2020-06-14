<template>
  <v-footer color="primary white--text" class>
    <div class="pl-16">&copy; Fernando Martins - 2020</div>
    <v-spacer></v-spacer>
    <div class="pr-16">
      <template v-for="(social, key) in socialNetworks">
        <v-btn :href="social.href" v-bind:key="key" target="_blank" icon color="white">
          <v-icon>{{ social.icon }}</v-icon>
        </v-btn>
      </template>
    </div>
  </v-footer>
</template>

<script>
import socialNetworks from "./../assets/data/socialNetworks.json";

export default {
  name: "Footer",
  data: () => ({ socialNetworks: socialNetworks })
};
</script>
