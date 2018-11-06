<template>
    <section class="section-wrap">
        <c-title title="核心能力" engTitle="Core Competence"></c-title>
        <ul class="core-list">
            <li v-for="(item, index) in coreList" :key="index">
                <div class="core-logo"><i :class="'ic icon-core-' + (index + 1)"></i></div><div class="core-content">
                    <h3>{{item.title}}</h3>
                    <p>{{item.content}}</p>
                </div>
            </li>
        </ul>
    </section>
</template>
<script>
import cTitle from './cTitle'
export default {
    data() {
        return {
            coreList: [{
                title: '“两化”的深度融合能力',
                content: '公司凭借两化融合领域的深厚积累，积极探索并策划践行智慧制造解决方案，助力中国制造企业转型升级，持续保持工业软件领军地位。'
            }, {
                title: '持续的技术创新能力',
                content: '公司紧随IT行业发展潮流，坚持技术创新，在云计算、大数据、工业互联网等新兴领域不断突破，形成了研发与应用紧密结合的能力。'
            }, {
            //     title: '高效稳定的过程管理能力',
            //     content: '基于健全、完善的管理体系，如 ISO9001、ISO20000、ISO14001等，公司兼具管理系统化和规范化，运营管控能力强、效率高。'
            // }, {
                title: '强大的综合集成能力',
                content: '公司拥有强大的系统集成、应用集成、数据集成和项目管理能力，基于健全的管理体系提供三化一体的集成服务，项目管理规范稳定。'
            }, {
                title: '完善的业务构建能力',
                content: '公司长期致力于智慧制造和智慧城市建设，拥有各领域完整解决方案，形成了“全层次、全流程、全生命周期”为特征的业务构建能力。'
            }],
        }
    },
    methods: {
        
    },
    components: {
        cTitle
    }
}
</script>
<style lang="scss" scope>
@import "../../style/param";
.section-wrap {
    position: relative;
}
/* icon bgimages*/
.ic {
    display: inline-block;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    transition: all 0.3s;
    &.icon-core-1 {
        height: 84px;
        width: 83px;
        background-image: url(../../svg/1.svg);
        .core-list li:hover & {
            background-image: url(../../svg/11.svg);
        }
    }
    &.icon-core-2 {
        height: 96px;
        width: 95px;
        background-image: url(../../svg/2.svg);
        .core-list li:hover & {
            background-image: url(../../svg/22.svg);
        }
    }
    // &.icon-core-3 {
    //     height: 85px;
    //     width: 85px;
    //     background-image: url(../../svg/3.svg);
    //     .core-list li:hover & {
    //         background-image: url(../../svg/33.svg);
    //     }
    // }
    &.icon-core-3 {
        height: 96px;
        width: 83px;
        background-image: url(../../svg/4.svg);
        .core-list li:hover & {
            background-image: url(../../svg/44.svg);
        }
    }
    &.icon-core-4 {
        height: 77px;
        width: 94px;
        background-image: url(../../svg/5.svg);
        .core-list li:hover & {
            background-image: url(../../svg/55.svg);
        }
    }
}
.core-logo {
    height: 150px;
    text-align: center;
    .ic {
        vertical-align: top;
    }
}
.core-list {
    position: relative;
    margin: 0 auto;
    transition: left 0.3s;
    li {
        display: inline-block;
        margin: 1px;
        padding: 40px;
        width: calc(25% - 10px);
        white-space: normal;
        cursor: pointer;
        transition: all 0.3s;
        vertical-align: top;
        height: 390px;
        text-align: left;
        h3 {
            font-size: 1.8rem;
            font-weight: normal;
            transition: color 0.3s;
            min-height: 30px;
        }
        p {
            margin-top: 10px;
            line-height: 1.5;
            font-size: 1.4rem;
        }
        &:hover {
            box-shadow: 0 0 0 1px $blue;
            background: $white;
            h3, p {
                color: $blue;
            }
        }
    }
}
@media only screen and (max-width: 768px) {
    .core-list {
        margin: 0;
        white-space: normal;
        li {
            margin: 0;
            margin-right: 30px;
            display: block;
            padding: 20px;
            margin-top: 20px;
            width: auto;
            height: auto;
            background: $white;
            box-shadow: 1px 1px 3px 0 $grey1;
            &:hover {
                box-shadow: initial;
            }
            p {
                margin-top: 15px;
                margin-bottom: 0;
                font-size: 1.2rem;
            }
            h3 {
                font-size: 1.6rem;
                color: $blue;
                min-height: initial;
            }

        }
    }
    .core-content {
        display: inline-block;
        width: calc(100% - 70px);
        vertical-align: middle;
    }
    .core-logo {
        display: inline-block;
        width: 70px;
        height: 60px;
        overflow: hidden;
        vertical-align: middle;
        .ic {
            background-size: 60% 60%;
        }
    }
}
@media only screen and (min-width: 768px) and (max-width: 1420px) {
    .core-list li {
        // width: calc(50% - 20px);
        // height: 360px;
        h3 {
            text-align: center;
        }
    }
}  
@media only screen and (min-width: 1330px) {
    
}
@media only screen and (min-width: 1860px) {
    
}
</style>
