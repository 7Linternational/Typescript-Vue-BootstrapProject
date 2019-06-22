import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import VueRouter from 'vue-router';
import Bootstrap from 'bootstrap';
import View1 from './components/view1.component.vue';
import View2 from './components/view2.component.vue';
import $ from 'jquery';
import jQuery from 'jquery';
import _ from 'lodash';

import './scss/style';
//import 'bootstrap/dist/bootstrap.css';

Vue.component("View1", View1);
Vue.component("View2", View2);

//Vue.use(Bootstrap);
Vue.use(VueRouter);

const routes = [{ path: '/', component: View1 }, { path: '/add', component: View2 }];
const router = new VueRouter({ routes });

const app = new Vue({
	router: router
}).$mount("#app");
