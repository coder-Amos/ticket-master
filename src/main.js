import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import db from '@/utils/localstorage'
//引入icon
import "./icons/iconfont.css"
Vue.config.productionTip = false
Vue.use(ElementUI)
    //实现localstorage的储存引入
Vue.use(db)
Vue.use({
    install(Vue) {
        Vue.prototype.$db = db
    }
})

//导入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//导入vuex
import store from './store'
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})