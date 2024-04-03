import { createApp } from 'vue'
import './style.css';
import App from './App.vue';
import naive from 'naive-ui';
import { useMessage } from 'naive-ui';
import routers from '../routers';

const app = createApp(App);
app.use(routers);
app.use(naive);
app.mount('#app');
