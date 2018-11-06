<template>
    <div> <!-- class: less -->
        <Left :menuList="menuList" :currentNode="currentNode" root="template" v-if="this.menuList.length" headImg="http://www.baowugroup.com/res/baosight/images/6.1.jpg"></Left><div class="article-wrap"> 
            <div class="article-header">
                <h2 class="article-title"><span class="article-menu-name" v-if="contentId">栏目名称</span><span>{{currentNode.nodeName}}</span></h2>
                <h3 class="article-subtitle" v-if="contentId">xxxx-xx-xx xx:xx:xx</h3>
                <ul class="article-crumbs" v-if="!contentId">
                    <li>首页</li>
                    <li>模版</li>
                    <li>{{currentNode.nodeName}}</li>
                </ul>
            </div>
            <!-- 内容 -->
            <div class="article-main">
                <component :is="currentNode.nodeId"></component>
            </div>
        </div>
    </div>
</template>
<script>
import Left from '@/components/common/left'
import common from '@/components/template/common'
import card from '@/components/template/card'
import contact from '@/components/template/contact'
import enterprise from '@/components/template/enterprise'
import feedback from '@/components/template/feedback'
import history from '@/components/template/history'
import honor from '@/components/template/honor'
import wechat from '@/components/template/wechat'
import business from '@/components/template/business'

export default {
    data() {
        return {
            menuList: [{
                nodeName: '基础样式',
                nodeId: 'common'
            }, {
                nodeName: '公司高管',
                nodeId: 'card'
            }, {
                nodeName: '联系我们',
                nodeId: 'contact'
            }, {
                nodeName: '企业文化',
                nodeId: 'enterprise'
            }, {
                nodeName: '意见反馈',
                nodeId: 'feedback'
            }, {
                nodeName: '历史沿革',
                nodeId: 'history'
            }, {
                nodeName: '荣誉资质',
                nodeId: 'honor'
            }, {
                nodeName: '微信矩阵',
                nodeId: 'wechat'
            }, {
                nodeName: '专业领域',
                nodeId: 'business'
            }],
            contentId: '',
        }
    },
    computed: {
        currentNode() {
            let path = this.$route.params.nodepath
            let nodeName = ''
            for (let i = 0; i < this.menuList.length; i ++) {
                if (this.menuList[i].nodeId === path) {
                    nodeName = this.menuList[i].nodeName
                }
            }
            return {
                nodeName,
                nodeId : path
            }
        }
    },
    components: {
        Left,
        common,
        card,
        contact,
        enterprise,
        feedback,
        history,
        honor,
        wechat,
        business
    }
}
</script>
<style lang="scss" scoped>
@import '../../style/article';
</style>
