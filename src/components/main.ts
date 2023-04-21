import type { App } from 'vue'
import { ProgressCircular, ProgressRectangle } from '@/components'

// https://ja.vuejs.org/guide/reusability/plugins.html#introduction
export default {
  install(app: App) {
    app.component('ProgressRectangle', ProgressRectangle)
    app.component('ProgressCircular', ProgressCircular)
  },
}

export { ProgressRectangle, ProgressCircular }
