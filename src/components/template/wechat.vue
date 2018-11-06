<template>
    <div class="tpl-wechat-wrap">
        <div class="tpl-wechat-main">
            <img :src="qrcode">
            <p class="p1">上海宝信软件股份有限公司</p>
            <p class="p2">中国领先的工业软件应用解决方案和服务提供商</p>
            <p class="p3">宝钢股份控股上市软件企业</p>
        </div>
        <ul class="tpl-wechat-sub">
            <li>
                <img :src="qrcode">
                <p class="p1">宝信软件员工社区</p>
                <p class="p2">面向企业员工的服务窗口</p>
            </li>
            <li>
                <img :src="qrcode">
                <p class="p1">宝信软件员工社区</p>
                <p class="p2">面向企业员工的服务窗口</p>
            </li>
            <li>
                <img :src="qrcode">
                <p class="p1">宝信软件员工社区</p>
                <p class="p2">面向企业员工的服务窗口</p>
            </li>
            <li>
                <img :src="qrcode">
                <p class="p1">宝信软件员工社区</p>
                <p class="p2">面向企业员工的服务窗口</p>
            </li>
            <li>
                <img :src="qrcode">
                <p class="p1">宝信软件员工社区</p>
                <p class="p2">面向企业员工的服务窗口</p>
            </li>
            <li>
                <img :src="qrcode">
                <p class="p1">宝信软件员工社区</p>
                <p class="p2">面向企业员工的服务窗口</p>
            </li>
        </ul>
    </div>
</template>
<script>
    import qrcode from '@/images/qrcode.png'
    export default {
        data() {
            return {
                qrcode
            }
        }
    }
</script>
<style lang="scss" scoped>
@import '../../style/template/index.scss';
</style>