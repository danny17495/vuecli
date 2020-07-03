import Vue from 'vue';
import VueRouter from 'vue-router';
//官方元件

import Home from '@/components/HelloWorld'
import Page from '@/components/pages/page'

//自訂分頁元件

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            name: '首頁', // 元件呈現的名稱
            path: '/index', //對應虛擬路徑
            component: Home, //對應元件
        },
        {
            name: '分頁', // 元件呈現的名稱
            path: '/page', //對應虛擬路徑
            component: Page, //對應元件
        }
    ]
})