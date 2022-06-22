import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import './animation.css';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [{ path: '/', component: App }];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
