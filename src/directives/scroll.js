export default {
    bind(el, binding) {
        window.addEventListener('scroll', binding.value)
    },
    unbind(el, binding) {
        window.removeEventListener('scroll', binding.value)
    }
}