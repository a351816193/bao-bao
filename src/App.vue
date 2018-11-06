<template>
  <div id="app" class="main" :class="{'open' : open}">
    <Top @search="setOpen"></Top>
    <div class="content-wrap">
      <router-view></router-view>
    </div>
    <To-Top></To-Top>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from './components/common/top'
import Bottom from './components/common/bottom'
import ToTop from './components/common/toTop'
export default {
  name: 'app',
  data() {
    return {
      open: false
    }
  },
  watch: {
    
  },
  methods: {
    setOpen(open) {
      this.open = open
    },
  },
  components: {
    Top,
    ToTop,
    Bottom
  }
}
</script>
<style lang="scss">
@import './style/param';
.content-wrap {
  min-height: 700px;
}
.main {
    position: relative;
    overflow: hidden;
    width: 100%;
    min-width: 1080px;
    padding-top: 120px;
    transition: all 0.5s;
    &.open {
        padding-top: 270px;
    }
}

@media only screen and (max-width: 768px) {
    .main {
        min-width: initial;
        padding-top: 50px !important;
    }
}
@media only screen and (min-width: 768px) {

}
@media only screen and (min-width: 992px) {
    
}
@media only screen and (min-width: 1200px) {
    
}
</style>
