<template>
    <a target="_blank" :href="item.linkUrl">
        <div class="link-wrap fn-clear">
            <div class="left">
                <span class="link-tag"></span>
                <span>{{item.title}}</span>
            </div>
            <div class="right">{{item.addDate.split(' ')[0]}}</div>
        </div>
    </a>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: {
        item: {
           type: Object,
           default: () => {return {}}
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
        span {
            display: inline-block;
            vertical-align: middle;
        }
    }
    .right {
        float: right;
        color: $grey3;
        font-size: 12px;
    }
}
.link-tag {
    display: inline-block;
    // background: $blue;
    background: url(../../images/pdf.png) no-repeat 100% 100%;
    color: $white;
    width: 60px;
    height: 24px;
    margin-right: 10px;
}
</style>
