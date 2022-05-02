import { createApp } from 'vue'
import App from './App.vue'
import 'animate.css';
import Toaster from "@meforma/vue-toaster";

const app = createApp(App);

app.use(Toaster);
createApp(App).mount('#app')