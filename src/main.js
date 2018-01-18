// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import VueAnalytics from 'vue-analytics'
//import VueAdsense from 'vue-adsense'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

import VueCharts from 'vue-chartjs'

Vue.config.productionTip = false

/*
Vue.use(VueAnalytics, {
  id: 'UA-9726036-2',
  router
})
*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
