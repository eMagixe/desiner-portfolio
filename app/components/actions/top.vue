<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const main = computed(() => {
	return useAppConfig().ru.sidebar.links as NavigationMenuItem[]
})
</script>

<template>
	<UHeader toggle-side="left">
		<template #left>
			<ActionsLogo />
		</template>

		<UNavigationMenu :items="main" />

		<template #right>
			<ActionsContacts />
		</template>

		<template #body>
			<UNavigationMenu :items="main" orientation="vertical" />
		</template>
	</UHeader>
</template>

<style scoped></style>
