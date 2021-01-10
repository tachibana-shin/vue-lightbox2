import Lightbox from "./vue-lightbox.vue"
import "./vue-lightbox.scss"

const LightboxPlugin = {
  install(Vue) {
    Vue.component("vue-lightbox", Lightbox)
  }
}

if (typeof window !== "undefined" && window.Vue) {
  Vue.use(LightboxPlugin)
}

export const VueLightbox = Lightbox
export default LightboxPlugin
