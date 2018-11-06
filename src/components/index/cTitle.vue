<template>
    <div class="title-view">
        <div class="title-wrap">
            <h2 class="eng">{{engTitle}}</h2>
            <h2>{{title}}</h2>
            <div class="short-line"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    props           : {
        title       : [String],
        engTitle    : [String]
    }
}
</script>
<style lang="scss" scope>
@import '../../style/index.scss';
.title-view {
    margin: 40px 0;
    text-align: center;
    h2 {
        color: $blue;
        font-size: 3.6rem;
        font-weight: normal;
        margin-bottom: 20px;
        &.eng {
            font-size: 1.4rem;
        }
    }
}

@media only screen and (max-width: 768px) {
    .title-view {
        margin: 30px 0;
        text-align: left;
        h2 {
            font-size: 1.68rem;
            margin-bottom: 8px;
            &.eng {
                font-size: 1.2rem;
            }
        }
    }
    .short-line {
        display: none;
    }
    .title-wrap {
        padding-left: 12px;
        box-sizing: initial;
        border-left: 4px solid $blue;
    }
}
@media only screen and (min-width: 768px) {

}
@media only screen and (min-width: 992px) {

}
@media only screen and (min-width: 1200px) {
    .title-view {
        // margin: 60px 0;  // 80
        h2 {
            // font-size: 4.8rem;
            // margin-bottom: 20px;    // 30
            // &.eng {
            //     font-size: 2.4rem;
            // }
        }
    }
}
</style>
