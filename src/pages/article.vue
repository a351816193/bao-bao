<template>
    <div :class="{'less' : this.menuList.length < 6}">
        <!-- 如果文章内有imgUrl的话用其做头图，否则用二级菜单的节点的imgUrl做头图  :headImg="!listType && contentObj.imageUrl || ''" -->
        <Left :menuList="menuList" :currentNode="secondNode" :pNode="firstNode" v-if="this.menuList.length"></Left><div class="article-wrap" v-loading="loading"> 
            <!-- 内容列表 -->
            <template v-if="listType === 'content'">
                <!-- 标题 -->
                <h2 class="article-title">{{currentNode.nodeName}}</h2>
                <!-- 列表 -->
                <div class="article-list">
                    <ul class="fn-clear">
                        <Content-List v-for="(item, index) in contentList" :currentNode="currentNode" :key="item.id" :item="item"></Content-List>
                    </ul>
                </div>
            </template>
            
            <!-- 外链列表 -->
            <template v-else-if="listType === 'link'">
                <!-- 标题 -->
                <h2 class="article-title">{{currentNode.nodeName}}</h2>
                <!-- 列表 -->
                <div class="article-main">
                    <Link-List  
                        v-for       ="(item, index) in contentList" 
                        :currentNode="currentNode" 
                        :key        ="item.id" 
                        :item       ="item">
                    </Link-List>
                </div>
            </template>

            <!-- 分页 -->
            <template v-if="listType">
                <div class="article-main">
                    <el-pagination
                        small
                        layout          ="prev, pager, next"
                        :total          ="total"
                        :current-page   ="pageNo + 1"
                        :page-size      ="10"
                        @current-change ="currentChange">
                    </el-pagination>
                </div>
            </template>

            <!-- 文本内容 -->
            <template v-if="!listType">
                <!-- 标题 -->
                <div class="article-header">
                    <h2 class="article-title"><span class="article-menu-name" v-if="contentId">{{currentNode.nodeName}}</span><span>{{contentObj.title}}</span></h2>
                    <h3 class="article-subtitle" v-if="contentId">{{contentObj.addDate}}</h3>
                    <ul class="article-crumbs" v-if="!contentId">
                        <li>首页</li>
                        <li>{{firstNode.nodeName}}</li>
                        <li>{{secondNode.nodeName}}</li>
                    </ul>
                </div>
                <!-- 内容 -->
                <div class="article-main">
                    <component :is="contentTemplate"></component>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import Left from '@/components/common/left'
    import ContentList from '@/components/common/contentList'
    import LinkList from '@/components/common/linkList'
    import {API_GetContentByNodeId, API_GetContentById} from '@/fetch/restApi'
    import templateCommon from '@/components/template/js/index'

    // import WeChat from '@/components/template/wechat'
    // import History from '@/components/template/history'
    // import Card from '@/components/template/card'
    // import Common from '@/components/template/common'
    // import Enterprise from '@/components/template/enterprise'
    // import Honor from '@/components/template/honor'
    // import Feedback from '@/components/template/feedback'
    // import Contact from '@/components/template/contact'

    export default {
        data() {
            return {
                contentDates: [],
                subContentDate: {},
                pageNo: 0,
                pageSize: 10,
                total: 0,
                loading: false
            }
        },
        computed: {
            ...mapGetters(['firstLevelMenuListById', 'secondLevelMenuListById']),
            contentTemplate() {
                // return 'Honor'
                return {
                    ...templateCommon,
                    template : '<div>' + (this.contentObj.content || '') + '</div>'
                }
            },
            // 二级栏目菜单列表
            menuList() {
                let list = this.$store.getters.firstLevelMenuListById[this.firstNodeId] && this.$store.getters.firstLevelMenuListById[this.firstNodeId].childs || []
                return list
            },
            // 当前栏目链接类型
            linkType() {
                return this.currentNode.linkType
            },
            // 链接类型 [link, content, '']  ['链接列表', '内容列表', '非列表']
            listType() {
                let type = ''
                if (this.linkType === 'LinkNoRelatedToChannelAndContent' && !this.contentId) {
                    if (this.contentDates[0] && this.contentDates[0].linkUrl) {
                        type = 'link'
                    } else {
                        type = 'content'
                    }
                }
                return type
            },
            // 列表
            contentList() {
                let list = this.contentDates
                return list
            },
            // 内容
            contentObj() {
                if (this.contentId) {
                    return this.subContentDate
                }
                // 默认第一条内容
                return this.contentDates[0] || {}
            },
            // 当前节点
            currentNode() {
                // todo-增加当前菜单非二级菜单的情况
                if (this.currentNodeId === this.secondNodeId) {
                    return this.secondNode
                }
            },
            // 二级菜单节点
            secondNode() {
                return this.secondLevelMenuListById[this.secondNodeId] || {}
            },
            // 一级菜单节点
            firstNode() {
                return this.firstLevelMenuListById[this.firstNodeId] || {}
            },
            // 列表内容id
            contentId() {
                let id = this.$route.query.contentid || this.$common.getUrlParam('contentid') * 1
                return id || undefined
            },
            // 当前菜单id
            currentNodeId() {
                let path = this.$route.params.nodepath ? this.$route.params.nodepath.split('/') : []
                let nodeId = 0
                if (path.length > 2) {
                    nodeId = path[path.length - 1] * 1
                } else if (path.length > 0) {
                    return this.secondNodeId
                }
                return nodeId
            },
            // 父节点id
            pNodeId() {
                let path = this.$route.params.nodepath ? this.$route.params.nodepath.split('/') : []
                let nodeId = 0
                if (path.length > 2) {
                    nodeId = path[path.length - 2] * 1
                } else if (path.length > 0) {
                    return this.firstNodeId
                }
                return nodeId
            },
            // 二级菜单id
            secondNodeId() {
                let path = this.$route.params.nodepath ? this.$route.params.nodepath.split('/') : []
                let nodeId = 0
                if (path.length > 1) {
                    nodeId = path[1] * 1
                } else if (path.length > 0) {
                    if (this.firstLevelMenuListById[path[0]] && this.firstLevelMenuListById[path[0]].childs.length) {
                        nodeId = this.firstLevelMenuListById[path[0]].childs[0].nodeId * 1
                    }
                }
                return nodeId
            },
            // 一级菜单id
            firstNodeId() {
                let path = this.$route.params.nodepath ? this.$route.params.nodepath.split('/') : []
                let nodeId = 0
                if (path.length > 0) {
                    nodeId = path[0] * 1
                }
                return nodeId
            }
        },
        watch: {
            currentNodeId(val) {
                if (!val) return
                this.pageNo = 0
                this.getArticle()
            },
            contentId() {
                this.pageNo = 0
                this.getArticle()
            }
        },
        methods: {
            getArticleByNodeId() {
                API_GetContentByNodeId({
                    nodeId: this.currentNodeId,
                    pageSize: this.pageSize,
                    pageNo: this.pageNo
                }).then(success => {
                    this.loading = false
                    this.total = success.data.totalCount
                    // 内容/列表
                    this.contentDates = success.data.data || []
                }).catch(error => {
                    this.loading = false
                })
            },
            getContentById() {
                API_GetContentById({
                    contentId: this.contentId
                }).then(success => {
                    this.loading = false
                    // 内容
                    this.subContentDate = success.data
                }).catch(error => {
                    this.loading = false
                })
            },
            getArticle() {
                this.loading = true
                this.contentDates = []
                this.subContentDate = {}
                if (this.contentId) {
                    this.getContentById()
                } else {
                    this.getArticleByNodeId()
                }
            },
            currentChange(pageNo) {
                this.pageNo = pageNo - 1
                this.getArticleByNodeId()
            },
            setRouteQueryToStore() {
                // 路由改变，刷新页面
                this.pageNo = 0
                this.total = 0
                this.getArticle()
            },
        },
        created() {
            this.setRouteQueryToStore()
        },
        components: {
            Left,
            ContentList,
            LinkList,
            // History,
            // Card,
            // Common,
            // Enterprise,
            // Honor,
            // Feedback,
            // Contact,
            // WeChat,
        }
    }
</script>
<style lang="scss">
@import '../style/param.scss';
.article-wrap {
    position: relative;
    display: inline-block;
    padding-left: 50px;
    vertical-align: top;
    width: calc(100% - 360px);
    min-height: 600px;
}
.article-main {
    margin-top: 3.6%;
    margin-bottom: 3.6%;
    margin-right: 25%;
    color: $grey5;
    font-size: 1.4rem;
    line-height: 1.7;
    margin-right: 25%;
    min-width: 700px;
    p {
        margin: 3.7% 0;
    }
    img {
        width: 100%;
        height: auto;
    }
}
.article-list {
    width: 965px;
    & > .fn-clear {
        padding-top: 20px;
    }
}
.article-title {
    font-size: 3.6rem;
    font-weight: normal;
    color: $dark;
    margin-top: 20px;
    margin-bottom: 20px;
    & > span {
        display: inline-block;
        vertical-align: middle;
    }
}
.article-menu-name {
    font-size: 18px;
    padding: 10px 30px;
    margin-right: 30px;
    background: $blue;
    color: $white;
}
.article-crumbs {
    position: absolute;
    top: 40px;
    right: 60px;
    li {
        display: inline-block;
        color: $grey5;
        &:after {
            font-family: 'iconfont';
            content: '\e65e';
            margin-left: 5px;
            margin-right: 3px;
            font-size: 1.2rem;
        }
        &:last-child {
            color: $blue;
            &:after {
                display: none;
            }
        }
    }
}
@media only screen and (max-width: 768px) {
    .article-title {
        font-size: 2.4rem;
        margin-bottom: 10px;
    }
    .article-subtitle {
        font-size: 1.2rem;
    }
    .article-menu-name {
        display: block;
        margin-bottom: 5px;
        padding: 8px 15px;
        font-size: 1.4rem;
    }
    .article-wrap {
        padding: 0 30px;
        margin: 0;
        margin-top: 30px;
        width: 100%;
    }
    .article-main {
        margin-top: 20px;
        min-width: initial;
        margin-right: 0;
        img {
            display: inline-block;
            width: 100%;
            height: auto;
        }
    }
    .article-list {
        width: initial;
        min-width: initial;
        margin-right: 0;
    }
    .article-crumbs {
        display: none;
    }
}
@media only screen and (min-width: 768px) {
    .less {
        .article-wrap {
            padding: 3.6% 60px;
            width: 100%;
        }
        .article-header {
            text-align: center;
        }
        .article-crumbs {
            display: none;
        }
        .article-main {
            margin: 0 auto;
            margin-top: 3.6%;
            width: 65%;
            max-width: 760px;
        }
        .article-title {
            margin-top: 0;
            text-align: center;
        }
        .article-list {
            margin: 0 auto;
            width: 65%;
            min-width: 960px;
        }
    }
}
@media only screen and (min-width: 1200px) {
    .article-wrap {
        width: calc(100% - 380px);
    }
    .article-crumbs {
        right: 80px;
    }
    .less {
        .article-wrap {
            padding: 3.6% 80px;
        }
    }
}
</style>
