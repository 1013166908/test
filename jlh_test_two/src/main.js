// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import less from 'less'
Vue.use(less)
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

import {List} from 'vant';
Vue.use(List);
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);
import axios from 'axios'
// axios全局配置，允许跨域带cookie
axios.defaults.withCredentials = true;
Vue.prototype.$http=axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
