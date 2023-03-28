import PixelButton from './src/main.vue'

PixelButton.install = function (Vue) {
    Vue.component(PixelButton.name, PixelButton)
}

export default PixelButton