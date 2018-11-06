<template>
    <div class="map-wrap">
        <div>
            <el-amap vid="amap1" :zoom="zoom" :center="center" :scrollWheel="false" :plugin="plugin" :amapManager="amapManager">
                <el-amap-marker :position="marker.position"></el-amap-marker>
            </el-amap>
        </div>
    </div>
</template>
<script>
import VueAMap from 'vue-amap';
export default {
    data() {
        let pos = [121.598593, 31.211164];
        let amapManager = new VueAMap.AMapManager();
        return {
            zoom: 14,
            center: pos,
            marker: {
                position: pos,
                draggable: true
            },
            plugin: ['ToolBar'],
            amapManager
        }
    }
}
</script>
<style lang="scss" scope>
@import '../../style/param';
.map-wrap {
    position: relative;
    padding: 18% 0;
    background: $white;
    margin-top: 40px;
    & > * {
        position: absolute;
        top: 0;
        left: 0;
    }
    & > div {
        height: 100%;
        width: 100%;
    }
}
@media only screen and (max-width: 768px) {
    .map-wrap {
        margin-top: 30px;
    }
}
@media only screen and (min-width: 768px) {

}
@media only screen and (min-width: 992px) {

}
@media only screen and (min-width: 1200px) {
    .map-wrap {
        margin-top: 80px;
    }
}
</style>
