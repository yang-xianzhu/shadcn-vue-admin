import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Root',
		component: () => import('@/layout/index.vue'),
		children: [
			{
				path: '/pages/form',
				name: 'page-form',
				component: () => import('@/views/pages/form/index.vue'),
			},
			{
				path: '/pages/table',
				name: 'page-table',
				component: () => import('@/views/pages/table/index.vue'),
			},
		],
	},
	{ path: '/login', component: () => import('@/views/login/index.vue') },
]

export const router = createRouter({
	history: createWebHashHistory(),
	routes, // `routes: routes` 的缩写
})
