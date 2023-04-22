import { createApp } from 'vue'
import App from './App.vue'
import createUiComponent from '../components/main'

createApp(App).use(createUiComponent).mount('#app')

// createApp(App).mount('#app')
