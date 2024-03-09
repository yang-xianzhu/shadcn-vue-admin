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
		label: '页面',
		key: '/pages/form',
		children: [
			{
				label: '表单页',
				key: '/pages/form',
			},
			{
				label: '基础表格',
				key: '/pages/table',
			},
		],
	},
	{
		label: '组件',
		key: '/table',
		children: [
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
