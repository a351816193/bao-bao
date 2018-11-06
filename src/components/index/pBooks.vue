<template>
    <section class="section-wrap-2">
        <c-title title="核心产品" engTitle="Produces"></c-title>
        <ul class="product-list">
            <router-link tag="li" to="/article/50/51" class="fn-clear">
                <img :src="img1">
                <span>
                    <span>智慧制造</span>
                </span>
                
            </router-link><router-link tag="li"  to="/article/50/52" class="fn-clear">
                <img :src="img2">
                <span>
                    <span>智慧城市</span>
                </span>
                
            </router-link>
        </ul>
    </section>
</template>
<script>
import cTitle from './cTitle'
import img1 from '@/images/chanpinyi.png'
import img2 from '@/images/chanpiner.png'
export default {
    data() {
        return {
            img1,
            img2
        }
    },
    components: {
        cTitle
    }
}
</script>
<style lang="scss" scoped>
@import '../../style/param';
.product-list {
    li {
        position: relative;
        display: inline-block;
        width: 48%;
        cursor: pointer;
        &:first-child {
            margin-right: 4%;
        }
        img {
            float: left;
            display: inline-block;
            width: 100%;
            height: auto;
        }
        & > span {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            text-align: center;
            background: rgba(0, 0,0, 0.50);
            transition: all 0.3s;
            span {
                display: inline-block;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-top: -80px;
                margin-left: -180px;
                color: $white;
                background: rgba(255,255,255,0.10);
                border: 1px solid $white;
                height: 160px;
                width: 360px;
                font-size: 4.8rem;
                font-weight: normal;
                text-align: center;
                line-height: 160px;
                transition: all 0.3s;
                vertical-align: middle;
            }
        }
        &:hover, &:active {
            & > span {
                background: rgba(0, 0, 0, 0);
                span {
                    background: rgba(255,255,255,0.8);
                    color: $blue;
                }
            }
        }
    }
}
@media only screen and (max-width: 768px) {
    .product-list {
        li {
            & > span {
                span {
                    margin-top: -20px;
                    margin-left: -40px;
                    width: 80px;
                    height: 40px;
                    line-height: 40px;
                    font-size: 1.4rem;
                }
            }
        }
    }
}
@media only screen and (min-width: 768px) {

}
@media only screen and (min-width: 992px) {

}
@media only screen and (min-width: 1200px) {
    
}
</style>
