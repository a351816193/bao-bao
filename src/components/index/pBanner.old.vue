<template>
    <section class="banner">
        <div class="fn-clear">
            <div class="banner-left">
                <div class="img-wrap">
                    <el-carousel 
                        ref                 ="imgSlider"
                        indicator-position  ="none"
                        arrow               ="never"
                        @change             ="bannerChnge"
                        :interval           ="8000"
                        :autoplay           ="autoPlayed"
                        class               ="img">
                        <el-carousel-item v-for="(s, i) in sliders" :key="i">
                            <img :src="s.imgurl">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <a class="left-arrow" @click="$refs.imgSlider.prev()"><i class="iconfont icon-jiantoufuben1"></i></a>
                <a class="right-arrow" @click="$refs.imgSlider.next()"><i class="iconfont icon-jiantoufuben"></i></a>
            </div>
            <div class="banner-right" :class="sliders[activeIndex].class">
                    <template v-for="(s, i) in sliders">
                        <transition name="move" :key="i">
                            <div class="content" v-show="activeIndex === i">
                                <!-- 兼容xxxxxxxx需求 -->
                                <h4 v-if="s.desc" class="fn-ff-light desc">
                                    {{s.desc}}
                                </h4>
                                <template v-if="(s.title instanceof Array)">
                                    <h3 v-for="(item, index) in s.title" :key="index" class="fn-ff-light desc">
                                        {{item}}<br/>
                                    </h3>
                                </template>
                                <h3 v-else-if="s.title" class="title">{{s.title}}</h3>
                                <h4 v-if="s.subDesc" class="fn-ff-light desc">{{s.subDesc}}</h4>
                                <h3 v-if="s.subTitle" class="title">{{s.subTitle}}</h3>
                            </div>
                        </transition>
                    </template>
                <div class="bottom">
                    <div class="flex-middle">
                        <div class="count-wrap">
                            <span class="count">0</span><br/>
                            <span class="count">{{activeIndex + 1}}</span>
                            <span>|</span>
                            <span>{{'0' + sliders.length}}</span>
                        </div>
                        <div>
                            <span v-for="(s, i) in sliders" :key="i" class="dot" :class="{'active' : activeIndex === i}" @mouseenter="enterDote(i)" @mousemove="enterDote(i)" @mouseleave="leaveDote"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import slider1 from '@/images/b1.jpg'
import slider2 from '@/images/b2.jpg'
import slider3 from '@/images/b3.jpg'
import slider4 from '@/images/b4.jpg'
import slider5 from '@/images/5.jpg'
import slider6 from '@/images/6.jpg'
export default {
    data() {
        return {
            autoPlayed : true,
            sliders : [{
                desc    : '愿景',
                title   : ['智慧制造的领先者', '智慧城市的创新者', '员工与企业共同发展的示范者'],
                subDesc : '使命',
                subTitle: '让中国制造和城市生活更智慧',
                imgurl  : slider1,
                class   : 'bg-1'
            }, {
                desc    : '核心价值',
                title   : '诚信，协同，创新，共赢',
                imgurl  : slider2,
                class   : 'bg-2'
            }, {
                desc    : '智慧制造',
                title   : '以智慧制造提升企业竞争能力',
                imgurl  : slider3,
                class   : 'bg-3'
            }, {
                desc    : '智慧城市',
                title   : '以智慧城市创造社会美好生活',
                imgurl  : slider4,
                class   : 'bg-4'
            }],
            activeIndex : 0
        }
    },
    methods: {
        bannerChnge(i) {
            this.activeIndex = i;
        },
        enterDote(i) {
            this.autoPlayed = false
            this.$refs.imgSlider.setActiveItem(i)
        },
        leaveDote() {
            this.autoPlayed = true
        }
    }
}
</script>
<style lang="scss" scope>
    @import '../../style/param';
    .banner {
        position: relative;
        padding: 16.7% 0;
        overflow: hidden;
        & > div {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .left-arrow, .right-arrow {
            visibility: hidden;
            display: inline-block;
            position: absolute;
            top: 50%;
            z-index: 3;
            margin-top: -3.4rem;
            border: 1px solid $white;
            width: 6.8rem;
            height: 6.8rem;
            text-align: center;
            color: $white;
            opacity: 1;
            transition: all 0.3s;
            .iconfont {
                font-size: 3.4rem;
                line-height: 6.8rem;
                font-weight: bold;
            }
            &:hover {
                background: $white;
                color: $grey;
                opacity: 0.6;
            }
        }
        .left-arrow {
            left: 60px;
        }
        .right-arrow {
            right: 60px;
        }
    }
    .banner-left {
        position: relative;
        float: left;
        width: 62.5%;
        &:hover {
            .left-arrow, .right-arrow {
                visibility: visible;
            }
        }
        .img-wrap {
            position: relative;
            padding: 27% 0;
            height: 0;
            overflow: hidden;
            .img {
                position: absolute;
                width: 100%;
                top: 0;
            }
            .el-carousel, .el-carousel__container {
                height: 100%;
            }
            img {
                width: 100%;
            }
        }
    }
    .banner-right {
        position: relative;
        float: left;
        height: 100%;
        width: 37.5%;
        background-color: $blue;
        color: $white;
        transition: all 0.3s;
        .content {
            position: relative;
            top: -8%;           // xxxx
            height: 100%;
            margin-left: 40px;
            display: flex;
            flex-flow: column;
            justify-content: center;
            // transition: all 0.3;
            h3 {
                width: 100%;
                font-size: 1.4rem;
                font-weight: normal;
                color: $yellow;
                margin: 0;
                margin-bottom: 1rem;        // 2
                transition: all 0.3s;
            }
            h4 {
                width: 100%;
                color: $white;
                font-weight: normal;
                line-height: 1.5;
                font-size: 2.4rem;
                margin: 0;
                margin-bottom: 1rem;        // 1.2
            }
            p {
                width: 100%;
                color: $white;
            }
        }
        .bottom {
            position: absolute;
            left: 40px;
            bottom: 40px;
        }
        .count {
            display: inline-block;
            margin-top: 5px;
            width: 1rem;
            text-align: center;
            transition: all 0.3s;
            & + span {
                margin: 0 10px;
            }
        }
        .dot {
            transition: all 0.3s;
        }
    }
    .count-wrap {
        width: 90px;
    }
    .bg-6 {
        background: #d5472f;
        .count, .content h3 {
            color: #ffca13;
        }
        .dot.active {
            background: #ffca13;
        }
    }
    .bg-5 {
        background: #00a867;
        .count, .content h3 {
            color: #ffe41e;
        }
        .dot.active {
            background: #ffe41e;
        }
    }
    .bg-4 {
        background: #4A5876;
        .count, .content h3 {
            color: #fed751;
        }
        .dot.active {
            background: #fed751;
        }
    }
    .bg-3 {
        background: #125E98;
        .count, .content h3 {
            color: #ffca13;
        }
        .dot.active {
            background: #ffca13;
        }
    }
    .bg-2 {
        background: #02368C;
        .count, .content h3 {
            color: #49c7ff;
        }
        .dot.active {
            background: #49c7ff;
        }
    }
    .bg-1 {
        background: #176278;
        .count, .content h3 {
            color: #64b4ff;
        }
        .dot.active {
            background: #64b4ff;
        }
    }
    .move-enter, .move-leave-to {
        opacity: 0;
        left: 80px;
    }
    .move-enter-to, .move-leave {
        opacity: 1;
        left: 0;
    }
    .move-enter-active {
        position: relative;
        transition: all 1s;
    }

    @media only screen and (max-width: 768px) {
        .banner {
            // padding: 45% 0;
            padding: 83% 0; // 兼容xxxxx需求
            & > div {
                
            }
            .banner-left {
                width: 100%;
                // height: 59.3%;
                height: 32%; // 兼容xxxxx需求
                overflow: hidden;
                .left-arrow, .right-arrow {
                    display: none;
                }
            }
            .banner-right {
                width: 100%;
                // height: 40.7%;
                height: 68%; // 兼容xxxxx需求
                text-align: center;
                .content {
                    position: relative;
                    top: -8%;
                    margin-left: 0;
                    margin-top: 0;
                    margin-bottom: 0;
                    // transition: all 0.3;
                    h3 {
                        font-size: 1.2rem;
                        margin-bottom: 1.2rem;
                    }
                    h4 {
                        margin-bottom: 0.5rem;
                        font-size: 1.8rem;
                    }
                    p {
                        
                    }
                }
                .bottom {
                    left: 0;
                    bottom: 15%;
                    width: 100%;
                    .flex-middle {
                        justify-content: center;
                    }
                }
            }
            .count-wrap {
                display: none;
            }
        }
    }
    @media only screen and (min-width: 768px) {

    }
    @media only screen and (min-width: 992px) {

    }
    @media only screen and (min-width: 1200px) {
        .banner .left-arrow {
            left: 80px;
        }
        .banner .right-arrow {
            right: 80px;
        }
        .banner-right .content {
            margin-left: 80px;
        }
        .banner-right .bottom {
            left: 80px;
        }
    }
</style>
