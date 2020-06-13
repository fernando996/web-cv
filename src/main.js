import Vue from 'vue'
import App from './App.vue'
// import VueMaterial from "./modules/VueMaterial.js";

Vue.config.productionTip = false

// import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import vuetify from './plugins/vuetify';

Vue.use(VueMaterial)

new Vue({
  vuetify,

  //VueMaterial,
  render: h => h(App)
}).$mount('#app')
