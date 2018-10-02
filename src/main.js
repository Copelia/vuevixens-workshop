import Home from './views/Home'
import Pets from './views/Pets'
import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify"
import VueRouter from 'vue-router'

Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/pets', component: Pets },
];

const router = new VueRouter({ routes });

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
