import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import Notifications from "vue-notification";

Vue.prototype.$http = axios;
Vue.use(Notifications);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
