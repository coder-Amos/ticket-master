import request from '@/utils/request'
// const qs = require('qs')

export default {
    // 登录
    userLogin: (payload) => {
        return request({
            baseURL: '/api',
            url: `/user/userLogin`,
            method: 'post',
            data: payload
        })
    },
    //注册
    saveUser: (payload) => {
        return request({
            baseURL: '/api',
            url: `/user/saveUser`,
            method: 'post',
            data: payload
        })
    },
    // 演唱会列表
    songsList: (payload) => {
        return request({
            baseURL: '/api',
            url: `/songs/getSongsList`,
            method: 'post',
            data: payload
        })
    },
    // 音乐节列表
    musicpartyList: (payload) => {
        return request({
            baseURL: '/api',
            url: `/musicparty/getMusicpartyList`,
            method: 'post',
            data: payload
        })
    },
    // 音乐剧列表
    dramaList: (payload) => {
        return request({
            baseURL: '/api',
            url: `/drama/getDramaList`,
            method: 'post',
            data: payload
        })
    },
    // 舞台剧列表
    stageList: (payload) => {
        return request({
            baseURL: '/api',
            url: `/stage/getStageList`,
            method: 'post',
            data: payload
        })
    },
    // 戏剧列表
    operaList: (payload) => {
        return request({
            baseURL: '/api',
            url: `/opera/getOperaList`,
            method: 'post',
            data: payload
        })
    },
    // 购买
    saveTicket: (payload) => {
        return request({
            baseURL: '/api',
            url: `/ticket/saveTicket`,
            method: 'post',
            data: payload
        })
    },
    // 获取购买记录 参数：用户名---》ticketuser
    getTicketHistory: (payload) => {
        return request({
            baseURL: '/api',
            url: `/ticket/getTicketuser`,
            method: 'post',
            data: payload
        })
    }

}