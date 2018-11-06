<template>
    <div>
        <p-banner></p-banner>
        <p-core></p-core>
        <p-books></p-books>
        <p-news></p-news>
        <p-video></p-video>
        <!-- <p-map></p-map> -->
        <!-- <div class="back-top"><i class="iconfont icon-uparrow"></i></div> -->
    </div>
</template>
<script>
import pBanner from '@/components/index/pBanner.old'
import pCore from '@/components/index/pCore'
import pNews from '@/components/index/pNews'
import pVideo from '@/components/index/pVideo'
import pBooks from '@/components/index/pBooks'
import pMap from '@/components/index/pMap'

function backTo(top, time) {
    let clientHeight    = document.documentElement.clientHeight
    let v               = clientHeight / time / 100;
    let nowHeight       = 0;
    let el              = {};
    if (document.documentElement && document.documentElement.scrollTop) {
        el = document.documentElement;
    } else if (document.body){
        el = document.body;
    }
    let counter = setInterval(_ => {
        if (el.scrollTop <= top) {
            clearInterval(counter);
            counter = null;
            return;
        }
        nowHeight += v;
        el.scrollTop = el.scrollTop - nowHeight;
    }, 10)
}

export default {
    data() {
        return {
            scrollTop: 0,
            clientHeight: 0,
            open: false,
            time: 2
        }
    },
    methods: {
        backTop() {
            backTo(0, this.time);
        }
    },
    mounted() {
        
    },
    components: {
        pBanner,
        pCore,
        pNews,
        pVideo,
        pBooks,
        pMap
    }
}
</script>
<style>
.back-top {
    transform: translateZ(0)
}
</style>

<style lang="scss" scoped>
@import '../style/param';

@media only screen and (max-width: 768px) {
    .main {
        min-width: initial;
        padding-top: 50px;
    }
}
@media only screen and (min-width: 768px) {

}
@media only screen and (min-width: 992px) {
    
}
@media only screen and (min-width: 1200px) {
    
}
</style>
