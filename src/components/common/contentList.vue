<template>
    <router-link tag="li" :to="path" class="item">
        <div class="whole fn-clear">
            <div class="part left">
                <img :src="item.imageUrl ? item.imageUrl : news1">
            </div>
            <div class="part right">
                <div>
                    <!-- <span class="label-primary">{{currentNode.nodeName}}</span> -->
                    <span class="label-primary">{{item.addDate.split(' ')[0].replace(/\-+/g, '.')}}</span> 
                    <p class="fn-clamp-2">
                        {{item.title}}
                    </p>
                    <!-- <span class="time">
                        {{item.addDate.split(' ')[0].replace(/\-+/g, '.')}}
                    </span> -->
                </div>
            </div>
        </div>
    </router-link>
</template>
<script>
import news1 from '@/images/news1.png'
import {mapGetters} from 'vuex'
export default {
   data() {
       return {
           news1
       }
   },
   props: {
       item: {
           type: Object,
           default: () => {return {}}
       },
       currentNode: {
           type: Object,
           default: () => {return {}}
       },
   },
   computed: {
       path() {
           let path = '/article/' + this.currentNode.parentId + '/' + this.currentNode.nodeId
            // 如果item不存在，则为内容
           if (!this.item.linkType) {
               path += '?contentid=' + this.item.id
           } else {
               path += '/' + this.item.nodeId
           }
           return path
       }
   },
   mounted() {
       
   }
}
</script>
<style lang="scss" scoped>
@import '../../style/param';
    .item {
        float: left;
        position: relative;
        width: calc(50% - 40px);
        min-width: 440px;
        margin-bottom: 40px;
        margin-left: 20px;
        margin-right: 20px;
        background: $blue;
        cursor: pointer;
        .whole {
            transition: all 0.3s;
            &:hover {
                transform: translate(-8px, -8px)
            }
        }
    }
    .part {
        float: left;
        width: 50%;
        position: relative;
        padding: 14% 0;
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
            font-size: 1.4rem;
        }
        img {
            width: 100%;
        }
    }
    @media only screen and (max-width: 768px) {
        .item {
            float: initial;
            margin: 20px 0;
            width: 100%;
            min-width: initial;
            .part.right {
                & > div {
                    padding: 6%;
                }
                .p {
                    margin: 2% 0;
                    font-size: 1.4rem;
                }
                .time {
                    font-size: 1.2rem;
                }
            }
        }
    }
    @media only screen and (min-width: 768px) {
        .item {
            margin-top: 40px;
            margin-bottom: 0;
        }
        .part {
            .p {
                margin-bottom: 0;
                min-height: 50px;
            }
        }
        .less .item {
            margin-top: 0;
            margin-bottom: 40px;
        }
    }
    @media only screen and (min-width: 992px) {

    }
    @media only screen and (min-width: 1200px) {
        .part.right {
            .p {
                font-size: 1.4rem;
            }
        }
    }
    @media only screen and (min-width: 1800px){
        .part.right {
            .p {
                font-size: 1.8rem;
                margin-bottom: 16px;
                min-height: initial;
            }
        }
    }
</style>
