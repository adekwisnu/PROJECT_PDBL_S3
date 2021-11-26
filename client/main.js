import Vue from 'vue'

import '../imports/ui/plugins'
import '../client/assets/js/scripts'

import App from '../imports/ui/App.vue'

// Vue Router
import routes from '../imports/ui/router/index';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
})

Meteor.startup(() => {
  new Vue({
    router,
    el: '#app',
    ...App,
  })
})
