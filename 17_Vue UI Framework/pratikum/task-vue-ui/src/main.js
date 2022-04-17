import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import vuetify from '@/plugins/vuetify' // path to vuetify export
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  Vuetify,
  render: h => h(App)
}).$mount('#app')
