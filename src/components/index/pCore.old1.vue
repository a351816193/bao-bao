<template>
    <section class="section-wrap">
        <c-title title="核心能力" engTitle="Core Competence"></c-title>
        <ul class="core-list" :style="{left: -left + 'px'}">
            <li v-for="(item, index) in coreList" :key="index">
                <div class="core-logo"><i :class="'ic icon-core-' + (index + 1)"></i></div><div class="core-content">
                    <h3>{{item.title}}</h3>
                    <p>{{item.content}}</p>
                </div>
            </li>
        </ul>
        <div class="core-operate-wrap">
            <a @click="prev">
                <i class="iconfont icon-jiantoufuben1"></i>
            </a>
            <a @click="next">
                <i class="iconfont icon-jiantoufuben"></i>
            </a>
        </div>
    </section>
</template>
<script>
import cTitle from './cTitle'
export default {
    data() {
        return {
            left: 0,
            coreList: [{
                title: '完善的基础业务构建能力',
                content: '公司拥有完整的制造企业信息化和城市智能化领域的系列产品和解决方案，培育、积累、形成了基于钢铁行业的三全服务能力。'
            }, {
                title: '强大的综合集成能力',
                content: '公司拥有强大的系统集成、数据集成能力，可集成所有主流的系统、产品和技术；集信息化、自动化和机电一体化于一身，具备完整的技术链和 QHSEI、CMMI的集成服务能力。'
            }, {
                title: '高效稳定的过程管理能力',
                content: '基于健全、完善的管理体系，如 ISO9001、ISO20000、ISO14001等，公司兼具管理系统化和规范化，运营管控能力强、效率高。'
            }, {
                title: '新技术、新产品研发与应用能力',
                content: '公司通过云计算、移动互联、大数据、无人化等增量业务的发展和落地，形成了完整的技术和运营服务能力；IDC 领域业务稳健增长，云计算业务模式日趋成熟稳定；新产品研发方面不断取得进展，部分产品突破国外技术垄断，填补国内空白。'
            }, {
                title: '助力中国传统产业“两化”深度融合能力',
                content: '凭借两化融合领域的深厚积累，公司积极探索构建智能工厂和智慧制造，所策划践行的工业 4.0 解决方案、工业机器人、无人化物流管控等产品陆续投入应用，不断提升中国制造企业转型升级的服务能力，继续保持了工业软件相关领域的领军地位。'
            }],
        }
    },
    methods: {
        next() {
            if (this.left < 370 * (this.coreList.length - 2)) {
                this.left += 370;
            }
        },
        prev() {
            if (this.left > 0) {
                this.left -= 370;
            }
        }
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
    &.icon-core-3 {
        height: 85px;
        width: 85px;
        background-image: url(../../svg/3.svg);
        .core-list li:hover & {
            background-image: url(../../svg/33.svg);
        }
    }
    &.icon-core-4 {
        height: 96px;
        width: 83px;
        background-image: url(../../svg/4.svg);
        .core-list li:hover & {
            background-image: url(../../svg/44.svg);
        }
    }
    &.icon-core-5 {
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
    margin-left: -50px;
    white-space: nowrap;
    transition: left 0.3s;
    li {
        display: inline-block;
        margin: 1px;
        padding: 50px;
        width: 368px;
        white-space: normal;
        cursor: pointer;
        transition: all 0.3s;
        vertical-align: top;
        height: 450px;
        h3 {
            font-size: 2.4rem;
            font-weight: normal;
            transition: color 0.3s;
            min-height: 60px;
        }
        p {
            margin-top: 20px;
            line-height: 1.5;
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
.core-operate-wrap {
    position: absolute;
    top: 30px;
    right: 60px;
    user-select: none;
    a {
        margin-left: 10px;
        display: inline-block;
        height: 40px;
        width: 40px;
        background: $white;
        line-height: 40px;
        text-align: center;
        font-weight: bold;
        border: 1px solid $grey1;
        &:active {
            background: $blue;
            color: $white;
            border-color: $blue;
        }
    }
}
@media only screen and (max-width: 768px) {
    .core-operate-wrap {
        display: none;
    }
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
@media only screen and (min-width: 768px) {
    .core-operate-wrap {
        display: block;
    }
}
@media only screen and (min-width: 992px) {
    .core-operate-wrap {
        display: block;
    }
}   
@media only screen and (min-width: 1200px) {
    .core-operate-wrap {
        display: block;
    }
}
@media only screen and (min-width: 1800px) {
    .core-operate-wrap {
        display: none;
    }
}
</style>
