<template>
	<div class="page-container p-[12px]">
		<div class="bg-white h-full rounded-md p-[12px]">
			<transition name="fade-slide">
				<router-view v-slot="{ Component }">
					<component :is="Component" />
				</router-view>
			</transition>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.page-container {
	height: calc(100% - 56px);
}

/* fade-slide */
.fade-slide-leave-active,
.fade-slide-enter-active {
	transition: transform 0.3s, opacity 0.3s;
}

.fade-slide-enter-from {
	transform: translateX(-30px);
	opacity: 0;
}

.fade-slide-leave-to {
	transform: translateX(30px);
	opacity: 0;
}
</style>
