export const headerContent = {
    navigations: [
        { name: 'Главная', link: '/' },
        { name: 'О продукте <button class="header__button header__button_nav"></button>', link: '/#' }
    ],
    user: 'Ekaterina <button class="header__button"></button>'
};

export const navContent = {
    mainPage: 'Развитие<br /> бренда LD',
    nowPage: 'LD<br /> сегодня',
    historyPage: 'История фабрики<br /> Liggett Ducat',
    clue: {
        now: 'Скрольте вниз',
        history: 'В начало'
    }
};

export const paginationContent = {
    years: [
        { number: '2022', type: 1 },
        { number: '2021', type: 2 },
        { number: '2020', type: 3 },
        { number: '2019', type: 4 },
        { number: '2017', type: 5 },
        { number: '2014', type: 6 },
        { number: '2010', type: 7 },
        { number: '2007', type: 8 },
        { number: '1999', type: 9 }
    ]
};

export const storyContent = {
    9: {
        title: '1999',
        subtitle: 'История марки LD',
        desc: 'История марки LD началась в России<br /> в 1999 году на фабрике Лиггетт-Дукат в Москве,<br /> где была произведена первая пачка сигарет<br /> классического формата.',
        list: [
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ld1999_m@1.5x.webp 1.5x, ./images/pack/ld1999_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld1999_m@1.5x.png 1.5x, ./images/pack/ld1999_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld1999_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ld1999_d@1.5x.png',
                        alt: 'Пачка сигарет LD 1999 года'
                    }
                }
            }
        ]
    },
    8: {
        title: '2007',
        subtitle: 'LD Pink Super Slims',
        desc: 'За годы работы на российском рынке марка LD завоевала себе&nbsp;имя настоящего новатора. И&nbsp;в&nbsp;2007 году появились сигареты LD в&nbsp;потенциальном и набирающим оборот в&nbsp;то&nbsp;время&nbsp;супертонком формате — LD Pink Super&nbsp;Slims.&nbsp;Новинка&nbsp;была выпущена в&nbsp;сегменте сигарет по&nbsp;доступной цене, сделав их доступными для&nbsp;широкого&nbsp;круга потребителей.',
        list: [
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ld2007_m@1.5x.webp 1.5x, ./images/pack/ld2007_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2007_m@1.5x.png 1.5x, ./images/pack/ld2007_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2007_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ld2007_d@1.5x.png',
                        alt: 'Пачка сигарет LD 2007 года'
                    }
                }
            }
        ]
    },
    7: {
        title: '2010',
        subtitle: 'LD Club Platinum',
        desc: '<div class="story__desc_p">Подтверждая статус новатора, в 2010 году под маркой LD запускаются новые сигареты LD Club Platinum — первый в&nbsp;среднеценовом сегменте продукт формата King Size Super Slims.</div>' +
            'Вскоре после запуска линейка LD Club уже вошла в топ 3 мест по&nbsp;уровню продаж среди всех марок формата King&nbsp;Size&nbsp;Super&nbsp;Slims в России.',
        list: [
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ld2010_m@1.5x.webp 1.5x, ./images/pack/ld2010_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2010_m@1.5x.png 1.5x, ./images/pack/ld2010_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2010_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ld2010_d@1.5x.png',
                        alt: 'Пачка сигарет LD 2010 года'
                    }
                }
            }
        ]
    },
    6: {
        title: '2014',
        subtitle: 'LD Compact',
        desc: 'Сосредоточившись на производстве столь популярных сигарет компактного формата, в 2014 году LD выпустили очередную новинку уже в компактном формате - LD Club Compact.<br /> А годом позже именно LD первым открыл эру компактного удлиненного формата, выпустив сигареты LD Compact 100’s Blue, в которых на 25% больше табака по сравнению<br class="story__desc_br2014" /> с компактным предложением.',
        list: [
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ld2014_1_m@1.5x.webp 1.5x, ./images/pack/ld2014_1_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2014_1_m@1.5x.png 1.5x, ./images/pack/ld2014_1_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2014_1_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ld2014_1_d@1.5x.png',
                        alt: 'Пачка сигарет LD 2014 года'
                    }
                }
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ld2014_2_m@1.5x.webp 1.5x, ./images/pack/ld2014_2_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2014_2_m@1.5x.png 1.5x, ./images/pack/ld2014_2_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2014_2_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ld2014_2_d@1.5x.png',
                        alt: 'Пачка сигарет LD 2014 года'
                    }
                }
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ld2014_3_m@1.5x.webp 1.5x, ./images/pack/ld2014_3_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2014_3_m@1.5x.png 1.5x, ./images/pack/ld2014_3_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2014_3_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ld2014_3_d@1.5x.png',
                        alt: 'Пачка сигарет LD 2014 года'
                    }
                }
            }
        ]
    },
    5: {
        title: '2017',
        subtitle: 'Сигареты с капсулой',
        desc: 'Задачей марки LD с момента ее основания было предлагать совершеннолетним потребителям табачной продукции современные новинки, оставляя при этом качество неизменным. Следуя&nbsp;этому&nbsp;принципу, в 2017 году вышли первые сигареты с капсулой со вкусом лайма LD Autograph Impulse Compact, которые положили начало яркой капсульной линейке&nbsp;LD.',
        list: [
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ld2017_m@1.5x.webp 1.5x, ./images/pack/ld2017_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2017_m@1.5x.png 1.5x, ./images/pack/ld2017_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2017_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ld2017_d@1.5x.png',
                        alt: 'Пачка сигарет LD 2017 года'
                    }
                }
            }
        ]
    },
    4: {
        title: '2019',
        subtitle: '2019 год стал одним из важнейших<br /> в эволюции бренда',
        desc: 'Рынок увидели новинки LD Sunny и LD Breezy с новыми вкусами капсул по доступной цене. Расширение капсульной линейки сигарет LD&nbsp;позволило сделать новый продукт интересным широкому кругу потребителей, давая возможность приобрести сигареты по&nbsp;доступной цене с&nbsp;новыми вкусами.',
        list: [
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ld2019_1_m@1.5x.webp 1.5x, ./images/pack/ld2019_1_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2019_1_m@1.5x.png 1.5x, ./images/pack/ld2019_1_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2019_1_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ld2019_1_d@1.5x.png',
                        alt: 'Пачка сигарет LD 2019 года'
                    }
                }
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ld2019_2_m@1.5x.webp 1.5x, ./images/pack/ld2019_2_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2019_2_m@1.5x.png 1.5x, ./images/pack/ld2019_2_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2019_2_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ld2019_2_d@1.5x.png',
                        alt: 'Пачка сигарет LD 2019 года'
                    }
                }
            }
        ]
    },
    3: {
        title: '2020',
        subtitle: 'В 2020 году произошло обновление дизайна всей линейки сигарет LD',
        desc: '<div class="story__desc_p">Эта новая ступень в развитии марки позволила создать продукт, соответствующий текущим запросам потребителей — были запущены сигареты в современном динамичном дизайне пачки и с новыми вкусами капсул, которые стали одними из&nbsp;самых популярных среди потребителей.</div>' +
            'А также свет увидела обновленная линейка LD&nbsp;Autograph по&nbsp;доступной цене и LD Regular 100 в удлиненном классическом&nbsp;формате.',
        list: [
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ld2020_1_m@1.5x.webp 1.5x, ./images/pack/ld2020_1_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2020_1_m@1.5x.png 1.5x, ./images/pack/ld2020_1_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2020_1_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ld2020_1_d@1.5x.png',
                        alt: 'Пачка сигарет LD 2020 года'
                    }
                }
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ld2020_2_m@1.5x.webp 1.5x, ./images/pack/ld2020_2_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2020_2_m@1.5x.png 1.5x, ./images/pack/ld2020_2_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2020_2_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ld2020_2_d@1.5x.png',
                        alt: 'Пачка сигарет LD 2020 года'
                    }
                }
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ld2020_3_m@1.5x.webp 1.5x, ./images/pack/ld2020_3_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2020_3_m@1.5x.png 1.5x, ./images/pack/ld2020_3_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2020_3_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ld2020_3_d@1.5x.png',
                        alt: 'Пачка сигарет LD 2020 года'
                    }
                }
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ld2020_4_m@1.5x.webp 1.5x, ./images/pack/ld2020_4_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2020_4_m@1.5x.png 1.5x, ./images/pack/ld2020_4_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2020_4_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ld2020_4_d@1.5x.png',
                        alt: 'Пачка сигарет LD 2020 года'
                    }
                }
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ld2020_5_m@1.5x.webp 1.5x, ./images/pack/ld2020_5_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2020_5_m@1.5x.png 1.5x, ./images/pack/ld2020_5_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2020_5_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ld2020_5_d@1.5x.png',
                        alt: 'Пачка сигарет LD 2020 года'
                    }
                }
            }
        ]
    },
    2: {
        title: '2021',
        subtitle: 'Знак качества',
        desc: 'В 2021 году на задней стороне пачек появились знаки качества Quality+, призванные рассказать потребителю об основных технологиях продукта.',
        list: [
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ld2021_m@1.5x.webp 1.5x, ./images/pack/ld2021_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2021_m@1.5x.png 1.5x, ./images/pack/ld2021_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2021_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ld2021_d@1.5x.png',
                        alt: 'Пачка сигарет LD 2021 года'
                    }
                }
            }
        ]
    },
    1: {
        title: '2022',
        subtitle: '2022 год – год экспериментов для бренда LD',
        desc: '<div class="story__desc_p2022">Впервые в линейке LD появляются продукты с двумя уровнями вкуса: капсулой и ароматизированной табачной мешкой.</div>' +
            '<div class="story__desc_p2022">Новый продукт был создан в&nbsp;соответствии с&nbsp;меняющимися&nbsp;трендами табачного рынка, чтобы удовлетворить самых требовательных потребителей.</div>',
        list: [
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ld2022_m@1.5x.webp 1.5x, ./images/pack/ld2022_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2022_m@1.5x.png 1.5x, ./images/pack/ld2022_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ld2022_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ld2022_d@1.5x.png',
                        alt: 'Пачка сигарет LD 2022 года'
                    }
                }
            }
        ]
    }
};

export const backgroundImageMain = {
    9: {
        list: [
            {
                svgSrc: './icons/stars.svg'
            },
            {
                svgSrc: './icons/thin_stick.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/dots.svg'
            }
        ],
        image: {
            sources: [
                {
                    srcSet: './images/background/bg_main/bg1999_m@1.5x.webp 1.5x, ./images/background/bg_main/bg1999_m@2x.webp 2x',
                    type: 'image/webp',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_main/bg1999_m@1.5x.jpg 1.5x, ./images/background/bg_main/bg1999_m@2x.jpg 2x',
                    type: 'image/jpeg',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_main/bg1999_d@1.5x.webp',
                    type: 'image/webp',
                    media: '(min-width: 1024px)'
                }
            ],
            imgAttr: {
                src: './images/background/bg_main/bg1999_d@1.5x.jpg',
                alt: 'Фон слайда'
            }
        }
    },
    8: {
        list: [
            {
                svgSrc: './icons/stars.svg'
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_main/smoke_m@1.5x.webp 1.5x, ./images/background/bg_main/smoke_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/smoke_m@1.5x.png 1.5x, ./images/background/bg_main/smoke_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/smoke_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/background/bg_main/smoke_d@1.5x.png',
                        alt: 'Нижняя картинка'
                    }
                }
            }
        ],
        image: {
            sources: [
                {
                    srcSet: './images/background/bg_main/bg2007_m@1.5x.webp 1.5x, ./images/background/bg_main/bg2007_m@2x.webp 2x',
                    type: 'image/webp',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_main/bg2007_m@1.5x.jpg 1.5x, ./images/background/bg_main/bg2007_m@2x.jpg 2x',
                    type: 'image/jpeg',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_main/bg2007_d@1.5x.webp',
                    type: 'image/webp',
                    media: '(min-width: 1024px)'
                }
            ],
            imgAttr: {
                src: './images/background/bg_main/bg2007_d@1.5x.jpg',
                alt: 'Фон слайда'
            }
        }
    },
    7: {
        list: [
            {
                svgSrc: './icons/stars.svg'
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_main/star2010_m@1.5x.webp 1.5x, ./images/background/bg_main/star2010_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/star2010_m@1.5x.png 1.5x, ./images/background/bg_main/star2010_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/star2010_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/background/bg_main/star2010_d@1.5x.png',
                        alt: 'Нижняя картинка'
                    }
                }
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_main/gradient2010_m@1.5x.webp 1.5x, ./images/background/bg_main/gradient2010_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/gradient2010_m@1.5x.png 1.5x, ./images/background/bg_main/gradient2010_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/gradient2010_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/background/bg_main/gradient2010_d@1.5x.png',
                        alt: 'Нижняя картинка'
                    }
                }
            },
            {
                svgSrc: './icons/stripes.svg'
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_main/dots_m@1.5x.webp 1.5x, ./images/background/bg_main/dots_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/dots_m@1.5x.png 1.5x, ./images/background/bg_main/dots_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/dots_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/background/bg_main/dots_d@1.5x.png',
                        alt: 'Нижняя картинка'
                    }
                }
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_main/dots_m@1.5x.webp 1.5x, ./images/background/bg_main/dots_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/dots_m@1.5x.png 1.5x, ./images/background/bg_main/dots_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/dots_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/background/bg_main/dots_d@1.5x.png',
                        alt: 'Нижняя картинка'
                    }
                }
            }
        ],
        image: {
            sources: [
                {
                    srcSet: './images/background/bg_main/bg2010_m@1.5x.webp 1.5x, ./images/background/bg_main/bg2010_m@2x.webp 2x',
                    type: 'image/webp',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_main/bg2010_m@1.5x.jpg 1.5x, ./images/background/bg_main/bg2010_m@2x.jpg 2x',
                    type: 'image/jpeg',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_main/bg2010_d@1.5x.webp',
                    type: 'image/webp',
                    media: '(min-width: 1024px)'
                }
            ],
            imgAttr: {
                src: './images/background/bg_main/bg2010_d@1.5x.jpg',
                alt: 'Фон слайда'
            }
        }
    },
    6: {
        list: [
            {
                svgSrc: './icons/stars.svg'
            },
            {
                image: {
                    imgAttr: {}
                }
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_main/dots_m@1.5x.webp 1.5x, ./images/background/bg_main/dots_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/dots_m@1.5x.png 1.5x, ./images/background/bg_main/dots_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/dots_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/background/bg_main/dots_d@1.5x.png',
                        alt: 'Нижняя картинка'
                    }
                }
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_main/dots_m@1.5x.webp 1.5x, ./images/background/bg_main/dots_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/dots_m@1.5x.png 1.5x, ./images/background/bg_main/dots_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/dots_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/background/bg_main/dots_d@1.5x.png',
                        alt: 'Нижняя картинка'
                    }
                }
            }
        ],
        image: {
            sources: [
                {
                    srcSet: './images/background/bg_main/bg2014_m@1.5x.webp 1.5x, ./images/background/bg_main/bg2014_m@2x.webp 2x',
                    type: 'image/webp',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_main/bg2014_m@1.5x.jpg 1.5x, ./images/background/bg_main/bg2014_m@2x.jpg 2x',
                    type: 'image/jpeg',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_main/bg2014_d@1.5x.webp',
                    type: 'image/webp',
                    media: '(min-width: 1024px)'
                }
            ],
            imgAttr: {
                src: './images/background/bg_main/bg2014_d@1.5x.jpg',
                alt: 'Фон слайда'
            }
        }
    },
    5: {
        list: [
            {
                svgSrc: './icons/stars.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/extrathin_stick.svg'
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_main/dots2017blue_m@1.5x.webp 1.5x, ./images/background/bg_main/dots2017blue_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/dots2017blue_m@1.5x.png 1.5x, ./images/background/bg_main/dots2017blue_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/dots2017blue_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/background/bg_main/dots2017blue_d@1.5x.png',
                        alt: 'Нижняя картинка'
                    }
                }
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_main/dots2017yellow_m@1.5x.webp 1.5x, ./images/background/bg_main/dots2017yellow_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/dots2017yellow_m@1.5x.png 1.5x, ./images/background/bg_main/dots2017yellow_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/dots2017yellow_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/background/bg_main/dots2017yellow_d@1.5x.png',
                        alt: 'Нижняя картинка'
                    }
                }
            }
        ],
        image: {
            sources: [
                {
                    srcSet: './images/background/bg_main/bg2017_m@1.5x.webp 1.5x, ./images/background/bg_main/bg2017_m@2x.webp 2x',
                    type: 'image/webp',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_main/bg2017_m@1.5x.jpg 1.5x, ./images/background/bg_main/bg2017_m@2x.jpg 2x',
                    type: 'image/jpeg',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_main/bg2017_d@1.5x.webp',
                    type: 'image/webp',
                    media: '(min-width: 1024px)'
                }
            ],
            imgAttr: {
                src: './images/background/bg_main/bg2017_d@1.5x.jpg',
                alt: 'Фон слайда'
            }
        }
    },
    4: {
        list: [
            {
                svgSrc: './icons/stars.svg'
            },
            {
                svgSrc: './icons/extrathin_stick.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/extrabold_stick.svg'
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_main/dots2019top_m@1.5x.webp 1.5x, ./images/background/bg_main/dots2019top_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/dots2019top_m@1.5x.png 1.5x, ./images/background/bg_main/dots2019top_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/dots2019top_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/background/bg_main/dots2019top_d@1.5x.png',
                        alt: 'Нижняя картинка'
                    }
                }
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_main/dots2019bottom_m@1.5x.webp 1.5x, ./images/background/bg_main/dots2019bottom_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/dots2019bottom_m@1.5x.png 1.5x, ./images/background/bg_main/dots2019bottom_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/dots2019bottom_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/background/bg_main/dots2019bottom_d@1.5x.png',
                        alt: 'Нижняя картинка'
                    }
                }
            }
        ],
        image: {
            sources: [
                {
                    srcSet: './images/background/bg_main/bg2019_m@1.5x.webp 1.5x, ./images/background/bg_main/bg2019_m@2x.webp 2x',
                    type: 'image/webp',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_main/bg2019_m@1.5x.jpg 1.5x, ./images/background/bg_main/bg2019_m@2x.jpg 2x',
                    type: 'image/jpeg',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_main/bg2019_d@1.5x.webp',
                    type: 'image/webp',
                    media: '(min-width: 1024px)'
                }
            ],
            imgAttr: {
                src: './images/background/bg_main/bg2019_d@1.5x.jpg',
                alt: 'Фон слайда'
            }
        }
    },
    3: {
        list: [
            {
                svgSrc: './icons/stars.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/thin_stick.svg'
            },
            {
                svgSrc: './icons/dots.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/bold_stick.svg'
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_main/triangle_m@1.5x.webp 1.5x, ./images/background/bg_main/triangle_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/triangle_m@1.5x.png 1.5x, ./images/background/bg_main/triangle_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/triangle_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/background/bg_main/triangle_d@1.5x.png',
                        alt: 'Нижняя картинка'
                    }
                }
            }
        ],
        image: {
            sources: [
                {
                    srcSet: './images/background/bg_main/bg2020_m@1.5x.webp 1.5x, ./images/background/bg_main/bg2020_m@2x.webp 2x',
                    type: 'image/webp',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_main/bg2020_m@1.5x.jpg 1.5x, ./images/background/bg_main/bg2020_m@2x.jpg 2x',
                    type: 'image/jpeg',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_main/bg2020_d@1.5x.webp',
                    type: 'image/webp',
                    media: '(min-width: 1024px)'
                }
            ],
            imgAttr: {
                src: './images/background/bg_main/bg2020_d@1.5x.jpg',
                alt: 'Фон слайда'
            }
        }
    },
    2: {
        list: [
            {
                svgSrc: './icons/stars.svg'
            },
            {
                svgSrc: './icons/thin_stick.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/extrabold_stick.svg'
            },
            {
                svgSrc: './icons/dots.svg'
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_main/quality_m@1.5x.webp 1.5x, ./images/background/bg_main/quality_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/quality_m@1.5x.png 1.5x, ./images/background/bg_main/quality_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/quality_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/background/bg_main/quality_d@1.5x.png',
                        alt: 'Нижняя картинка'
                    }
                }
            },
            {

                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_main/gradient2021_m@1.5x.webp 1.5x, ./images/background/bg_main/gradient2021_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/gradient2021_m@1.5x.png 1.5x, ./images/background/bg_main/gradient2021_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/gradient2021_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/background/bg_main/gradient2021_d@1.5x.png',
                        alt: 'Нижний градиент'
                    }
                }
            }
        ],
        image: {
            sources: [
                {
                    srcSet: './images/background/bg_main/bg2021_m@1.5x.webp 1.5x, ./images/background/bg_main/bg2021_m@2x.webp 2x',
                    type: 'image/webp',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_main/bg2021_m@1.5x.jpg 1.5x, ./images/background/bg_main/bg2021_m@2x.jpg 2x',
                    type: 'image/jpeg',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_main/bg2021_d@1.5x.webp',
                    type: 'image/webp',
                    media: '(min-width: 1024px)'
                }
            ],
            imgAttr: {
                src: './images/background/bg_main/bg2021_d@1.5x.jpg',
                alt: 'Фон слайда'
            }
        }
    },
    1: {
        list: [
            {
                svgSrc: './icons/stars.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/extrathin_stick.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/bold_stick.svg'
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_main/circle_m@1.5x.webp 1.5x, ./images/background/bg_main/circle_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/circle_m@1.5x.png 1.5x, ./images/background/bg_main/circle_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_main/circle_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/background/bg_main/circle_d@1.5x.png',
                        alt: 'Круг'
                    }
                }
            }
        ],
        image: {
            sources: [
                {
                    srcSet: './images/background/bg_main/bg2022_m@1.5x.webp 1.5x, ./images/background/bg_main/bg2022_m@2x.webp 2x',
                    type: 'image/webp',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_main/bg2022_m@1.5x.jpg 1.5x, ./images/background/bg_main/bg2022_m@2x.jpg 2x',
                    type: 'image/jpeg',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_main/bg2022_d@1.5x.webp',
                    type: 'image/webp',
                    media: '(min-width: 1024px)'
                }
            ],
            imgAttr: {
                src: './images/background/bg_main/bg2022_d@1.5x.jpg',
                alt: 'Фон слайда'
            }
        }
    }
};

export const backgroundImageNow = {
    start: {
        list: [
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_now/bg1_m@1.5x.webp 1.5x, ./images/background/bg_now/bg1_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_now/bg1_m@1.5x.png 1.5x, ./images/background/bg_now/bg1_m@2x.png 2x',
                            type: 'image/jpeg',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_now/bg1_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/background/bg_now/bg1_d@1.5x.png',
                        alt: 'Фон слайда'
                    }
                }
            },
            {
                svgSrc: './icons/now_1_stick.svg'
            },
            {
                svgSrc: './icons/now_2_stick.svg'
            },
            {
                svgSrc: './icons/now_2_stick_m.svg'
            },
            {
                svgSrc: './icons/bold_stick.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/thin_stick.svg'
            },
            {
                svgSrc: './icons/extrabold_stick.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/extrathin_stick.svg'
            }
        ],
        image: {
            imgAttr: {}
        }
    },
    end: {
        list: [
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_now/bg2_m@1.5x.webp 1.5x, ./images/background/bg_now/bg2_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_now/bg2_m@1.5x.png 1.5x, ./images/background/bg_now/bg2_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_now/bg2_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/background/bg_now/bg2_d@1.5x.png',
                        alt: 'Фон слайда'
                    }
                }
            },
            {
                svgSrc: './icons/now_1_stick.svg'
            },
            {
                svgSrc: './icons/now_3_stick.svg'
            },
            {
                svgSrc: './icons/now_3_stick_m.svg'
            },
            {
                svgSrc: './icons/bold_stick.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/thin_stick.svg'
            },
            {
                svgSrc: './icons/extrabold_stick.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_now/history_m@1.5x.webp 1.5x, ./images/background/history_m/bg2_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_now/history_m@1.5x.png 1.5x, ./images/background/history_m/bg2_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/background/bg_now/history_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/background/bg_now/history_d@1.5x.png',
                        alt: 'Фон слайда'
                    }
                }
            }
        ],
        image: {
            imgAttr: {
            }
        }
    }
};

export const backgroundImageHistory = {
    history: {
        list: [
            {
                svgSrc: './icons/stars.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/stick.svg'
            },
            {
                svgSrc: './icons/thin_stick.svg'
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/background/bg_main/gradient2021_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr:
                        {
                            src: './images/background/bg_main/gradient2021_d@1.5x.png',
                            alt: 'Градиент'
                        }
                }
            },
            {
                svgSrc: './icons/dots.svg'
            }
        ],
        image: {
            sources: [
                {
                    srcSet: './images/background/bg_history/bg1_m@1.5x.webp 1.5x, ./images/background/bg_history/bg1_m@2x.webp 2x',
                    type: 'image/webp',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_history/bg1_m@1.5x.jpg 1.5x, ./images/background/bg_history/bg1_m@2x.jpg 2x',
                    type: 'image/jpeg',
                    media: '(max-width: 1023px)'
                },
                {
                    srcSet: './images/background/bg_history/bg1_d@1.5x.webp',
                    type: 'image/webp',
                    media: '(min-width: 1024px)'
                }
            ],
            imgAttr:
                {
                    src: './images/background/bg_history/bg1_d@1.5x.jpg',
                    alt: 'Фон слайда'
                }
        }
    }
};

export const introContent = {
    start: {
        title: 'LD сегодня —<br /> международный бренд,<br /> доступный более чем<br /> в 50 странах мира',
        text: '',
        list: [
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ldnow_1_m@1.5x.webp 1.5x, ./images/pack/ldnow_1_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ldnow_1_m@1.5x.png 1.5x, ./images/pack/ldnow_1_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ldnow_1_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ldnow_1_d@1.5x.png',
                        alt: 'Часть радуги из пачек LD'
                    }
                }
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ldnow_2_m@1.5x.webp 1.5x, ./images/pack/ldnow_2_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ldnow_2_m@1.5x.png 1.5x, ./images/pack/ldnow_2_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ldnow_2_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ldnow_2_d@1.5x.png',
                        alt: 'Часть радуги из пачек LD'
                    }
                }
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ldnow_3_m@1.5x.webp 1.5x, ./images/pack/ldnow_3_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ldnow_3_m@1.5x.png 1.5x, ./images/pack/ldnow_3_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ldnow_3_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ldnow_3_d@1.5x.png',
                        alt: 'Часть радуги из пачек LD'
                    }
                }
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ldnow_4_m@1.5x.webp 1.5x, ./images/pack/ldnow_4_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ldnow_4_m@1.5x.png 1.5x, ./images/pack/ldnow_4_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ldnow_4_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ldnow_4_d@1.5x.png',
                        alt: 'Часть радуги из пачек LD'
                    }
                }
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ldnow_5_m@1.5x.webp 1.5x, ./images/pack/ldnow_5_m@2x.webp 2x',
                            type: 'image/webp',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ldnow_5_m@1.5x.png 1.5x, ./images/pack/ldnow_5_m@2x.png 2x',
                            type: 'image/png',
                            media: '(max-width: 1023px)'
                        },
                        {
                            srcSet: './images/pack/ldnow_5_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ldnow_5_d@1.5x.png',
                        alt: 'Часть радуги из пачек LD'
                    }
                }
            },
            {
                image: {
                    sources: [
                        {
                            srcSet: './images/pack/ldnow_6_d@1.5x.webp',
                            type: 'image/webp',
                            media: '(min-width: 1024px)'
                        }
                    ],
                    imgAttr: {
                        src: './images/pack/ldnow_6_d@1.5x.png',
                        alt: 'Часть радуги из пачек LD'
                    }
                }
            }
        ]
    },
    end: {
        title: 'LD сегодня —<br /> международный бренд,<br /> доступный более чем<br /> в 50 странах мира',
        text: '<p>На протяжении всего времени существования марки, сигареты LD развиваются в соответствии с передовыми трендами табачного рынка, чтобы соответствовать вкусам и&nbsp;предпочтениям потребителей.</p>' +
            'Бренд LD не останавливается на достигнутом и продолжает работать над тем, чтобы завоевать доверие потребителей, предоставляя возможность выбрать высококачественные продукты, а также совершенствуя и дополняя каждую пачку сигарет различными инновациями.',
        image: {
            imgAttr: {}
        }
    }
};

export const factoryContent = {
    text: '<p>Фабрика «Лиггетт-Дукат» была основана купцом Ильей Пигитом в 1891 в Москве.</p>' +
        '<p>Первой продукцией были картузные табаки, при этом качество табаков было высоким с самого начала. И в 1900 году на&nbsp;выставке в Париже Пигит был награжден медалью «За&nbsp;усердие». В 1918 году фабрика стала частью «Главтабак», и&nbsp;в&nbsp;годы ВОВ снабжала своей продукцией ВС СССР и предприятия тыла. В 1990 году на базе фабрики «Дукат» создано&nbsp;совместное предприятие с Brooke Group, родственницей&nbsp;известной Liggett & Myers. Спустя 9 лет была открыта современная табачная фабрика «Лиггетт-Дукат», и&nbsp;в&nbsp;1999&nbsp;году вышли первые сигареты классического формата под маркой LD.</p>' +
        '<p>В 2007 году «Лиггетт-Дукат» стала частью одной из крупнейших мировых табачных компаний JTI, а марка LD вошла в топ глобальных флагманских брендов JTI и&nbsp;окончательно утвердилась на&nbsp;международном рынке.</p>',
    image: {
        sources: [
            {
                srcSet: './images/factory_m@1.5x.webp 1.5x, ./images/factory_m@2x.webp 2x',
                type: 'image/webp',
                media: '(max-width: 1023px)'
            },
            {
                srcSet: './images/factory_m@1.5x.png 1.5x, ./images/factory_m@2x.png 2x',
                type: 'image/png',
                media: '(max-width: 1023px)'
            },
            {
                srcSet: './images/factory_d@1.5x.webp',
                type: 'image/webp',
                media: '(min-width: 1024px)'
            }
        ],
        imgAttr: {
            src: './images/factory_d@1.5x.png',
            alt: 'Фото фабрики сигарет LD'
        }
    }
};
