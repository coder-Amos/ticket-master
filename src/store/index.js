// eslint-disable-next-line vue/max-attributes-per-line
import Vue from 'vue'
import Vuex from 'vuex'
import dataApi from '@/api/index.js'

Vue.use(Vuex)
const state = {
    songsList: [],
    musicpartyList: [],
    dramaList: [],
    stageList: [],
    operaList: [],
    userLogined: false,
    username: '未登录'
}

const getters = {}

const mutations = {}

const actions = {
    // 用户登录
    store_userLogin({ commit }, payload) {
        return new Promise((resolve, reject) => {
            dataApi.userLogin(payload).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // 用户注册
    store_saveUser({ commit }, payload) {
        return new Promise((resolve, reject) => {
            dataApi.saveUser(payload).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // 演唱会列表
    store_songsList({ commit }, payload) {
        return new Promise((resolve, reject) => {
            dataApi.songsList(payload).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // 音乐节列表
    store_musicpartyList({ commit }, payload) {
        return new Promise((resolve, reject) => {
            dataApi.musicpartyList(payload).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // 音乐剧列表
    store_dramaList({ commit }, payload) {
        return new Promise((resolve, reject) => {
            dataApi.dramaList(payload).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // 舞台剧列表
    store_stageList({ commit }, payload) {
        return new Promise((resolve, reject) => {
            dataApi.stageList(payload).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // 戏剧列表
    store_operaList({ commit }, payload) {
        return new Promise((resolve, reject) => {
            dataApi.operaList(payload).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // goumai
    store_saveTicket({ commit }, payload) {
        return new Promise((resolve, reject) => {
            dataApi.saveTicket(payload).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // 获取购买记录
    store_getTicketHistory({ commit }, payload) {
        return new Promise((resolve, reject) => {
            dataApi.getTicketHistory(payload).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
export default store