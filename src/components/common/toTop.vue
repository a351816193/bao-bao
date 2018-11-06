<template>
    <div v-Scroll="scrollChange">
        <transition name="fade">
            <div class="back-top" @click="backTop" v-show="scrollTop > clientHeight"><img :src="backImg"><div>TOP</div></div>
        </transition>
    </div>
</template>
<script>
import Scroll from '@/directives/scroll'
import backImg from '@/images/huidaodingbu.png'
import Common from '@/utils/common'
export default {
    data() {
        return {
            scrollTop: 0,
            clientHeight: window.innerHeight,
            backImg
        }
    },
    methods: {
        backTop() {
            Common.setScrollTop(0)
        },
        scrollChange() {
            this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        }
    },
    directives: {
        Scroll
    }
}
</script>
<style lang="scss" scoped>
@import '../../style/param';
.back-top {
    position: fixed;
    right: 0;
    bottom: 20%;
    background: $blue;
    width: 80px;
    height: 200px;
    text-align: center;
    color: $white;
    font-family: $fontlight;
    box-shadow: 0 0 1px 0 $white;
    cursor: pointer;
    img {
        margin-top: 40px;
        margin-bottom: 40px;
    }
    .iconfont {
        font-size: 4.8rem;
        color: $white;
    }
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
}
@media only screen and (max-width: 768px) {
    .back-top {
        display: none;
    }
}
@media only screen and (min-width: 768px) {

}
@media only screen and (min-width: 992px) {
    
}
@media only screen and (min-width: 1200px) {
    
}

</style>
