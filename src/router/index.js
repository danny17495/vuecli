import Vue from 'vue';
import VueRouter from 'vue-router';
//官方元件

import Home from '@/components/HelloWorld'
//自訂分頁元件

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            name: '首頁', // 元件呈現的名稱
            path: '/index', //對應虛擬路徑
            components: Home, //對應元件
        }
    ]
})