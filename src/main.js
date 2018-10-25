// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Http from './libs/http';
import initComponents from './initComponents';
import Messagebox from './components/basic/Messagebox';
import './less/index.less';
import VeeValidate from 'vee-validate';
import messages from 'components/utils/zh_CN';
const config = {
  errorBagName: 'verrors', // change if property conflicts.
  delay: 0,
  locale: 'zh_CN',
  dictionary: {
    zh_CN: {
      messages
    }
  },
  events: 'blur',
  messages: null,
  strict: true
};
Vue.use(VeeValidate, config);

Vue.use(Http);
Vue.config.productionTip = false;
Vue.prototype.$Messagebox = Messagebox;
initComponents(Vue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
