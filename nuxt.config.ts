// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	css: ['~/assets/css/main.css'],
	modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxt/image'],
	icon: {
		serverBundle: 'local'
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'ru'
			},
			link: [
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.ico'
				},
				{
					rel: 'canonical',
					href: 'https://tatyana-arkhipova.ru/'
				}
			]
		}
	},
	devtools: { enabled: false },
	ui: {
		colorMode: false
	},
	i18n: {
		defaultLocale: 'ru',
		locales: [{ code: 'ru', name: 'Русский', file: 'ru.json' }]
	},
	ssr: true
})
