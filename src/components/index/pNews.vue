<template>
<div class="fn-clear">
    <section class="section-wrap-2">
        <c-title title="最新资讯" engTitle="News"></c-title>
        <div class="list-wrap">
            <ul class="info-list">
                <Content-List :currentNode="secondLevelMenuListById[42]" v-for="(item, index) in newsList" v-if="index < 3" :item="item" :key="index"></Content-List>
                <router-link tag="li" to="/article/41/42" class="last">
                    <div class="content">
                        <p>
                            READ MORE
                        </p>
                        <span class="arrow"><i class="iconfont icon-jiantou"></i></span>
                    </div>
                </router-link>
            </ul>

            <el-carousel ref="newsSlide" indicator-position="none" :autoplay="false" arrow="never" class="info-list-move" v-Move="move">
                <el-carousel-item v-for="(item, index) in newsList" v-if="index < 6" :key="index" class="item">
                    <router-link tag="div" :to="'/article/41/42?contentid=' + item.id" class="whole fn-clear">
                        <div class="part left">
                            <img :src="item.imageUrl ? item.imageUrl : news1">
                        </div>
                        <div class="part right">
                            <div>
                                <span class="label-primary">{{item.addDate.split(' ')[0].replace(/\-+/g, '.')}}</span>
                                <div class="p fn-clamp-2">
                                    {{item.title}}
                                </div>
                                <!-- <span class="time">
                                    
                                </span> -->
                            </div>
                        </div>
                    </router-link>
                </el-carousel-item>
                <el-carousel-item :key="newsList.length" class="last">
                    <router-link tag="div" to="/article/41/42" class="content">
                        <p>
                            READ MORE
                        </p>
                        <span class="arrow"><i class="iconfont icon-jiantou"></i></span>
                    </router-link>
                </el-carousel-item>
            </el-carousel>
        </div>
    </section>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
import cTitle from './cTitle'
import news1 from '@/images/news1.png'
import Move from '@/directives/move'
import ContentList from '@/components/common/contentList'
import {API_GetContentByNodeId} from '@/fetch/restApi'
export default {
    data() {
        return {
            news1,
            activeIndex : 0,
            newsList    : []
        }
    },
    computed: {
        ...mapGetters(['secondLevelMenuListById'])
    },
    methods: {
        next() {
            this.$refs.newsSlide.next()
        },
        prev() {
            this.$refs.newsSlide.prev()
        },
        move(type) {
            if (type === 'right') {
                this.prev()
            }
            if (type === 'left') {
                this.next()
            }
        },
        getNewsList() {
            API_GetContentByNodeId({
                nodeId : 42,
                pageSize: 5,
                pageNo: 0
            }).then(success => {
                this.newsList = success.data.data
            }).catch(error => {

            })
        }
    },
    mounted() {
        this.getNewsList()
    },
    components: {
        cTitle,
        ContentList
    },
    directives: {
        Move
    }
}
</script>
<style lang="scss" scope>
@import '../../style/param';
.info-list {
    margin-left: -20px;
    margin-right: -20px;
    margin-bottom: 0;
    margin-top: 0;
    .item:nth-child(1)  {
        margin-top: 0;
    }
    .item:nth-child(2) {
        margin-top: 0;
    }
    .item, .last {
        float: left;
        position: relative;
        width: calc(50% - 40px);
        min-width: 440px;
        margin-top: 40px;
        margin-left: 20px;
        margin-right: 20px;
    }
    .item {
        background: $blue;
        cursor: pointer;
        .whole {
            transition: all 0.3s;
            &:hover {
                transform: translate(-8px, -8px)
            }
        }
    }
    .last {
        background: $white;
        vertical-align: middle;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
            color: $white;
            background: $blue;
        }
        .content {
            position: relative;
            padding: 14% 0;
        }
        .content > * {
            position: absolute;
            top: 50%;
        }
        p {
            width: 100%;
            text-align: center;
            display: inline-block;
            margin: -1rem 0 0 0;
            font-size: 2.4rem
        }
        .arrow {
            display: inline-block;
            margin-top: -2.5rem;
            right: 40px;
            i.iconfont.icon-jiantou {
                font-size: 4.8rem;
            }
        }
    }
    .part {
        float: left;
        width: 50%;
        position: relative;
        padding: 16.5% 0;
        overflow: hidden;
        font-family: $fontlight;
        color: $blue;
        &.right {
            background: $white;
            & > div {
                padding: 20px;
                bottom: 0;
            }
        }
        & > * {
            position: absolute;
            top: 0;
            left: 0;
        }
        .p {
            font-size: 1.6rem;
        }
        img {
            width: 100%;
        }
    }
}
.info-list-move {
    display: none;
    position: relative;
    padding: 16% 0;
    & > .el-carousel__container {
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
    }
    .item, .last {
        width: 100%;
    }
    .item {
        background: $blue;
        .part {
            float: left;
            width: 50%;
            position: relative;
            padding: 16% 0;
            overflow: hidden;
            font-family: $fontlight;
            color: $blue;
            &.right {
                background: $white;
                font-size: 1.2rem;
                & > div {
                    padding: 20px;
                    bottom: 0;
                }
            }
            & > * {
                position: absolute;
                top: 0;
                left: 0;
            }
            .p {
                margin-top: 15px;
                font-size: 1.2rem;
            }
            img {
                width: 100%;
            }
            .time {
                font-size: 1.2rem;
            }
        }
    }
    .last {
        background: $white;
        vertical-align: middle;
        transition: all 0.3s;
        &:active {
            color: $blue;
        }
        .content {
            position: relative;
            padding: 16% 0;
        }
        .content > * {
            position: absolute;
            top: 50%;
        }
        p {
            width: 100%;
            text-align: center;
            display: inline-block;
            margin: -1rem 0 0 0;
            font-size: 2.4rem
        }
        .arrow {
            display: inline-block;
            margin-top: -2.5rem;
            right: 40px;
            i.iconfont.icon-jiantou {
                font-size: 4.8rem;
            }
        }
    }
}
.time {
    color: $blue;
}
@media only screen and (max-width: 768px) {
    ::-webkit-scrollbar {
        display: none;
    }
    .list-wrap {
        margin-top: -10px;
        padding-top: 10px;
        margin-left: -10px;
        padding-left: 10px;
        overflow-y: scroll;
    }
    .info-list {
        display: none;
        margin-left: 0;
        margin-right: 0;
        .item, .last {
            width: 100%;
            min-width: initial;
            margin-top: 0;
            margin-left: 0;
            margin-right: 0;
        }
        .last {
            .content {
                padding: 16% 0;
            }
        }
        .part {
            padding: 16% 0;
        }
        .item .whole:hover {
            transform: none;
        }
        .item .whole:active {
            transform: translate(-8px, -8px);
        }
        .last:hover {
            color: inherit;
            background: $white;
        }
        .last:active {
            color: $white;
            background: $blue;
        }
        .part.right {
            font-size: 1.2rem;
            .p {
                font-size: 1.44rem;
            }
        }
    }
    .info-list-move {
        display: block;
    }
}
@media only screen and (min-width: 768px) {

}
@media only screen and (min-width: 992px) {

}
@media only screen and (min-width: 1200px) {
    .info-list {
        .part.right {
            .p {
                font-size: 2.0rem;
            }
        }
    }
}
@media only screen and (min-width: 1800px) {
    .info-list {
        .part.right {
            .p {
                font-size: 2.4rem;
            }
            & > div {
                padding: 60px 40px;
            }
        }
        .last .arrow {
            right: 80px;
        }
    }
}
</style>
