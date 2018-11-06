<template>
    <section class="banner">
        <div class="img-wrap">
            <el-carousel 
                ref                 ="imgSlider"
                :interval           ="8000"
                class               ="img">
                <el-carousel-item v-for="(s, i) in sliders" :key="i">
                    <img :src="s">
                </el-carousel-item>
            </el-carousel>
        </div>
    </section>
</template>
<script>
import slider1 from '@/images/banner1.jpg'
import slider2 from '@/images/banner2.jpg'
import slider3 from '@/images/banner3.jpg'
import slider4 from '@/images/banner4.jpg'
import slider5 from '@/images/banner5.jpg'
import slider6 from '@/images/banner6.jpg'
export default {
    data() {
        return {
            sliders: [slider1, slider2, slider3, slider4, slider5, slider6]
        }
    },
    methods: {
        
    }
}
</script>
<style lang="scss" scope>
    @import '../../style/param';
    .img-wrap {
        position: relative;
        padding: 16.8% 0;
        overflow: hidden;
        .img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            .el-carousel__container {
                height: 100%;
                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
    
    @media only screen and (max-width: 768px) {
        .el-carousel__button {
            width: 10px;
        }
    }
    @media only screen and (min-width: 768px) {

    }
    @media only screen and (min-width: 992px) {

    }
    @media only screen and (min-width: 1200px) {
        
    }
</style>
