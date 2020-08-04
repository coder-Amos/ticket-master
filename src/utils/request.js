import axios from 'axios'
import { Message } from 'element-ui'


// 统一配置
const service = axios.create({
    baseURL: '/api', // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 36000 // request timeout
})

// 拦截响应
service.interceptors.response.use(response => {
    const res = response.data
    if (res.state) {
        if (res.state === 200) {
            return res
        } else {
            Message({
                type: 'error',
                message: res.message || '请求失败',
                duration: 2000
            })
            return Promise.reject(res || '请求失败')
        }
    } else {
        return res
    }
})

export default service