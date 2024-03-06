import { createRouter, createWebHashHistory } from 'vue-router'
// import Layout from '@/layout/index.vue'

const routes = [
	{
		path: '/',
		name: 'Root',
		component: () => import('@/layout/index.vue'),
		children: [], // 首页路由合并到主模块路由
	},
	{ path: '/login', component: () => import('@/views/login/index.vue') },
]

export default createRouter({
	history: createWebHashHistory(),
	routes, // `routes: routes` 的缩写
})
