<template>
    <section class="section-wrap-2">
        <c-title title="产品手册" engTitle="Produces"></c-title>
        <div class="content">
            <div class="book-flex-box fn-clear">
                <div class="flex-item" v-for="i in 5" :key="i">
                    <div class="fn-bg-blue">
                        <div class="book-view">
                            <div class="img-wrap">
                                <img :src="news1">
                            </div>
                            <div class="text-area">
                                <span>产品手册</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import cTitle from './cTitle'
import news1 from '@/images/news1.png'
export default {
    data() {
        return {
            news1
        }
    },
    components: {
        cTitle
    }
}
</script>
<style lang="scss" scoped>
@import '../../style/param';
.book-flex-box {
    padding-top: 10px;
    margin-top: -10px;
    margin-left: -20px;
    width: calc(100% + 40px);
    .flex-item {
        float: left;
        width: calc(20% - 40px);
        margin: 0 20px;
    }
}
.book-view {
    transition: all 0.3s;
    color: $blue;
    cursor: pointer;
    &:hover {
        transform: translate(-8px, -8px);
    }
}
.img-wrap {
    padding: 50% 0;
    position: relative;
    overflow: hidden;
    min-width: 120px;
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
}
.text-area {
    position: relative;
    padding: 25% 0;
    background: $white;
    span {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 100%;
        font-size: 2.4rem;
    }
}
@media only screen and (max-width: 768px) {
    .book-flex-box {
        display: flex;
        align-items: center;
        margin-left: -15px !important;
        margin-right: -15px !important;
        overflow: visible;

        // width: calc(100% + 40px);
        .flex-item {
            float: initial;
            width: 100%;
            margin: 0 15px !important;
        }
    }
    .book-view:hover {
        transform: none;
    }
    .book-view:active {
        transform: translate(-8px, -8px);
    }
    .section-wrap-2 {
        .content {
            margin-top: -10px;
            padding-top: 10px;
            overflow-y: scroll;
            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
    .text-area span {
        font-size: 1.44rem;
    }
}
@media only screen and (min-width: 768px) {

}
@media only screen and (min-width: 992px) {

}
@media only screen and (min-width: 1200px) {
    .text-area span {
        top: 30px;
        left: 30px;
    }
}
</style>
