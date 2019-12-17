import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import ECharts from 'vue-echarts' // refers to components/ECharts.vue in webpack
import mock from './assets/mock.js'
// import f2 from '@antv/f2'
// console.log(f2)
// vue-codemirror
import VueCodemirror from 'vue-codemirror'

// require styles
import 'codemirror/lib/codemirror.css'
import "echarts/lib/chart/line";
import "echarts/lib/component/polar";

import {
  Button
} from 'vant';
import 'vant/lib/index.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style.less'

Vue.prototype.$mock = mock;
// register component to use
Vue.component('v-chart', ECharts)

Vue.use(Button);
// 以 plugin 形式使用时，请在入口处引入：
// import { DatetimePlugin } from "vux";
// Vue.use(DatetimePlugin);
// const FastClick = require('fastclick')
// FastClick.attach(document.body)

// import vueXlsxTable from 'vue-xlsx-table'
// Vue.use(vueXlsxTable, {rABS: false}) //Browser FileReader API have two methods to read local file readAsBinaryString and readAsArrayBuffer, default rABS false

Vue.use(ElementUI);

// you can set default global options and events when use
Vue.use(VueCodemirror,
  /* { 
  options: { theme: 'base16-dark', ... },
  events: ['scroll', ...]
} */
)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')