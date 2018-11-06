<template>
    <div>
        <ul class="tpl-enterprise-list">
            <li>
                <div class="text">
                    <div>
                        <h4>愿景 —</h4>
                        <p>智慧制造的领先者</p>
                        <p>城市的创新者</p>
                        <p>员工与企业共同发展的示范者</p>
                    </div>
                </div>
                <div class="image">
                    <img :src="img6">
                </div>
            </li>
            <li>
                <div class="text">
                    <div>
                        <h4>核心价值观 —</h4>
                        <p>诚信 协同 创新 共赢</p>
                    </div>
                </div>
                <div class="image">
                    <img :src="img6">
                </div>
            </li>
            <li>
                <div class="text">
                    <div>
                        <h4>使命 —</h4>
                        <p>让中国制造和城市生活更智慧</p>
                    </div>
                </div>
                <div class="image">
                    <img :src="img6">
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import img6 from '@/images/news1.png'
export default {
    data() {
        return {
            img6
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../style/template/index.scss';
</style>
