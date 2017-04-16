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
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";

Vue.use(ElementUI);
Vue.component(Vodal.name, Vodal)
Vue.prototype.toastr = toastr

Vue.prototype.$http = axios

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');