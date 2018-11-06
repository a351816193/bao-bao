<template>
<div class="left-wrap" :class="{'open' : menuVisible}">
    <div class="left-img-wrap">
        <div>
            <img :src="headImg || currentNode.imageUrl">
        </div>
    </div>
    <div class="left-level-second"><span>{{currentNode.nodeName}}</span><i class="iconfont icon-icon88" @click="menuVisible = !menuVisible"></i></div>
    <div class="left-main">
        <div class="left-level-first">{{pNode.nodeName}}</div>
        <ul class="left-menu">
            <template v-for="(item, index) in menuList">
                <a 
                    :key    ="item.nodeId" 
                    target  ="_blank" 
                    :href   ="item.linkUrl"
                    v-if    ="item.linkType === 'LinkNoRelatedToChannelAndContent' && item.linkUrl">
                    <li
                        :class  ="{'active' : currentNode.nodeId === item.nodeId}"><span>{{item.nodeName}}</span>
                    </li>
                </a>
                <router-link 
                    v-else 
                    :key            ="item.nodeId" 
                    @click.native   ="menuVisible=false" 
                    tag             ="li" 
                    :to             ="path(item)" 
                    :class          ="{'active' : currentNode.nodeId === item.nodeId}">
                    <span>{{item.nodeName}}</span>
                </router-link>
            </template>
        </ul>
    </div>
</div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                menuVisible : false
            }
        },
        props: {
            menuList : {
                type: Array,
                default: () => []
            },
            currentNode: {
                type: [Object],
                default: () => {
                    return {}
                }
            },
            pNode: {
                type: [Object],
                default: () => {
                    return {}
                }
            },
            headImg: {
                type: [String]
            },
            root: {
                type: [String],
                default: 'article'
            }
        },
        methods: {
            path(item) {
                let path = ['', this.root]
                if (this.pNode.nodeId) {
                    path.push(this.pNode.nodeId)
                }
                path.push(item.nodeId)
                return path.join('/')
            }
        },
        mounted() {
            
        }
    }
</script>
<style lang="scss" scoped>
@import '../../style/param.scss';
.left-wrap {
    display: inline-block;
    width: 310px;
    padding: 40px 0 40px 60px;
    background: $white;
}
.left-img-wrap {
    display:none;
}
.left-menu {
    min-height: 500px;
    margin-top: -20px;
    li {
        position: relative;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
            color: $blue;
        }
        &.active {
            color: $blue;
            font-size: 2rem;
            &:after {
                content: '';
                display: inline-block;
                position: absolute;
                top: 18px;
                right: 0;
                height: 1px;
                width: 50px;
                background: $blue;
            }
        }
        & > span {
            display: inline-block;
            max-width: 195px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
.left-level-second, .left-level-first {
    display: none;
}
@media only screen and (max-width: 768px) {
    .left-wrap {
        position: fixed;
        width: 100%;
        overflow: hidden;
        padding: 0;
        z-index: 9;
        box-shadow: 0 1px 5px 0px #ded7d7;
        &.open {
            .left-level-second .iconfont {
                transform: rotate(180deg);
            }
            .left-main {
                opacity: 1;
                max-height: 355px;
                overflow: auto;
            }
        }
    }
    .left-main {
        max-height: 0;
        opacity: 0;
        transition: all 0.3s;
        overflow: hidden;
    }
    .left-menu {
        position: relative;
        margin-top: 0;
        min-height: auto;
        max-height: 300px;
        padding: 5px 30px 0 30px;
        overflow: auto;
        z-index: 2;
        margin-bottom: 15px;
        li {
            height: 30px;
            line-height: 30px;
            &.active {
                font-size: 1.4rem;
                font-weight: bold;
                &:after {
                    top: 0;
                    right: -20px;
                    font-family:"iconfont" !important;
                    font-size: 1.8rem;
                    font-style:normal;
                    font-weight: normal;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    content: "\e645";
                    background: none;
                    height: auto; 
                    width: auto;
                }
            }
        }
    }
    .left-level-second {
        display: block;
        background: $bgcolor;
        padding: 0 30px;
        height: 30px;
        color: $blue;
        & > * {
            display: inline-block;
            vertical-align: middle;
        }
        & > .iconfont {
            float: right;
            margin-right: -20px;
            transition: all 0.3s;
        }
    }
    .left-level-first {
        position: relative;
        display: block;
        margin: 0 30px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid $grey4;
        color: $grey1;
        font-size: 1.2rem;
        box-shadow: 0 7px 15px 2px $white;
        z-index: 3;
    }
}
@media only screen and (min-width: 768px) {
    .less .left-wrap {
        width: 100%;
        background: none;
        padding: 0;
        .left-img-wrap {
            position: relative;
            display: block;
            padding: 8% 0;
            & > div {
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                overflow:hidden;
                & > img {
                    width: 100%;
                    height: auto;
                }
            }
        }
        .left-menu {
            margin-top: -48px;
            min-height: initial;
            text-align: center;
            li {
                margin: 0 1px;
                display: inline-block;
                height: 48px;
                width: 180px;
                background: rgba(255, 255, 255, 0.6);
                font-weight: normal;
                line-height: 48px;
                &.active {
                    font-size: inherit;
                    background: rgba(255, 255, 255, 1);
                    &:after {
                        display: none;
                        top: 0;
                        right: 0;
                    }
                }
            }
        }
    }
}
@media only screen and (min-width: 1200px) {
    .left-wrap {
        padding: 40px 0 40px 80px;
        width: 330px;
    }
}
</style>
