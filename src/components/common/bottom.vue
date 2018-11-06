<template>
    <footer>
        <ul class="link-list">
            <router-link tag="li" :to="'/article/' + item.parentId + '/' + item.nodeId" v-if="item.nodeId !== 55" v-for="(item, index) in list" :key="index"><a>{{item.nodeName}}</a></router-link>
        </ul>
        <div>
            <span>COPYRIGHT</span>
            <span>©2017</span>
            <span>上海宝信软件股份有限公司</span>
            <span>
                <a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action" target="_blank">沪ICP备 10001471 号</a>
            </span>
            <span>
                <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011302002903" target="_blank">
                    <img :src="bakIcon" class="bak-icon">
                    <span class="bak-text">沪公网安备 31011302002903 号</span>
                </a>
            </span>
            <div class="fn-right right-wrap">
                <router-link to="/article/53/55" tag="span">网站地图</router-link>
                <i class="iconfont icon-sjup"></i>
            </div>
        </div>
        <div>
            <span>技术支持</span>
            <span>宝信软件</span>
            <span>网站管理员</span>
        </div>
    </footer>
</template>
<script>
import bakIcon from '@/images/bak_icon.png';

export default {
    data() {
        return {
            bakIcon
        }
    },
    props: {
        
    },
    computed: {
        list() {
            if (!this.$store.getters.firstLevelMenuListById[53]) {
                return []
            }
            return this.$store.getters.firstLevelMenuListById[53].childs
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../style/param';
footer {
    padding: 60px;
    font-size: 12px;
    font-family: $fontlight;
    background: $blue;
    color: $white;
    line-height: 1.8;
    font-weight: normal;
    & > div > span {
        margin-right: 10px;
    }
}
.link-list {
    margin: 0;
    li {
        display: inline-block;
        &:after {
            display:inline-block;
            content: '|';
            margin: 0 5px;
        }
        &:last-child {
            &:after {
                display: none;
            }
        }
    }
}
.bak-icon, bak-text {
    display: inline-block;
    vertical-align: sub;
}
.bak-icon {
    margin-right: 1px;
}
.right-wrap {
    span {
        margin-right: 3px;
        cursor:pointer;
    }
    .iconfont {
        font-size: 12px;
    }
}
@media only screen and (max-width: 768px) {
    footer {
        padding: 30px;
    }
    .right-wrap {
        display: none;
    }
}
@media only screen and (min-width: 768px) {

}
@media only screen and (min-width: 992px) {

}
@media only screen and (min-width: 1200px) {
    
}
</style>
