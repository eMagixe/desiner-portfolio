<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
	title: t('about.seo.title'),
	ogTitle: t('about.seo.title'),
	description: t('about.seo.description'),
	ogDescription: t('about.seo.description'),
	twitterCard: 'summary_large_image'
})

const learn = [
	'Autodesk 3ds max 2025 - Сложное моделирование Бауманский центр компьютерного обучения «Специалист» 2024',
	'3D моделирование в Blender Учебный центр «Специалист» при МГТУ им. Н.Э. Баумана, Фотореалистичная визуализация 2023',
	'Фотореалистичная визуализация в Blender Учебный центр «Специалист» при МГТУ им. Н.Э. Баумана, Фотореалистичная визуализация 2023',
	'Моделирование персонажей в Blender Учебный центр «Специалист» при МГТУ им. Н.Э. Баумана, Фотореалистичная визуализация 2023',
	'Веб-разработчик Московский финансово-промышленный университет «Синергия» 2023'
]
</script>

<template>
	<UContainer>
		<UPageHeader :title="$t('about.title')" />
		<h2 class="my-5">{{ $t('about.content.start_block.title') }}</h2>
		<p>
			{{ $t('about.content.start_block.text') }}
		</p>
		<h2 class="my-5">{{ $t('about.content.middle_block.title') }}</h2>
		<p>
			{{ $t('about.content.middle_block.text') }}
		</p>
		<h2 class="my-5">{{ $t('about.content.learn_block.title') }}</h2>
		<p>
			{{ $t('about.content.learn_block.text') }}
		</p>

		<ul class="my-5">
			<li class="border-b border-old-neutral-500 mb-2" v-for="item in learn">{{ item }}</li>
		</ul>

		<h2 class="my-5">{{ $t('about.content.future_block.title') }}</h2>
		<p>
			{{ $t('about.content.future_block.text') }}
			<NuxtLink class="underline" :to="$t('about.content.future_block.link.to')">
				{{ $t('about.content.future_block.link.text') }}
			</NuxtLink>
		</p>

		<div class="actions flex flex-row justify-between items-center w-full my-10">
			<UButton icon="i-lucide-arrow-left" :to="$t('about.buttons.prev.to')" color="neutral" variant="outline">
				{{ $t('about.buttons.prev.text') }}
			</UButton>
			<p>{{ $t('about.title') }}</p>
			<UButton
				trailing-icon="i-lucide-arrow-right"
				:to="$t('about.buttons.next.to')"
				color="neutral"
				variant="outline"
			>
				{{ $t('about.buttons.next.text') }}
			</UButton>
		</div>
	</UContainer>
</template>

<style scoped></style>
