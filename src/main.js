import { createApp } from 'vue';
import './sass/app.scss';
import router from './router.js';
import { createPinia } from 'pinia';
import { Quasar,Notify } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css' // Import icon libraries
import 'quasar/src/css/index.sass';// Import Quasar css
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);
app.use(router)
    .use(Quasar, {
        plugins: {
            Notify
        }, // import Quasar plugins and add here
    })
    .use(pinia);
app.mount('#app')
