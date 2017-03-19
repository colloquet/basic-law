import Vue from 'vue';
import VueHead from 'vue-head';
import router from './router';
import App from './App';

Vue.use(VueHead);

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
});
