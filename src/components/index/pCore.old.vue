<template>
    <section class="section-wrap">
        <el-row>
            <el-col :xs="24" :ms="24" :md="24" :lg="6">
                <c-title title="核心竞争" engTitle="Core Competence"></c-title>
            </el-col>
            <el-col :xs="24" :ms="24" :md="24" :lg="18">
                <div class="img-list-wrap">
                    <div class="img-list fn-clear">

                        <div class="whole">
                            <div class="item">
                                <div class="img-wrap">
                                    <img :src="img1">
                                </div>
                            </div>
                            <div class="item">
                                <div class="info">
                                    <h5>智慧城市</h5>
                                    <p>智慧城市就是运用信息和通信技术手段感测、分析、整整合城市运行核心系统的各类关键信息，从而对包括民生、保、公共安全、城市服务、工商业活动…</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="whole">
                            <div class="item">
                                <div class="img-wrap">
                                    <img :src="img2">
                                </div>
                            </div>
                            <div class="item">
                                <div class="info">
                                    <h5>智慧城市</h5>
                                    <p>智慧城市就是运用信息和通信技术手段感测、分析、整整合城市运行核心系统的各类关键信息，从而对包括民生、保、公共安全、城市服务、工商业活动…</p>
                                </div>
                            </div>
                        </div>

                        <div class="whole">
                            <div class="item">
                                <div class="img-wrap">
                                    <img :src="img3">
                                </div>
                            </div>
                            <div class="item">
                                <div class="info">
                                    <h5>智慧城市</h5>
                                    <p>智慧城市就是运用信息和通信技术手段感测、分析、整整合城市运行核心系统的各类关键信息，从而对包括民生、保、公共安全、城市服务、工商业活动…</p>
                                </div>
                            </div>
                        </div>

                        <div class="whole">
                            <div class="item">
                                <div class="img-wrap">
                                    <img :src="img4">
                                </div>
                            </div>
                            <div class="item">
                                <div class="info">
                                    <h5>智慧城市</h5>
                                    <p>智慧城市就是运用信息和通信技术手段感测、分析、整整合城市运行核心系统的各类关键信息，从而对包括民生、保、公共安全、城市服务、工商业活动…</p>
                                </div>
                            </div>
                        </div>

                        <div class="whole">
                            <div class="item">
                                <div class="img-wrap">
                                    <img :src="img5">
                                </div>
                            </div>
                            <div class="item">
                                <div class="info">
                                    <h5>智慧城市</h5>
                                    <p>智慧城市就是运用信息和通信技术手段感测、分析、整整合城市运行核心系统的各类关键信息，从而对包括民生、保、公共安全、城市服务、工商业活动…</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </section>
</template>
<script>
import cTitle from './cTitle'
import img1 from '@/images/img1.jpg'
import img2 from '@/images/img2.jpg'
import img3 from '@/images/img3.jpg'
import img4 from '@/images/img4.jpg'
import img5 from '@/images/img5.jpg'
import img6 from '@/images/img6.jpg'
export default {
    data() {
        return {
            img1, img2, img3, img4, img5, img6
        }
    },
    components: {
        cTitle
    }
}
</script>
<style lang="scss" scope>
@import "../../style/param";

.img-list-wrap {
    margin-left: -60px;
    width: calc(100% + 60px);
    background: $white;
}
.img-list {
    box-shadow: 0 0 0 1px $grey2;
    .whole {
        float: left;
        width: 20%;
        padding: 20% 0;
        position: relative;
        background: $blue;
        overflow: hidden;
        &:nth-child(odd) {
            .item:nth-child(1) {
                top: 0;
            }
            .item:nth-child(2) {
                top: 50%;
            }
        }
        &:nth-child(even) {
            .item:nth-child(1) {
                top: 50%;
            }
            .item:nth-child(2) {
                top: 0;
            }
        }
        &:hover {
            .info {
                color: $blue;
                transform-origin: 50% 50%;
                transform: scale(1.1, 1.1);
                -webkit-transform-origin: 50% 50%;
                -webkit-transform: scale(1.1, 1.1);
                -o-transform-origin: 50% 50%;
                -o-transform: scale(1.1, 1.1);
                -moz-transform-origin: 50% 50%;
                -moz-transform: scale(1.1, 1.1);
            }
            img {
                transform: scale(1.1);
            }
        }
    }
    .item {
        float: left;
        width: 100%;
        position: absolute;
        left: 0;
        padding: 50% 0;
        overflow: hidden;
        & > * {
            position: absolute;
            top: 0;
            left: 0;
        }
        .img-wrap {
            width: 100%;
            height: 100%;
            transition: all 0.3s;
            overflow: hidden;
        }
        .info {
            width: 100%;
            height: 100%;
            padding: 15%;
            overflow: hidden;
            background: $white;
            transition: all 0.3s;
        }
        img {
            height: 120%;
            transition: all 0.3s;
        }
        h5 {
            font-weight: normal;
            font-family: $fontlight;
            font-size: 2.4rem;
            text-align: center;
        }
        p {
            margin-top: 12%;
            margin-bottom: 0;
            font-family: $fontlight;

            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            overflow: hidden;
            line-height: 1.3;
        }
    }
}
@media only screen and (max-width: 768px) {
    .img-list-wrap {
        // margin-left: -30px;
        // width: calc(100% + 30px);
        margin-left: 0;
        width: calc(100% - 30px);
    }
    .img-list {
        .whole {
            width: 100%;
            padding: 25% 0;
            .item {
                width: 50%;
                padding: 25% 0;
                h5 {
                    font-size: 1.92rem;
                    text-align: left;
                }
                p {
                    font-size: 1.2rem;
                }
                .info {
                    &:hover {
                        color: inherit;
                        transform: none;
                    }
                    &:active {
                        color: $blue;
                        transform-origin: 50% 50%;
                        transform: scale(0.9, 0.9);
                    }
                }
                img {
                    &:hover {
                        transform: none;
                    }
                    &:active {
                        transform: scale(1.1);
                    }
                }
            }
            &:nth-child(odd) {
                .item:nth-child(1) {
                    top: 0;
                    left: 0;
                }
                .item:nth-child(2) {
                    top: 0;
                    left: 50%;
                }
            }
            &:nth-child(even) {
                .item:nth-child(1) {
                    top: 0;
                    left: 50%;
                }
                .item:nth-child(2) {
                    top: 0;
                    left: 0;
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
    .img-list-wrap {
        padding: 5%;
        .item p {
            font-size: 1.2rem;
        }
        .item h5 {
            font-size: 2.2rem;
        }
    }
    .section-wrap {
        margin-top: 80px;
    }
}
@media only screen and (min-width: 1800px) {
    .img-list-wrap {
        padding: 5%;
        .item p {
            font-size: 1.4rem;
        }
        .item h5 {
            font-size: 2.4rem;
        }
    }
    .section-wrap {
        margin-top: 80px;
    }
}
</style>
