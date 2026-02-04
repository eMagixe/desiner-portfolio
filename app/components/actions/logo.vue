<script setup lang="ts">
const props = defineProps({
	size: {
		type: String,
		default: '16'
	}
})

const color = '#9D74FC'
</script>

<template>
	<NuxtLink to="/" class="flex items-center justify-center">
		<span
			class="text-gray-100! border-2 border-r-0 px-1"
			:class="`text-${props.size} border-[${color}] bg-[#9D74FC]`"
			>3D</span
		>
		<span class="border-2 px-1 text-gray-100!" :class="`text-${props.size} border-[${color}]`"> Modeler </span>
	</NuxtLink>
</template>
