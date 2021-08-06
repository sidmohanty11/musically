import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VeeValidatePlugin from './includes/validation';
import store from './store';
import './assets/tailwind.css';
import './assets/main.css';

createApp(App).use(store).use(router).use(VeeValidatePlugin)
  .mount('#app');
