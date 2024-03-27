import { createApp } from 'vue'
import './style.css';
import router from './router.js';
import { createPinia } from 'pinia';
import App from './App.vue'

const pinia = createPinia();
const app = createApp(App);
app.use(router)
.use(pinia);
app.mount('#app')
