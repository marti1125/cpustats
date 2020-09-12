import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import App from './App.vue';
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false;
Vue.config.devtools = true;

import * as Wails from '@wailsapp/runtime';
//import Bridge from "./wailsbridge"

Wails.Init(() => {
	new Vue({
		render: h => h(App)
	}).$mount('#app');
});
/*
Bridge.Start(() => {
	new Vue({
		render: h => h(App)
	}).$mount('#app');
})
*/