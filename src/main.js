import { createApp } from 'vue';
import './sass/app.scss';
import router from './router.js';
import { Quasar, Notify, Loading } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css' // Import icon libraries
import 'quasar/src/css/index.sass';// Import Quasar css
import App from './App.vue';

const app = createApp(App);
app.use(router)
    .use(Quasar, {
        plugins: {
            Notify,
            Loading
        },
    });
app.mount('#app')
