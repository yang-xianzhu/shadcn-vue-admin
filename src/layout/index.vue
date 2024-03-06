<template>
	<div class="flex">
		<Sidebar :playlists="playlists" />
		<div class="flex-1 bg-gray-200 h-screen">
			<Header />
			<Main />
		</div>
	</div>
</template>

<script setup lang="ts">
import Sidebar from './sidebar/index.vue'
import Header from './header/index.vue'
import Main from './main/index.vue'
import type { TplayItem } from './sidebar/type'

const playlists: TplayItem[] = [
	{
		title: '页面',
		list: [
			{
				label: '表单页',
				key: '/page/form',
			},
			{
				label: '详情页',
				key: '/page/detail',
			},
		],
	},
	{
		title: '组件',
		list: [
			{
				label: 'Table',
				key: '/table',
			},
			{
				label: 'Form',
				key: '/form',
			},
		],
	},
]
</script>
