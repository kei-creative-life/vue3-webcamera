import { createApp } from 'vue'
import App from './App.vue'
import mdiVue from 'mdi-vue/v3'
import * as mdiJs from '@mdi/js'

import createUiComponent from './framework'
createApp(App).use(mdiVue, { icons: mdiJs }).use(createUiComponent).mount('#app')

// createApp(App).mount('#app')
