<template>
    <div>
        <div class="cardTitle">
            <h5 class="tpl-title" v-on:click="currentIndex = 0" :class="{'active' : currentIndex === 0}">董事简介</h5>
            <h5 class="tpl-title" v-on:click="currentIndex = 1" :class="{'active' : currentIndex === 1}">董事简介2</h5>
            <h5 class="tpl-title" v-on:click="currentIndex = 2" :class="{'active' : currentIndex === 2}">董事简介3</h5>
            <h5 class="tpl-title" v-on:click="currentIndex = 3" :class="{'active' : currentIndex === 3}">董事简介4</h5>
            <h5 class="tpl-title" v-on:click="currentIndex = 4" :class="{'active' : currentIndex === 4}">董事简介5</h5>
        </div>

        <transition-group name="tab-fade">
            <!-- one group -->
            <div class="cardGroup" v-show="currentIndex === 0" :key="0">
                <div class="tpl-card-wrap">
                    <h6 class="tpl-card-name">夏雪松1</h6>
                    <p class="tpl-card-main">
                        男，1970年12月出生，中南财经大学税收专业本科毕业，中欧国际工商学院EMBA，中共党员。
                    </p>
                    <p class="tpl-card-content">
                        曾任宝钢集团公司计划财务部会计处总帐与税务管理、秘书处秘书，宝山钢铁股份有限公司办公室秘书，上海宝信软件股份有限公司财务总监兼财务部经理、财务总监兼董事会秘书、副总经理兼财务总监、党委书记、总经理；现任上海宝信软件股份有限公司党委书记、董事长。
                    </p>
                </div>
                <div class="tpl-card-wrap">
                    <h6 class="tpl-card-name">夏雪松</h6>
                    <p class="tpl-card-main">
                        男，1970年12月出生，中南财经大学税收专业本科毕业，中欧国际工商学院EMBA，中共党员。
                    </p>
                    <p class="tpl-card-content">
                        曾任宝钢集团公司计划财务部会计处总帐与税务管理、秘书处秘书，宝山钢铁股份有限公司办公室秘书，上海宝信软件股份有限公司财务总监兼财务部经理、财务总监兼董事会秘书、副总经理兼财务总监、党委书记、总经理；现任上海宝信软件股份有限公司党委书记、董事长。
                    </p>
                </div>
                <div class="tpl-card-wrap">
                    <h6 class="tpl-card-name">夏雪松</h6>
                    <p class="tpl-card-main">
                        男，1970年12月出生，中南财经大学税收专业本科毕业，中欧国际工商学院EMBA，中共党员。
                    </p>
                    <p class="tpl-card-content">
                        曾任宝钢集团公司计划财务部会计处总帐与税务管理、秘书处秘书，宝山钢铁股份有限公司办公室秘书，上海宝信软件股份有限公司财务总监兼财务部经理、财务总监兼董事会秘书、副总经理兼财务总监、党委书记、总经理；现任上海宝信软件股份有限公司党委书记、董事长。
                    </p>
                </div>
            </div>

            <!-- one group -->
            <div class="cardGroup" v-show="currentIndex === 1" :key="1">
                <div class="tpl-card-wrap">
                    <h6 class="tpl-card-name">夏雪松2</h6>
                    <p class="tpl-card-main">
                        男，1970年12月出生，中南财经大学税收专业本科毕业，中欧国际工商学院EMBA，中共党员。
                    </p>
                    <p class="tpl-card-content">
                        曾任宝钢集团公司计划财务部会计处总帐与税务管理、秘书处秘书，宝山钢铁股份有限公司办公室秘书，上海宝信软件股份有限公司财务总监兼财务部经理、财务总监兼董事会秘书、副总经理兼财务总监、党委书记、总经理；现任上海宝信软件股份有限公司党委书记、董事长。
                    </p>
                </div>
                <div class="tpl-card-wrap">
                    <h6 class="tpl-card-name">夏雪松</h6>
                    <p class="tpl-card-main">
                        男，1970年12月出生，中南财经大学税收专业本科毕业，中欧国际工商学院EMBA，中共党员。
                    </p>
                    <p class="tpl-card-content">
                        曾任宝钢集团公司计划财务部会计处总帐与税务管理、秘书处秘书，宝山钢铁股份有限公司办公室秘书，上海宝信软件股份有限公司财务总监兼财务部经理、财务总监兼董事会秘书、副总经理兼财务总监、党委书记、总经理；现任上海宝信软件股份有限公司党委书记、董事长。
                    </p>
                </div>
                <div class="tpl-card-wrap">
                    <h6 class="tpl-card-name">夏雪松</h6>
                    <p class="tpl-card-main">
                        男，1970年12月出生，中南财经大学税收专业本科毕业，中欧国际工商学院EMBA，中共党员。
                    </p>
                    <p class="tpl-card-content">
                        曾任宝钢集团公司计划财务部会计处总帐与税务管理、秘书处秘书，宝山钢铁股份有限公司办公室秘书，上海宝信软件股份有限公司财务总监兼财务部经理、财务总监兼董事会秘书、副总经理兼财务总监、党委书记、总经理；现任上海宝信软件股份有限公司党委书记、董事长。
                    </p>
                </div>
            </div>

            <!-- one group -->
            <div class="cardGroup" v-show="currentIndex === 2"  :key="2">
                <div class="tpl-card-wrap">
                    <h6 class="tpl-card-name">夏雪松3</h6>
                    <p class="tpl-card-main">
                        男，1970年12月出生，中南财经大学税收专业本科毕业，中欧国际工商学院EMBA，中共党员。
                    </p>
                    <p class="tpl-card-content">
                        曾任宝钢集团公司计划财务部会计处总帐与税务管理、秘书处秘书，宝山钢铁股份有限公司办公室秘书，上海宝信软件股份有限公司财务总监兼财务部经理、财务总监兼董事会秘书、副总经理兼财务总监、党委书记、总经理；现任上海宝信软件股份有限公司党委书记、董事长。
                    </p>
                </div>
                <div class="tpl-card-wrap">
                    <h6 class="tpl-card-name">夏雪松</h6>
                    <p class="tpl-card-main">
                        男，1970年12月出生，中南财经大学税收专业本科毕业，中欧国际工商学院EMBA，中共党员。
                    </p>
                    <p class="tpl-card-content">
                        曾任宝钢集团公司计划财务部会计处总帐与税务管理、秘书处秘书，宝山钢铁股份有限公司办公室秘书，上海宝信软件股份有限公司财务总监兼财务部经理、财务总监兼董事会秘书、副总经理兼财务总监、党委书记、总经理；现任上海宝信软件股份有限公司党委书记、董事长。
                    </p>
                </div>
                <div class="tpl-card-wrap">
                    <h6 class="tpl-card-name">夏雪松</h6>
                    <p class="tpl-card-main">
                        男，1970年12月出生，中南财经大学税收专业本科毕业，中欧国际工商学院EMBA，中共党员。
                    </p>
                    <p class="tpl-card-content">
                        曾任宝钢集团公司计划财务部会计处总帐与税务管理、秘书处秘书，宝山钢铁股份有限公司办公室秘书，上海宝信软件股份有限公司财务总监兼财务部经理、财务总监兼董事会秘书、副总经理兼财务总监、党委书记、总经理；现任上海宝信软件股份有限公司党委书记、董事长。
                    </p>
                </div>
            </div>

            <!-- one group -->
            <div class="cardGroup" v-show="currentIndex === 3"  :key="3">
                <div class="tpl-card-wrap">
                    <h6 class="tpl-card-name">夏雪松4</h6>
                    <p class="tpl-card-main">
                        男，1970年12月出生，中南财经大学税收专业本科毕业，中欧国际工商学院EMBA，中共党员。
                    </p>
                    <p class="tpl-card-content">
                        曾任宝钢集团公司计划财务部会计处总帐与税务管理、秘书处秘书，宝山钢铁股份有限公司办公室秘书，上海宝信软件股份有限公司财务总监兼财务部经理、财务总监兼董事会秘书、副总经理兼财务总监、党委书记、总经理；现任上海宝信软件股份有限公司党委书记、董事长。
                    </p>
                </div>
                <div class="tpl-card-wrap">
                    <h6 class="tpl-card-name">夏雪松</h6>
                    <p class="tpl-card-main">
                        男，1970年12月出生，中南财经大学税收专业本科毕业，中欧国际工商学院EMBA，中共党员。
                    </p>
                    <p class="tpl-card-content">
                        曾任宝钢集团公司计划财务部会计处总帐与税务管理、秘书处秘书，宝山钢铁股份有限公司办公室秘书，上海宝信软件股份有限公司财务总监兼财务部经理、财务总监兼董事会秘书、副总经理兼财务总监、党委书记、总经理；现任上海宝信软件股份有限公司党委书记、董事长。
                    </p>
                </div>
                <div class="tpl-card-wrap">
                    <h6 class="tpl-card-name">夏雪松</h6>
                    <p class="tpl-card-main">
                        男，1970年12月出生，中南财经大学税收专业本科毕业，中欧国际工商学院EMBA，中共党员。
                    </p>
                    <p class="tpl-card-content">
                        曾任宝钢集团公司计划财务部会计处总帐与税务管理、秘书处秘书，宝山钢铁股份有限公司办公室秘书，上海宝信软件股份有限公司财务总监兼财务部经理、财务总监兼董事会秘书、副总经理兼财务总监、党委书记、总经理；现任上海宝信软件股份有限公司党委书记、董事长。
                    </p>
                </div>
            </div>

            <!-- one group -->
            <div class="cardGroup" v-show="currentIndex === 4"  :key="4">
                <div class="tpl-card-wrap">
                    <h6 class="tpl-card-name">夏雪松5</h6>
                    <p class="tpl-card-main">
                        男，1970年12月出生，中南财经大学税收专业本科毕业，中欧国际工商学院EMBA，中共党员。
                    </p>
                    <p class="tpl-card-content">
                        曾任宝钢集团公司计划财务部会计处总帐与税务管理、秘书处秘书，宝山钢铁股份有限公司办公室秘书，上海宝信软件股份有限公司财务总监兼财务部经理、财务总监兼董事会秘书、副总经理兼财务总监、党委书记、总经理；现任上海宝信软件股份有限公司党委书记、董事长。
                    </p>
                </div>
                <div class="tpl-card-wrap">
                    <h6 class="tpl-card-name">夏雪松</h6>
                    <p class="tpl-card-main">
                        男，1970年12月出生，中南财经大学税收专业本科毕业，中欧国际工商学院EMBA，中共党员。
                    </p>
                    <p class="tpl-card-content">
                        曾任宝钢集团公司计划财务部会计处总帐与税务管理、秘书处秘书，宝山钢铁股份有限公司办公室秘书，上海宝信软件股份有限公司财务总监兼财务部经理、财务总监兼董事会秘书、副总经理兼财务总监、党委书记、总经理；现任上海宝信软件股份有限公司党委书记、董事长。
                    </p>
                </div>
                <div class="tpl-card-wrap">
                    <h6 class="tpl-card-name">夏雪松</h6>
                    <p class="tpl-card-main">
                        男，1970年12月出生，中南财经大学税收专业本科毕业，中欧国际工商学院EMBA，中共党员。
                    </p>
                    <p class="tpl-card-content">
                        曾任宝钢集团公司计划财务部会计处总帐与税务管理、秘书处秘书，宝山钢铁股份有限公司办公室秘书，上海宝信软件股份有限公司财务总监兼财务部经理、财务总监兼董事会秘书、副总经理兼财务总监、党委书记、总经理；现任上海宝信软件股份有限公司党委书记、董事长。
                    </p>
                </div>
            </div>
        </transition-group>
        
        
    </div>
</template>
<script>

export default {
    data() {
        return {
            currentIndex : 0
        }
    },
    mounted() {
        
    }
}
</script>
<style lang="scss" scoped>
@import '../../style/template/index.scss';
</style>
