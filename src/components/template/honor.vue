<template>
    <div>
        <h4 class="tpl-honor-title" v-on:click="currentIndex = 0" :class="{'active' : currentIndex === 0}">荣誉</h4>
        <h4 class="tpl-honor-title" v-on:click="currentIndex = 1" :class="{'active' : currentIndex === 1}">资质</h4>
        <transition-group name="tab-fade">
            <ul class="tpl-honor-list" v-show="currentIndex === 0" :key="0">
                <li>高新技术企业</li>
                <li>高新技术企业</li>
                <li>高新技术企业</li>
                <li>高新技术企业</li>
                <li>高新技术企业</li>
            </ul>

            <ul class="tpl-honor-list" v-show="currentIndex === 1" :key="1">
                <li>22222</li>
                <li>22222</li>
                <li>22222</li>
                <li>22222</li>
                <li>22222</li>
            </ul>
        </transition-group>
    </div>
</template>
<script>
export default {
  data() {
      return {
          currentIndex:0
      }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/template/index.scss';
</style>