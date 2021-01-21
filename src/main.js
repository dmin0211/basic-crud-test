import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './plugins/firebase'
import router from './router'
import store from "./store";


Vue.config.productionTip = false
export const EventBus = new Vue()

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
