<template>
    <div>
        <section class="section-wrap-2">
            <c-title title="公司视频" engTitle="Video"></c-title>
            <div class="video-wrap">
                <video :src="videoUrl" id="videoPlayer" loop controls></video>
                <!-- <div class="video-controls">
                    <transition name="fade">
                        <div class="center-control" v-show="player && player.paused">
                            <a @click="play"><i class="iconfont icon-bofang2"></i></a>
                        </div>
                    </transition>
                    <div class="bottom-control">
                        
                    </div>
                </div> -->
                <transition name="fade">
                    <span v-show="!videoVisible">
                        <div class="video-img">
                            <img :src="img">
                        </div>
                        <div class="video-mask">
                            <a @click="play"><i class="iconfont icon-bofang"></i></a>
                        </div>
                    </span>
                </transition>
            </div>
        </section>
        <div class="video-bottom">
            
        </div>
    </div>
</template>
<script>
import cTitle from './cTitle'
import img from '@/images/videwrap.jpg'
export default {
    data() {
        return {
            videoUrl: 'http://tv.baosteel.com:80/vnews/movie/baosight2017.mp4',
            videoVisible: false,
            player: null,
            img
        }
    },
    methods: {
        play() {
            if (!this.player) {
                this.player = this.$el.querySelector('#videoPlayer');
            }
            this.player.play();
            this.videoVisible = true;
        },
        pause() {
            this.player.pause();
        }
    },
    watch: {
        'player.readyState' : function(value) {
            console.log(value)
        },
        'player.paused' : function(value) {
            
        }
    },
    mounted() {
        this.player = this.$el.querySelector('#videoPlayer');
    },
    components: {
        cTitle
    }
}
</script>
<style lang="scss" scope>
@import '../../style/param';
.video-wrap {
    position: relative;
    margin: 0 auto;
    width: 80%;
    padding: 22.5% 0;
    video {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        background: $dark;
    }
    .video-mask {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        height: 100%;
        width: 100%;
        overflow: hidden; 
        background: rgba(30, 30, 30, 0.6); 
        text-align: center;
        a {
            display: inline-block;
            position: relative;
            top: 50%;
            margin-top: -3.4rem;
        }
        .iconfont {
            font-size: 6.8rem;
            color: $white;
        }
    }
    .video-img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
        img {
            width: 120%;
        }
    }
}
.video-bottom {
    background: $blue;
}
@media only screen and (max-width: 768px) {
    .video-wrap {
        // margin: 0 8%;
    }
    .video-bottom {
        height: 100px;
        margin-top: -50px;
    }
}
@media only screen and (min-width: 768px) {
    .video-bottom {
        height: 160px;
        margin-top: -80px;
    }
}
@media only screen and (min-width: 992px) {
    .video-bottom {
        height: 160px;
        margin-top: -80px;
    }
}
@media only screen and (min-width: 1200px) {
    .video-wrap {
        // margin: 0 15%;
    }
    .video-bottom {
        height: 240px;
        margin-top: -120px;
    }
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
}
</style>
