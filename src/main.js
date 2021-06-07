import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App)
  .use(store)
  .use(router);

app.directive('focus', {
  mounted(el) {
    el.focus();
  },
});

app.mount('#app');
