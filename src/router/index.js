import Vue from 'vue';
import VueRouter from 'vue-router';
//官方元件

import Home from '@/components/HelloWorld'
import Page from '@/components/pages/page'
import child from '@/components/pages/child'
import child2 from '@/components/pages/child2'
import child3 from '@/components/pages/child3'


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
            children: [
                {
                    name: '卡片１', // 元件呈現的名稱
                    path: '', //對應虛擬路徑
                    component: child, //對應元件
                },
                {
                    name: '卡片2', // 元件呈現的名稱
                    path: 'child2', //對應虛擬路徑
                    component: child2, //對應元件
                },
                {
                    name: '卡片3', // 元件呈現的名稱
                    path: 'child/:id', //對應虛擬路徑
                    component: child3, //對應元件
                },
            ]
        }
    ]
})