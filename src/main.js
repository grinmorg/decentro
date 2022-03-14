import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import BaseIcon from './components/atoms/base/BaseIcon.vue'

const app = createApp(App)

app.component('BaseIcon', BaseIcon)

app.mount('#app');
