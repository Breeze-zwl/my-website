import {
    createApp
} from 'vue';
import '@/style/style.scss';
import App from '@/App.vue';
// 引入 pinia
import {
    createPinia
} from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from '@/router'
import naive from 'naive-ui'

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia).use(router).use(naive);
app.mount('#app')

// PWA
navigator.serviceWorker.addEventListener('controllerchange', () => {
    // 弹出更新提醒
    console.log("站点已更新，刷新后生效");
    ElMessage("站点已更新，刷新后生效");
})