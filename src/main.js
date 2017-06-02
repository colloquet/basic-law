import Vue from 'vue'
import Meta from 'vue-meta'
import router from './router'
import App from './App'

Vue.use(Meta)

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
})
