export const headerContent = {
	navigations: [
		'Главная',
		'О продукте <button class="header__button"></button>',
	],
	name: 'Ekaterina <button class="header__button"></button>'
}

export const navContent = {
	mainPage: 'Развитие<br /> бренда LD',
	nowPage: 'LD<br /> сегодня',
	historyPage: 'История фабрики<br /> Liggett Ducat'
}

export const paginationContent = {
	years: [
		{ number: '2022', type: 'one' },
		{ number: '2021', type: 'two' },
		{ number: '2020', type: 'three' },
		{ number: '2019', type: 'four' },
		{ number: '2017', type: 'five' },
		{ number: '2014', type: 'six' },
		{ number: '2010', type: 'seven' },
		{ number: '2007', type: 'eight' },
		{ number: '1999', type: 'nine' }
	]
}

export const storyContent = {
	one: {
		title: '1999',
		subtitle: 'История марки LD',
		desc: 'История марки LD началась в России<br /> в 1999 году на фабрике Лиггетт-Дукат в Москве,<br /> где была произведена первая пачка сигарет<br /> классического формата.',
		image: {
			source: [
				{
					srcSet: './images/pack/ld1999_m@1.5x.webp 1.5x, ./images/pack/ld1999_m@2x.webp 2x',
					type: 'image/webp',
					media: '(max-width: 999rem)'
				},
				{
					srcSet: './images/pack/ld1999_d@1.5x.webp',
					type: 'image/webp'
				},
				{
					srcSet: './images/pack/ld1999_m@1.5x.png 1.5x, ./images/pack/ld1999_m@2x.png 2x',
					type: 'image/png',
					media: '(max-width: 999rem)'
				}
			],
			imgAttr: {
				src: './images/pack/ld1999_d@1.5x.png',
				alt: 'Пачка сигарет LD 1999 года'
			}
		}
	},
	two: {
		title: '2007',
		subtitle: 'LD Pink Super Slims',
		desc: 'За годы работы на российском рынке марка LD завоевала себе имя настоящего новатора. И в 2007 году появились сигареты LD в потенциальном и набирающим оборот в то время супертонком формате — LD Pink Super Slims. Новинка была выпущена в сегменте сигарет по доступной цене, сделав их доступными для широкого круга потребителей.',
		image: {
			source: [
				{
					srcSet: './images/pack/ld2007_m@1.5x.webp 1.5x, ./images/pack/ld2007_m@2x.webp 2x',
					type: 'image/webp',
					media: '(max-width: 999rem)'
				},
				{
					srcSet: './images/pack/ld2007_d@1.5x.webp',
					type: 'image/webp'
				},
				{
					srcSet: './images/pack/ld2007_m@1.5x.png 1.5x, ./images/pack/ld2007_m@2x.png 2x',
					type: 'image/png',
					media: '(max-width: 999rem)'
				}
			],
			imgAttr: {
				src: './images/pack/ld2007_d@1.5x.png',
				alt: 'Пачка сигарет LD 2007 года'
			}
		}
	},
	three: {
		title: '2010',
		subtitle: 'LD Club Platinum',
		desc: '<p>Подтверждая статус новатора, в 2010 году под маркой LD запускаются новые сигареты LD Club Platinum — первый в среднеценовом сегменте продукт формата King Size Super Slims.</p>' +
			'<p>Вскоре после запуска линейка LD Club уже вошла в топ 3 мест по уровню продаж среди всех марок формата King Size Super Slims в России.</p>',
		image: {
			source: [
				{
					srcSet: './images/pack/ld2010_m@1.5x.webp 1.5x, ./images/pack/ld2010_m@2x.webp 2x',
					type: 'image/webp',
					media: '(max-width: 999rem)'
				},
				{
					srcSet: './images/pack/ld2010_d@1.5x.webp',
					type: 'image/webp'
				},
				{
					srcSet: './images/pack/ld2010_m@1.5x.png 1.5x, ./images/pack/ld2010_m@2x.png 2x',
					type: 'image/png',
					media: '(max-width: 999rem)'
				}
			],
			imgAttr: {
				src: './images/pack/ld2010_d@1.5x.png',
				alt: 'Пачка сигарет LD 2010 года'
			}
		}
	},
	four: {
		title: '2014',
		subtitle: 'LD Compact',
		desc: 'Сосредоточившись на производстве столь популярных сигарет компактного формата, в 2014 году LD выпустили очередную новинку уже в компактном формате - LD Club Compact. А годом позже именно LD первым открыл эру компактного удлиненного формата, выпустив сигареты LD Compact 100’s Blue, в которых на 25% больше табака по сравнению с компактным предложением.',
		image: {
			source: [
				{
					srcSet: './images/pack/ld2014_m@1.5x.webp 1.5x, ./images/pack/ld2014_m@2x.webp 2x',
					type: 'image/webp',
					media: '(max-width: 999rem)'
				},
				{
					srcSet: './images/pack/ld2014_d@1.5x.webp',
					type: 'image/webp'
				},
				{
					srcSet: './images/pack/ld2014_m@1.5x.png 1.5x, ./images/pack/ld2014_m@2x.png 2x',
					type: 'image/png',
					media: '(max-width: 999rem)'
				}
			],
			imgAttr: {
				src: './images/pack/ld2014_d@1.5x.png',
				alt: 'Пачка сигарет LD 2014 года'
			}
		}
	},
	five: {
		title: '2017',
		subtitle: 'Сигареты с капсулой',
		desc: 'Задачей марки LD с момента ее основания было предлагать совершеннолетним потребителям табачной продукции современные новинки, оставляя при этом качество неизменным. Следуя этому принципу, в 2017 году вышли первые сигареты с капсулой со вкусом лайма LD Autograph Impulse Compact, которые положили начало яркой капсульной линейке LD.',
		image: {
			source: [
				{
					srcSet: './images/pack/ld2017_m@1.5x.webp 1.5x, ./images/pack/ld2017_m@2x.webp 2x',
					type: 'image/webp',
					media: '(max-width: 999rem)'
				},
				{
					srcSet: './images/pack/ld2017_d@1.5x.webp',
					type: 'image/webp'
				},
				{
					srcSet: './images/pack/ld2017_m@1.5x.png 1.5x, ./images/pack/ld2017_m@2x.png 2x',
					type: 'image/png',
					media: '(max-width: 999rem)'
				}
			],
			imgAttr: {
				src: './images/pack/ld2017_d@1.5x.png',
				alt: 'Пачка сигарет LD 2017 года'
			}
		}
	},
	six: {
		title: '2019',
		subtitle: '2019 год стал одним из важнейших в эволюции бренда',
		desc: 'Рынок увидели новинки LD Sunny и LD Breezy с новыми вкусами капсул по доступной цене. Расширение капсульной линейки сигарет LD позволило сделать новый продукт интересным широкому кругу потребителей, давая возможность приобрести сигареты по доступной цене с новыми вкусами.',
		image: {
			source: [
				{
					srcSet: './images/pack/ld2019_m@1.5x.webp 1.5x, ./images/pack/ld2019_m@2x.webp 2x',
					type: 'image/webp',
					media: '(max-width: 999rem)'
				},
				{
					srcSet: './images/pack/ld2019_d@1.5x.webp',
					type: 'image/webp'
				},
				{
					srcSet: './images/pack/ld2019_m@1.5x.png 1.5x, ./images/pack/ld2019_m@2x.png 2x',
					type: 'image/png',
					media: '(max-width: 999rem)'
				}
			],
			imgAttr: {
				src: './images/pack/ld2019_d@1.5x.png',
				alt: 'Пачка сигарет LD 2019 года'
			}
		}
	},
	seven: {
		title: '2020',
		subtitle: 'В 2020 году произошло обновление дизайна всей линейки сигарет LD',
		desc: '<p>Эта новая ступень в развитии марки позволила создать продукт, соответствующий текущим запросам потребителей — были запущены сигареты в современном динамичном дизайне пачки и с новыми вкусами капсул, которые стали однимииз самых популярных среди потребителей.</p>' +
			'<p>А также свет увидела обновленная линейка LD Autograph по доступной цене и LD Regular 100 в удлиненном классическом формате.</p>',
		image: {
			source: [
				{
					srcSet: './images/pack/ld2020_m@1.5x.webp 1.5x, ./images/pack/ld2020_m@2x.webp 2x',
					type: 'image/webp',
					media: '(max-width: 999rem)'
				},
				{
					srcSet: './images/pack/ld2020_d@1.5x.webp',
					type: 'image/webp'
				},
				{
					srcSet: './images/pack/ld2020_m@1.5x.png 1.5x, ./images/pack/ld2020_m@2x.png 2x',
					type: 'image/png',
					media: '(max-width: 999rem)'
				}
			],
			imgAttr: {
				src: './images/pack/ld2020_d@1.5x.png',
				alt: 'Пачка сигарет LD 2020 года'
			}
		}
	},
	eight: {
		title: '2021',
		subtitle: 'Знак качества',
		desc: 'В 2021 году на задней стороне пачек появились знаки качества Quality+, призванные рассказать потребителю об основных технологиях продукта.',
		image: {
			source: [
				{
					srcSet: './images/pack/ld2021_m@1.5x.webp 1.5x, ./images/pack/ld2021_m@2x.webp 2x',
					type: 'image/webp',
					media: '(max-width: 999rem)'
				},
				{
					srcSet: './images/pack/ld2021_d@1.5x.webp',
					type: 'image/webp'
				},
				{
					srcSet: './images/pack/ld2021_m@1.5x.png 1.5x, ./images/pack/ld2021_m@2x.png 2x',
					type: 'image/png',
					media: '(max-width: 999rem)'
				}
			],
			imgAttr: {
				src: './images/pack/ld2021_d@1.5x.png',
				alt: 'Пачка сигарет LD 2021 года'
			}
		}
	},
	nine: {
		title: '2022',
		subtitle: '2022 год – год экспериментов для бренда LD',
		desc: '<p>Впервые в линейке LD появляются продукты с двумя уровнями вкуса: капсулой и ароматизированной табачной мешкой.</p>' +
			'<p>Новый продукт был создан в соответствии с меняющимися трендами табачного рынка, чтобы удовлетворить самых требовательных потребителей.</p>',
		image: {
			source: [
				{
					srcSet: './images/pack/ld2022_m@1.5x.webp 1.5x, ./images/pack/ld2022_m@2x.webp 2x',
					type: 'image/webp',
					media: '(max-width: 999rem)'
				},
				{
					srcSet: './images/pack/ld2022_d@1.5x.webp',
					type: 'image/webp'
				},
				{
					srcSet: './images/pack/ld2022_m@1.5x.png 1.5x, ./images/pack/ld2022_m@2x.png 2x',
					type: 'image/png',
					media: '(max-width: 999rem)'
				}
			],
			imgAttr: {
				src: './images/pack/ld2022_d@1.5x.png',
				alt: 'Пачка сигарет LD 2022 года'
			}
		},
	}
}