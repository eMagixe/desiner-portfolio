<script setup lang="ts">
const { t } = useI18n()

const images = <string[]>[]

for (let i = 1; i < 50; i++) {
	images.push(`/images/projects/${i}.jpg`)
}

useSeoMeta({
	title: t('projects.seo.title'),
	ogTitle: t('projects.seo.title'),
	description: t('projects.seo.description'),
	ogDescription: t('projects.seo.description'),
	twitterCard: 'summary_large_image'
})
</script>

<template>
	<UContainer>
		<UPageHeader :title="$t('projects.title')" />

		<UCarousel v-slot="{ item }" class-names arrows :items="images" class="mx-auto w-full mb-5">
			<NuxtImg :src="item" preload :placeholder="['auto']" loading="lazy" class="mx-auto w-full object-cover" />
		</UCarousel>

		<div class="actions flex flex-row justify-between items-center w-full mb-10">
			<UButton icon="i-lucide-arrow-left" :to="$t('projects.buttons.prev.to')" color="neutral" variant="outline">
				{{ $t('projects.buttons.prev.text') }}
			</UButton>
			<p>{{ $t('projects.title') }}</p>
			<UButton
				trailing-icon="i-lucide-arrow-right"
				:to="$t('projects.buttons.next.to')"
				color="neutral"
				variant="outline"
			>
				{{ $t('projects.buttons.next.text') }}
			</UButton>
		</div>
	</UContainer>
</template>
