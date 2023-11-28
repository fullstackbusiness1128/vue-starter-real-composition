import {createApp} from 'vue'
import App from './App.vue'
import router from '../src/router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BootstrapVue3 from 'bootstrap-vue-3';
import vClickOutside from "click-outside-vue3"
import VueApexCharts from "vue3-apexcharts";
import Maska from 'maska';
import VueFeather from 'vue-feather';
import Particles from "particles.vue3";
import '@/assets/scss/config/default/app.scss';
import '@vueform/slider/themes/default.css';

import {createPinia} from "pinia";

AOS.init({
    easing: 'ease-out-back',
    duration: 1000
})

const pinia = createPinia()
AOS.init({
    easing: 'ease-out-back',
    duration: 1000
})

createApp(App)
    .use(router)
    .use(pinia)
    .use(VueApexCharts)
    .use(BootstrapVue3)
    .component(VueFeather.type, VueFeather)
    .use(Maska)
    .use(Particles)
    .use(vClickOutside).mount('#app')