<template>
	<div :class="cn('w-[220px] h-screen bg-black  text-white', $attrs.class ?? '')">
		<div class="space-y-4 py-4">
			<div class="mx-4 text-3xl flex justify-center">
				<img :src="vueLogo" alt="" />
			</div>
			<div class="py-2" v-for="playlist in playlists" :key="playlist.key">
				<h2 class="relative px-7 text-lg font-semibold tracking-tight">{{ playlist.label }}</h2>
				<ScrollArea class="px-1">
					<div class="space-y-1 p-2">
						<Button v-for="item in playlist.children" :key="item.key" variant="ghost" class="w-full justify-start font-normal" @click="router.push(item.key)">
							{{ item.label }}
						</Button>
					</div>
				</ScrollArea>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useRouter } from 'vue-router'
import vueLogo from '@/assets/vue.svg'

interface SidebarProps {
	playlists: any[]
}

const router = useRouter()

defineProps<SidebarProps>()
</script>
