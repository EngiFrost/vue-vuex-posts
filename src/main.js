import { createApp } from 'vue'
import store from './store'
import App from './App.vue'

const app = createApp(App).mount('#app')

app.use(store)