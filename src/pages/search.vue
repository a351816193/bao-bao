<template>
<div class="result-wrap" v-loading="loading">
    <!-- 搜索结果 -->
    <div>
        <List-Item 
            v-for   ="(item, index) in searchList"
            :key    ="item.id"  
            :item   ="item"></List-Item>
    </div>
    <!-- 分页 -->
    <div v-if="total">
        <el-pagination
            small
            layout          ="prev, pager, next"
            :total          ="total"
            :current-page   ="pageNo + 1"
            :page-size      ="10"
            @current-change ="currentChange">
        </el-pagination>
    </div>
</div>
</template>
<script>
import ListItem from '@/components/search/listItem'
import {API_GetSearchResult} from '@/fetch/restApi'
export default {
    data() {
        return {
            pageSize: 10,
            pageNo: 0,
            total: 0,
            searchList: [],
            loading: false
        }
    },
    computed: {
        searchText() {
            return this.$route.query.querystr
        },
    },
    watch: {
        '$route.query.tag' : function() {
            this.pageNo = 0
            this.getSearchResult()
        }
    },
    methods: {
        getSearchResult() {
            if (!this.searchText) {
                return
            }
            this.loading = true
            API_GetSearchResult({
                pageSize: this.pageSize,
                pageNo: this.pageNo,
                condition: {
                    keyword : this.searchText
                }
            }).then(success => {
                this.loading = false
                this.pageNo = success.data.pageNo
                this.total = success.data.totalCount
                this.searchList = success.data.data
            }).catch(error => {
                this.loading = false
            })
        },
        currentChange(pageNo) {
            this.pageNo = pageNo - 1
            this.getSearchResult()
        }
    },
    created() {
        this.pageNo = 0
        this.getSearchResult()
    },
    components: {
        ListItem
    }
}
</script>
<style lang="scss" scoped>
@import '../style/param.scss';
.result-wrap {
    margin: 0 60px;
}
@media only screen and (max-width: 768px) {
    .result-wrap {
        margin: 0 30px;
    }
}
@media only screen and (min-width: 1400px) {
    .result-wrap {
        margin: 0 60px;
    }
}
</style>
