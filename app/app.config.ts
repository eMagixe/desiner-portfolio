export default defineAppConfig({
	global: {
		meetingLink: 'https://cal.com/',
		email: 'ui-pro@nuxt.com',
		available: true
	},
	ru: {
		sidebar: {
			links: [
				[
					{
						label: 'Главная',
						to: '/',
						icon: 'i-lucide-home'
					},
					{
						label: 'Опыт работы',
						to: '/jobs',
						icon: 'i-lucide-rocket'
					},
					{
						label: 'Навыки',
						to: '/skills',
						icon: 'i-lucide-code'
					},
					{
						label: 'Мои работы',
						to: '/projects',
						icon: 'i-lucide-folder-open'
					},
					{
						label: 'Биография',
						to: '/about',
						icon: 'i-lucide-user'
					}
				]
			]
		},
		jobs: [
			{
				date: 'Июнь, 2024',
				title: 'ООО "ДЭФО М"',
				icon: 'i-lucide-check-circle',
				description: '3D-моделлер',
				skills: [
					'Моделирование в ArchiCAD, Blender3D, 3Ds Max',
					'Визуализация в Cycles и Corona',
					'Высокополигональное моделирование'
				]
			},
			{
				date: 'Сентябрь, 2023',
				title: 'ПК "ТБУ"',
				description: '3D-моделлер',
				icon: 'i-lucide-check-circle',
				skills: ['Офисная мебель, интерьеры для промышленных помещений', 'Визуализация в Cycles и Eevee']
			},
			{
				date: 'Январь, 2023',
				title: 'Freelance',
				description: 'Графический дизайнер/3D-desinger',
				icon: 'i-lucide-rocket',
				skills: [
					'Моделирование, визуализация и анимация сцен',
					'Полиграфия и графический дизайн для частных клиентов'
				]
			}
		],
		skills: {
			first: [
				{
					name: 'ArchiCAD',
					description: [
						'Создание и редактирование моделей',
						'работа с текстурами',
						'чтение чертежей',
						'разработка планировки помещения (размеры, эргономика)',
						'подготовка документации и презентации для заказчика',
						'создание фото-реалистичных визуализаций'
					],
					icon: 'i-simple-icons-archicad',
					to: 'https://www.graphisoft.com/ru/solutions/archicad',
					target: '_blank'
				},
				{
					name: 'Blender 3D',
					description: [
						'Моделирование объектов и персонажей',
						'анимация',
						'текстурирование',
						'UV развертка',
						'создание материалов',
						'скульптинг',
						'визуализация'
					],
					icon: 'i-simple-icons-blender',
					to: 'https://www.blender.org',
					target: '_blank'
				},
				{
					name: 'Autodesk 3ds Max',
					description: [
						'Моделирование архитектурных проектов',
						'экстерьер и интерьер коммерческих и некоммерческих объектов',
						'фото-реалистичная визуализация Corona Render',
						'работа с текстурами и материалами',
						'работа с окружением'
					],
					icon: 'i-simple-icons-autodesk',
					to: 'https://www.autodesk.com/products/3ds-max/overview',
					target: '_blank'
				}
			],
			second: [
				{
					name: 'Adobe Photoshop',
					description:
						'Многофункциональный графический редактор, предназначенный в первую очередь для создания и редактирования растровых изображений.',
					icon: 'i-simple-icons-adobe',
					to: 'https://vueuse.org',
					target: '_blank'
				},
				{
					name: 'Adobe Illustrator',
					description:
						'Профессиональный редактор векторной графики от компании Adobe, используемый для создания масштабируемых изображений',
					icon: 'i-simple-icons-adobe',
					to: 'https://ui.nuxt.com',
					target: '_blank'
				},
				{
					name: 'Affinity Designer',
					description: 'Профессиональный векторный графический редактор от Serif Europe',
					icon: 'i-simple-icons-canvas',
					to: 'https://www.affinity.studio',
					target: '_blank'
				}
			]
		},
		projects: [
			{
				name: 'Sharmed Books',
				image: '',
				quote: 'Интерактивные книжки для детей',
				description:
					'Проект по созданию интерактивных детских книжек с встроенным редактором и онлайн магазином',
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
				slug: 'charmed-books',
				format: 'png',
				images: [1, 2, 3]
			},
			{
				name: 'DCLI',
				image: '',
				quote: 'Центр лабораторных исследований',
				description: 'Проект по автоматизации и контролю лаболаторных исследований',
				format: 'jpg',
				slug: 'dcli',
				images: [1, 2, 3, 4],
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Chart.js']
			},
			{
				name: 'Kit Tracker',
				image: '',
				quote: 'Отслеживание поставок анализа крови',
				description: 'Проект по отслеживанию и контролю полного пути следоваания анализов',
				format: 'jpg',
				slug: 'kit',
				images: [1, 2, 3],
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Chart.js']
			},
			{
				name: 'Raimbek',
				image: '',
				quote: 'Первый казахский молочный завод',
				description: 'Первый завод Казахстана по производству соков спиртоводочных изделий и молока',

				stack: ['Vue.js', 'Tailwind CSS', 'Three.js'],
				slug: 'raimbek',
				format: 'jpg',
				images: [1, 2]
			},
			{
				name: 'Portal',
				image: '',
				quote: 'Интернет магазин книг по эзотерике',
				description: 'Портал по созданию и продаже книг и статей по эзотерике и духовным практикам',
				slug: 'portal',
				format: 'png',
				images: [1, 2],
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS']
			},
			{
				name: 'IdoArt',
				image: '',
				quote: 'Сайт по продаже курсов и обучающих материалов',
				description: 'Продажа создание и просмотр видео курсов по исскуству и рисованию',
				slug: 'idoArt',
				format: 'png',
				images: [1, 2, 3],
				stack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS']
			},
			{
				name: 'Русхимальянс',
				image: '',
				quote: 'Газоперерабатывающий завод в России',
				description: 'Новый дизайн газоперерабатывающего завода',
				slug: 'rca',
				format: 'png',
				images: [1, 2],
				stack: ['BEM', 'JavaScript', 'Tailwind CSS']
			}
		]
	},
	footer: {
		credits: `Magixe © ${new Date().getFullYear()}`
	},
	ui: {
		avatar: {
			variants: {
				size: {
					'3xl': {
						root: 'lg:size-80 md:size-60 sm:size-40 size-30'
					}
				}
			}
		},
		pageHeader: {
			slots: {
				root: 'border-0'
			}
		},
		pageSection: {
			slots: {
				container: 'flex flex-col lg:grid py-5 sm:projects-5 lg:projects-5 gap-5 sm:gap-5'
			}
		}
	}
})
