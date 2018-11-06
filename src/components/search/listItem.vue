<template>
    <component :is="item.linkUrl ? 'a' : 'router-link'" :to="path" :href="path" :target="item.linkUrl ? '_blank' : ''">
        <div class="link-wrap fn-clear">
            <div class="left">
                <span class="link-tag" :title="tageName">{{tageName}}</span>
                <span class="link-title">{{item.title}}</span>
            </div>
            <div class="right">
                {{item.addDate.split(' ')[0]}}
            </div>
        </div>
    </component>
</template>
<script>
export default {
    data() {
        return {}
    },
    props: {
        item: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    computed: {
        parentNodes() {
            if (!this.item.parentNodes) {
                return []
            }
            return this.item.parentNodes
        },
        tageName() {
            if (!this.parentNodes.length) return ''
            return this.parentNodes[1].nodeName
        },
        path() {
            let link = ['article']
            let last = this.parentNodes.length - 1
            // 一般认为有linkurl就是打开新的外部链接非内容页面
            if (this.item.linkUrl) {
                return this.item.linkUrl
            }
            for (let i = 0; i < this.parentNodes.length; i ++) {
                if (i === 0) continue
                link.push(this.parentNodes[i].nodeId)
            }
            let linkuUrl = link.join('/')
            // 文章内容
            if (this.parentNodes[last].linkType === 'LinkNoRelatedToChannelAndContent') {
                linkuUrl += '?contentid=' + this.item.id
            }
            return linkuUrl
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../style/param.scss';
.link-wrap {
    padding: 20px 0;
    cursor: pointer;
    border-bottom: 1px solid $grey2;
    &:hover {
        color: $blue;
    }
    .left {
        float: left;
        width: calc(100% - 100px);
        span {
            display: inline-block;
            vertical-align: middle;
        }
    }
    .right {
        float: right;
        color: $grey3;
        font-size: 12px;
        line-height: 24px;
    }
}
.link-tag {
    display: inline-block;
    background: $blue;
    color: $white;
    height: 24px;
    line-height: 24px;
    padding: 0 10px;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    margin-right: 10px;
    font-weight: normal;
    font-size: 1.2rem;
}
.link-title {
    display: inline-block;
    width: calc(100% - 120px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; 
}
</style>
