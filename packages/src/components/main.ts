import type { App } from 'vue'
import * as components from '@/components'

interface VueComponents {
  [key: string]: any
}

const _components: VueComponents = components

const createUiComponent = {
  install(app: App) {
    for (const key in _components) {
      app.component(key, _components[key])
    }
  },
}

export default createUiComponent
