import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './router'

import SpotifyWebApi from 'spotify-web-api-js'
const spotify = new SpotifyWebApi() 
Vue.prototype.$spotify = spotify

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
