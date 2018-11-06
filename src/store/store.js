import Vuex from 'vuex'
import Vue from 'vue'
import {API_GetMenuList} from '@/fetch/restApi'
const def = store => {
    store.dispatch('getMenuList')
}

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menuList: [],
        firstLevelMenuList: [],
        firstLevelMenuListById: {},
        secondLevelMenuListById: {},
        searchText: ''
    },
    getters: {
        firstLevelMenuList : state => {
            return state.firstLevelMenuList
        },
        firstLevelMenuListById : state => {
            return state.firstLevelMenuListById
        },
        secondLevelMenuListById : state => {
            return state.secondLevelMenuListById
        },
        searchText: state => state.searchText
    },
    actions: {
        getMenuList: ({dispatch, commit, state}) => {
            API_GetMenuList().then(success => {
                commit('setMenuList', success.data)
            }).catch(error => {
                
            })
        },
    },
    mutations: {
        setMenuList: (state, playload) => {
            // 取出首页菜单
            state.menuList = playload && playload.length && playload[0].childs || []
            state.firstLevelMenuList = []
            state.firstLevelMenuListById = {}
            state.secondLevelMenuListById = {}
            for (let i = 0; i < state.menuList.length; i++) {
                state.firstLevelMenuList.push(state.menuList[i])
                state.firstLevelMenuListById[state.menuList[i].nodeId] = state.menuList[i]
                for(let j = 0; j < state.menuList[i].childs.length; j ++) {
                    let node = state.menuList[i].childs[j]
                    state.secondLevelMenuListById[node.nodeId] = node
                }
            }
        },
        setSearchText: (state, playload) => {
            // 设置搜索文字
            state.searchText = playload
        }
    },
    plugins: [def]
})