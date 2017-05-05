import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import axios from 'axios';
import Vodal from 'vodal';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import 'vodal/fade.css';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
//import '../static/css/theme-green/index.css';       // 浅绿色主题
//import 'jquery/dist/jquery.js'
//import $ from 'jquery'
import jQuery from 'jquery';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/collapse.js'
import 'bootstrap/fonts/glyphicons-halflings-regular.woff'
import "babel-polyfill";
import Vuex from 'vuex';
import store from './vuex/store'

Vue.use(ElementUI);
Vue.component(Vodal.name, Vodal)
Vue.prototype.$toastr = toastr

Vue.prototype.$http = axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

// export default {
// 	store
// }