import ProgressRectangle from './components/ProgressRectangle.vue'

export default {
  install(app, options = {}) {
    app.component('ProgressRectangle', ProgressRectangle)
  },
}
