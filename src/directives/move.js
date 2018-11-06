import Vue from 'vue'
export default {
    bind: function (el, binding) {
        let startPosition = 0;
        let locked = true;
        el.ontouchstart = (event) => {
            let touch = event.touches[0];
            locked = false;
            startPosition = touch.pageX;
        }
        el.ontouchmove = (event) => {
            let touch = event.touches[0];
            if (locked) {
                return;
            }
            if (touch.pageX - startPosition > 10) {
                binding.value('right')
                locked = true;
            } else if (touch.pageX - startPosition < -10) {
                binding.value('left')
                locked = true;
            }
        }
        el.ontouchend = (event) => {
            locked = false;
        }
    }
}