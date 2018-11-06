<template>
<div :class="{'shrink' : toSmall}" class="head-main" v-Scroll="scrollChange">
    <header class="head-wrap">
        <router-link to="/"><img class="logo" :src="bigLogo"></router-link>
        <ul class="nav" :class="{'openMenu' : open}">
            <transition name="fade">
                <li class="li1 fn-clear" v-show="!toSmall">
                    <div class="info1"><img :src="textImg"></div>
                    <div class="info2">
                        <div class="left">
                            <!--
                            <span class="fn-mr-5">SH600845</span>
                            <span>宝信软件</span>
                            <span class="fn-mr--8"><i class="iconfont icon-sanjiao fn-red"></i></span>
                            <span class="fn-mr-5">15.580</span>
                            <span class="fn-mr-50">0.32%</span>
                            -->
                            <span class="fn-mr-5">客服热线</span>
                            <span class="fn-mr-5">800-820-0220</span>
                            <span class="fn-mr-10">400-821-0860</span>
                            <router-link to="/article/45" class="fn-mr-10 fn-blue">{{aboutUs.nodeName}}</router-link>
                            <a target="_blank" href="//en.baosight.com/" class="lang">EN</a>
                        </div>
                        <div class="right">
                            <el-popover
                                ref="weixin"
                                placement="bottom"
                                width="260"
                                trigger="hover">
                                <img class="weixin-img" :src="weixinImg" alt="" />
                            </el-popover>
                            <router-link to="/article/41/44"><i v-popover:weixin class="iconfont icon-weixin"></i></router-link>
                        </div>
                    </div>
                </li>
            </transition>
            <li class="li2 fn-clear">
                <div class="menus fn-clear">
                    <template v-if="$store.getters.firstLevelMenuList.length > 0" >
                        <router-link @click.native="open=false" :class="{'active' : currentNodeId === item.nodeId}" v-if="index < 6 && !item.linkUrl" :to="'/article/' + item.nodeId" v-for="(item, index) in $store.getters.firstLevelMenuList" :key="item.nodeId">{{item.nodeName}}</router-link>
                        <a v-else-if="item.linkUrl" :href="item.linkUrl" target="_blank">{{item.nodeName}}</a>
                    </template>
                </div>

                <div class="search" v-show="!toSmall">
                    <a v-if="!searchVisible" @click="searchVisible=true"><i class="iconfont icon-chaxun"></i></a>
                    <a v-else @click="searchVisible=false"><i class="iconfont icon-shanchu fn-blue"></i></a>
                </div>
            </li>
            <span class="operate-wrap">
                <a @click="open=false"><i class="iconfont icon-weibiaoti101"></i></a>
            </span>
        </ul>
        <span class="operate-wrap">
            <a @click="open=true"><i class="iconfont icon-icon-test"></i></a>
        </span>
    </header>
    <transition name="fade">
        <div class="search-wrap" :class="{'visible' : searchVisible}" v-show="!toSmall">
            <div class="search-content fn-clear">
                <input placeholder="Search" v-model="searchText" @keyup.13="search">
                <button @click="search"><i class="iconfont icon-chaxun"></i></button>
            </div>
        </div>
    </transition>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
import bigLogo from '@/images/baoxing_biglogo.png'
import textImg from '@/images/slogan2.png'
import weixinImg from '@/images/qrcode1.png'
import Scroll from '@/directives/scroll'
export default {
    data() {
        return {
            searchVisible: false,
            open: false,
            scrollTop: 0,
            menuPathName: ['major', 'trade', 'about', 'investor', 'join', 'media'],
            searchText: '',
            textImg,
            weixinImg,
            bigLogo
        }
    },
    props: {
        
    },
    computed: {
        toSmall() {
            return this.scrollTop >= 250;
        },
        aboutUs() {
            if (!this.$store.getters.firstLevelMenuList[6]) {
                return {
                    nodeName : '联系我们'
                }
            }
            return this.$store.getters.firstLevelMenuList[6]
        },
        currentNodeId() {
            let path = this.$route.params.nodepath ? this.$route.params.nodepath.split('/') : []
            return path[0] * 1
        },
    },
    watch: {
        searchVisible(value) {
            this.$emit('search', this.searchVisible)
        },
        '$route' : function() {
            this.setSearchVisible()
        }
    },
    methods: {
        scrollChange() {
            this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        },
        setSearchText(text) {
            this.searchText = text
        },
        // 到搜索页面
        search() {
            let searchText = this.searchText && this.searchText.replace(/^\s*|\s*$/g, '')
            if (searchText) {
                this.$router.push({name:'search', query:{querystr : searchText, tag : new Date().getTime()}})
            }
        },
        setSearchVisible() {
            if (this.$route.path === '/search') {
                this.searchVisible = true
                this.setSearchText(this.$route.query.querystr)
            } else {
                this.searchVisible = false
                this.setSearchText('')
            }
        }
    },
    mounted() {
        this.setSearchVisible()
    },
    directives: {
        Scroll
    }
}
</script>
<!-- head -->
<style lang="scss">
    @import '../../style/param.scss';
    .weixin-img {
        width: 100%;
        height: auto;
    }
    .icon-weixin {
        color: #50b674;
    }
    .head-main {
        transition: all 0.3s;
        * {
            transition: inherit;
        }
    }
    .head-wrap {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 120px;
        padding: 0 60px;
        z-index: 99;
        background: $bgcolor;
        min-width: 1080px;
        .logo {
            position: absolute;
            display: inline-block;
            top: 28px;
            left: 60px;
        }
        .nav {
            margin-left: 294px;
            position: relative;
            .li1 {
                margin-top: 28px;
                padding-bottom: 12px;
                margin-bottom: 12px;
                border-bottom: 1px solid $grey1;
                .info1 {
                    display: none;
                }
                .info2 {
                    .left {
                        float: right;
                        margin-right: 60px;
                        .lang {
                            margin-left: 30px;
                        }
                    }
                    .right {
                        position: absolute;
                        right: 0;
                        top: -4px;
                        color: $blue;
                        .iconfont {
                            font-size: 2rem;
                        }
                    }
                }
            }
            .li2 {
                min-height: 20px;
                line-height: initial;
            }
            .menus {
                float: left;
                a {
                    float: left;
                    display: block;
                    margin-right: 40px;
                }
                a:last-child {
                    margin-right: 0;
                }
                .active {
                    color: $blue;
                }
            }
            .search {
                float: right;
                padding-right: 35px;
                .iconfont {
                    position: absolute;
                    bottom: -1px;
                    right: 0;
                    font-size: 2rem;
                }
            }
        }
        .operate-wrap {
            display: none;
        }
    }
    .search-wrap {
        position: fixed;
        width: 100%;
        top: 120px;
        z-index: 99;
        background: $bgcolor;
        height: 0;
        overflow: hidden;
        min-width: 1080px;
        &.visible {
            height: 150px;
            .search-content {
                opacity: 1;
            }
        }
        .search-content {
            padding-top: 20px;
            width: 660px;
            margin: 0 auto;
            opacity: 0;
            transition: inherit;
        }
        input {
            float: left;
            height: 50px;
            width: 590px;
            border: 1px solid $grey3;
            margin: 0 auto;
            padding: 0 20px;
        }
        button {
            float: left;
            background: $blue;
            height: 50px;
            width: 70px;
            &:active {
                background: $bluedark;
            }
            .iconfont {
                color: $white;
                font-size: 2rem;
            }
        }
    }
    
    .shrink {
        .head-wrap {
            height: 80px;
            background: $white;
            box-shadow: 0 1px 15px 1px $grey1;
            .logo {
                transform: scale(0.63);
                transform-origin: 0 0;
                top: 20px;
            }
            .nav {
                margin-left: 246px;
                .li2 {
                    margin-top: 20px;
                }
                .menus {
                    a {
                        line-height: 40px;
                        padding: 0 20px;
                        margin-right: 20px;
                    }
                    a:last-child {
                        margin-right: 0;
                    }
                    .active {
                        background: $blue;
                        color: $white;
                    }
                }
            }
        }
        .search-wrap {
            top: 120px;
        }
    }
    @media only screen and (max-width: 768px) {
        .shrink .head-wrap, .head-wrap {
            height: 50px;
            padding: 0 30px;
            background: $bgcolor;
            min-width: initial;
            box-shadow: initial;
            .logo {
                transform: scale(0.28);
                transform-origin: 0 0;
                left: 30px;
                top: 15px;
            }
            .nav {
                margin-left: -30px;
                margin-right: -30px;
                margin-top: -50px;
                z-index: 3;
                top: -550px;
                opacity: 0;
                transition: all 0.8s;
                &.openMenu {
                    top: 0;
                    opacity: 1;
                }
                .li1 {
                    display: none;
                }
                .li2 {
                    margin-top: 50px;
                    box-shadow: 0 1px 5px 0px #ded7d7;
                }
                .menus {
                    width: 100%;
                    padding-top: 50px;
                    padding-bottom: 50px;
                    background: $bgcolor;
                    a {
                        line-height: 40px;
                        padding: 0;
                        margin-right: 0;
                        font-size: 1.6rem;
                        width: 100%;
                        text-align: center;
                    }
                    a:last-child {
                        margin-right: 0;
                    }
                    .active {
                        background: none;
                        color: $blue;
                    }
                }
                .search {
                    display: none;
                }
            }
            .operate-wrap {
                display: block;
                position: absolute;
                top: 10px;
                right: 10px;
                color: $blue;
                font-size: 2.4rem;
            }
        }
        .search-wrap {
            display: none;
        }
    }
    @media only screen and (min-width: 768px) {

    }
    @media only screen and (min-width: 992px) {

    }
    @media only screen and (min-width: 1200px) {
        .head-wrap {
            padding: 0 80px;
            .logo {
                left: 80px;
            }
            .nav {
                .menus {
                    a {
                        margin-right: 65px;
                    }
                }
            }
        }
    }
    @media only screen and (min-width: 1400px) {
        .head-wrap {
            .nav {
                .li1 {
                    .info1 {
                        float: left;
                        display: block;
                    }
                }
            }
        }
        .shrink {
            .head-wrap {
                .logo {
                    transform: scale(0.63);
                    transform-origin: 0 0;
                    left: 360px;
                }
                .nav {
                    margin-left: 526px;
                }
            }
        }
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
        opacity: 0;
        height: 0 !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        border-bottom: none !important;
        padding-bottom: 0 !important;
    }
</style>