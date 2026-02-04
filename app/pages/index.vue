<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui/components/Button.vue'

const { t } = useI18n()

const links = ref([
	{
		label: t('index.buttons.projects.text'),
		to: t('index.buttons.projects.to'),
		variant: 'subtle',
		icon: 'i-lucide-folder-open',
		color: 'neutral'
	},
	{
		label: t('index.buttons.about.text'),
		to: t('index.buttons.about.to'),
		color: 'neutral',
		variant: 'subtle',
		trailingIcon: 'i-lucide-arrow-right'
	}
])

useSeoMeta({
	title: t('index.seo.title'),
	description: t('index.seo.description'),
	ogTitle: t('index.seo.title'),
	ogDescription: t('index.seo.description'),
	ogImage: 'summary_large_image',
	twitterCard: 'summary_large_image'
})
</script>

<template>
	<UPage class="background-index">
		<div class="flex flex-col justify-center items-center mt-10 photo">
			<NuxtImg
				alt="photo"
				src="/images/photo.jpg"
				preload
				:placeholder="['auto']"
				loading="lazy"
				class="mx-auto rounded-[50%] object-cover"
				@click="navigateTo('/about')"
			/>
		</div>
		<UPageBody>
			<UPageSection
				:ui="{
					container: 'm-auto !p-5 text-center w-full'
				}"
				class="actions"
				:title="$t('index.name')"
				:description="$t('index.description')"
				:links="links as ButtonProps[]"
			/>

			<div class="flex flex-col justify-center items-center">
				<p>{{ $t('index.skills') }}</p>
				<UMarquee pause-on-hover class="w-[50%] mx-auto mt-10">
					<UTooltip text="Archicad">
						<UIcon name="i-simple-icons-archicad" class="size-10 shrink-0" />
					</UTooltip>
					<UTooltip text="Blender 3D">
						<UIcon name="i-simple-icons-blender" class="size-10 shrink-0" />
					</UTooltip>
					<UTooltip text="Autodesk 3Ds Max">
						<UIcon name="i-simple-icons-autodesk" class="size-10 shrink-0" />
					</UTooltip>
					<UTooltip text="web3.js">
						<UIcon name="i-simple-icons-web3dotjs" class="size-10 shrink-0" />
					</UTooltip>
					<UTooltip text="Github">
						<UIcon name="i-simple-icons-github" class="size-10 shrink-0" />
					</UTooltip>
				</UMarquee>
			</div>
		</UPageBody>
	</UPage>
</template>
