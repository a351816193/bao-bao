<template>
    <div class="map-wrap">
        <a href="/article/45" target="_blank">
            <img :src="map">
        </a>
    </div>
</template>
<script>
import map from '@/images/map.jpg'
export default {
    data() {
        return {
            map
        }
    }
}
</script>
<style lang="scss" scope>
@import '../../style/param';
.map-wrap {
    font-size: 0;
    margin-top: 40px;
    img {
        width: 100%;
        height: auto;
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
