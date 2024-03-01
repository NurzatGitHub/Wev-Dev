export interface Product {
  id: number;
  name: string;
  categoryId: number;
  price: number;
  description: string;
  rating: number;
  likes: number;
  urlKaspi: string;
  landingImage: string;
}

export const products = [
  {
    id: 1,
    name: 'Ноутбук Apple MacBook Air 13 MGN93 серебристый',
    categoryId: 1,
    price: 414808,
    description: `Диагональ экрана: 13.3 дюйм
    Процессор: Apple M1
    Видеокарта: Apple M1
    Размер оперативной памяти: 8.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 256.0 Гб`,
    rating: 4.7,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-medium"
  },
  {
    id: 2,
    name: 'Ноутбук ASUS K3504V-MA220HW 90NB10A1-M00HW0 черный',
    categoryId: 1,
    price: 419000,
    description: `Диагональ экрана: 15.6 дюйм
    Процессор: Intel Core i5-1340P
    Видеокарта: Intel Iris Xe Graphics
    Размер оперативной памяти: 16.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 1000.0 Гб`,
    rating: 4.6,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/asus-k3504v-ma220hw-90nb10a1-m00hw0-chernyi-116198367/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/h6b/hc2/85009051582494.jpg?format=gallery-medium"
  },
  {
    id: 3,
    name: 'Ноутбук Acer Nitro 5 AN515-58-54FA NH.QMZER.003 черный',
    categoryId: 1,
    price: 378888,
    description: `Диагональ экрана: 15.6 дюйм
    Процессор: Intel Core i5-12450H
    Видеокарта: NVIDIA GeForce RTX 2050
    Размер оперативной памяти: 16.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 512.0 Гб`,
    rating: 4.3,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/acer-nitro-5-an515-58-54fa-nh-qmzer-003-chernyi-114301994/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/hec/h5d/84435235242014.jpg?format=gallery-medium"
  },
  {
    id: 4,
    name: 'Ноутбук HP Victus 15-fa0065ci 809P6EA серый',
    categoryId: 1,
    price: 398885,
    description: `Диагональ экрана: 15.6 дюйм
    Процессор: Intel Core i5-12450H
    Видеокарта: NVIDIA GeForce RTX 3050
    Размер оперативной памяти: 16.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 512.0 Гб`,
    rating: 4.2,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/hp-victus-15-fa0065ci-809p6ea-seryi-112028385/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/h35/hc7/82154328588318.jpg?format=gallery-medium"
  },
  {
    id: 5,
    name: 'Ноутбук ASUS TUF Gaming F15 90NR0724-M00ZU0 черный',
    categoryId: 1,
    price: 449890,
    description: `Диагональ экрана: 15.6 дюйм
    Процессор: Intel Core i7-11800H
    Видеокарта: NVIDIA GeForce RTX 3050
    Размер оперативной памяти: 16.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 512.0 Гб`,
    rating: 4.6,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/asus-tuf-gaming-f15-90nr0724-m00zu0-chernyi-114696615/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/hd7/h75/84526795292702.jpg?format=gallery-medium"
  },
  {
    id: 6,
    name: 'Ноутбук Apple MacBook Air 15 2023 MQKW3 синий',
    categoryId: 1,
    price: 599988,
    description: `Диагональ экрана: 15.3 дюйм
    Процессор: Apple M2
    Видеокарта: Apple M2
    Размер оперативной памяти: 8.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 256.0 Гб`,
    rating: 4.8,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/apple-macbook-air-15-2023-mqkw3-sinii-111217728/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/h65/h41/81547557240862.jpg?format=gallery-medium"
  },
  {
    id: 7,
    name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H800LBRU серый',
    categoryId: 1,
    price: 229990,
    description: `Диагональ экрана: 15.6 дюйм
    Процессор: Intel Core i3-1115G4
    Видеокарта: Intel UHD Graphics
    Размер оперативной памяти: 8.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 256.0 Гб`,
    rating: 4.3,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h800lbru-seryi-102238867/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/h4f/h42/64157907288094.jpg?format=gallery-medium"
  },
  {
    id: 8,
    name: 'Ноутбук Lenovo LOQ 15IRH8 82XV00S9RK темно-серый',
    categoryId: 1,
    price: 419989,
    description: `Диагональ экрана: 15.6 дюйм
    Процессор: Intel Core i5-12450H
    Видеокарта: NVIDIA GeForce RTX 3050
    Размер оперативной памяти: 8.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 512.0 Гб`,
    rating: 4.0,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/lenovo-loq-15irh8-82xv00s9rk-temno-seryi-114860953/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/hb6/h73/84576764461086.jpg?format=gallery-medium"
  },
  {
    id: 9,
    name: 'Ноутбук Huawei Matebook D14 MendelF-W3821 53013RHL серый',
    categoryId: 1,
    price: 255489,
    description: `Диагональ экрана: 14.0 дюйм
    Процессор: Intel Core i3-1215U
    Видеокарта: Intel UHD Graphics
    Размер оперативной памяти: 8.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 256.0 Гб`,
    rating: 4.4,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/huawei-matebook-d14-mendelf-w3821-53013rhl-seryi-113403361/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/hbc/h58/83883547164702.jpg?format=gallery-medium"
  },
  {
    id: 10,
    name: 'Ноутбук HP 15s-fq2008ci 9L6S8EA черный',
    categoryId: 1,
    price: 189699,
    description: `Диагональ экрана: 15.6 дюйм
    Процессор: Intel Core i3-1115G4
    Видеокарта: Intel UHD Graphics
    Размер оперативной памяти: 8.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 512.0 Гб`,
    rating: 4.3,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/hp-15s-fq2008ci-9l6s8ea-chernyi-115507093/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/h83/h39/84755125469214.png?format=gallery-medium"
  },
  {
    id: 11,
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    categoryId: 2,
    price: 298785,
    description: `Технология NFC: Да
    Цвет: черный
    Тип экрана: OLED, Super Retina XDR
    Диагональ: 6.1 дюйм
    Размер оперативной памяти: 4 ГБ
    Процессор: 6-ядерный Apple A15 Bionic
    Объем встроенной памяти: 128.0 ГБ
    Емкость аккумулятора: 3095.0 мАч`,
    rating: 4.8,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium"
  },
  {
    id: 12,
    name: 'Смартфон Samsung Galaxy A54 5G 8 ГБ/256 ГБ черный',
    categoryId: 2,
    price: 186000,
    description: `Технология NFC: Да
    Цвет: черный
    Тип экрана: Super AMOLED, сенсорный
    Диагональ: 6.4 дюйм
    Размер оперативной памяти: 8 ГБ
    Процессор: 8-ядерный Samsung Exynos 1380
    Объем встроенной памяти: 256.0 ГБ
    Емкость аккумулятора: 5000.0 мАч`,
    rating: 4.3,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-8-gb-256-gb-chernyi-110044379/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/h81/h13/80435536887838.jpg?format=gallery-medium"
  },
  {
    id: 13,
    name: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=750000000',
    categoryId: 2,
    price: 591982,
    description: `Технология NFC: Да
    Цвет: серый
    Тип экрана: OLED, Super Retina XDR display
    Диагональ: 6.1 дюйм
    Размер оперативной памяти: 8 ГБ
    Процессор: 6-ядерный Apple A17 Pro
    Объем встроенной памяти: 256.0 ГБ
    Емкость аккумулятора: 3279.0 мАч`,
    rating: 4.5,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/hae/h00/83559620739102.jpg?format=gallery-medium"
  },
  {
    id: 14,
    name: 'Смартфон Poco X6 Pro 12 ГБ/512 ГБ черный',
    categoryId: 2,
    price: 116999,
    description: `Технология NFC: Да
    Цвет: черный
    Тип экрана: AMOLED, сенсорный, Corning Gorilla Glass 5
    Диагональ: 6.67 дюйм
    Размер оперативной памяти: 12 ГБ
    Процессор: 8-ядерный Dimensity 8300-Ultra
    Объем встроенной памяти: 512.0 ГБ
    Емкость аккумулятора: 5000.0 мАч`,
    rating: 4.1,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/poco-x6-pro-12-gb-512-gb-chernyi-115961596/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/hbe/h45/84940376899614.jpg?format=gallery-medium"
  },
  {
    id: 15,
    name: 'Смартфон Xiaomi 14 Pro Titanium Special Edition China Version 16 ГБ/1024 ГБ серый',
    categoryId: 2,
    price: 799990,
    description: `Технология NFC: Да
    Цвет: серый
    Тип экрана: AMOLED, сенсорный
    Диагональ: 6.73 дюйм
    Размер оперативной памяти: 16 ГБ
    Процессор: 8-ядерный Snapdragon 8 Gen 3
    Объем встроенной памяти: 1024.0 ГБ
    Емкость аккумулятора: 4880.0 мАч`,
    rating: 4.3,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/xiaomi-14-pro-titanium-special-edition-china-version-16-gb-1024-gb-seryi-116866740/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/hf6/hbe/85243984609310.jpg?format=gallery-medium"
  },
  {
    id: 16,
    name: 'Велосипед BMC Switzerland BMC Teammachine SLR TWO 28 дюйм 2022 20 дюймов черный',
    categoryId:3,
    price: 2960000,
    description: `Тип: шоссейный
    Модельный год: 2022
    Складной: Нет
    Размеры рамы: 20 дюймов
    Материал рамы: карбон (углепластик)`,
    rating: 5.0,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/bmc-switzerland-bmc-teammachine-slr-two-28-djuim-2022-20-djuimov-chernyi-116983503/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/h0a/hd2/85277086744606.png?format=gallery-medium"
  },
  {
    id: 17,
    name: 'Велосипед KSTON X05-001 26 2021 18 черный-синий',
    categoryId: 3,
    price: 51415,
    description: `Тип: горный
    Модельный год: 2021
    Складной: Нет
    Размеры рамы: 18 дюймов
    Материал рамы: сталь`,
    rating: 4.0,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/kston-x05-001-26-2021-18-chernyi-sinii-101804332/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/ha5/h6d/64191881117726.jpg?format=gallery-medium"
  },
  {
    id: 18,
    name: 'Велосипед Batler BMW 26 дюйм 2021 19 дюймов белый',
    categoryId: 3,
    price: 51841,
    description: `Тип: горный гибрид, ,городской
    Модельный год: 2021
    Складной: Нет
    Размеры рамы: 19 дюймов
    Материал рамы: сталь`,
    rating: 4.4,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/batler-bmw-26-djuim-2021-19-djuimov-belyi-101185620/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/hf6/hbc/64213817589790.jpg?format=gallery-medium"
  },
  {
    id: 19,
    name: 'Велосипед Stels Stels Навигатор 28 дюйм 2020 28 дюймов синий',
    categoryId: 3,
    price: 59999,
    description: `Тип: городской
    Модельный год: 2020
    Складной: Нет
    Размеры рамы: 28 дюймов
    Материал рамы: сталь`,
    rating: 4.3,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/stels-stels-navigator-28-djuim-2020-28-djuimov-sinii-109308107/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/hbe/h33/69968510877726.jpg?format=gallery-medium"
  },
  {
    id: 20,
    name: 'Велосипед BMW BMPBL26 26 дюйм 2023 17 дюймов черный',
    categoryId: 3,
    price: 50125,
    description: `Тип: горный
    Модельный год: 2023
    Складной: Нет
    Материал рамы: сталь
    Размеры рамы: 17 дюймов`,
    rating: 3.9,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/bmw-bmpbl26-26-djuim-2023-17-djuimov-chernyi-110077022/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/hf5/h81/80491767627806.png?format=gallery-medium"
  },
  {
    id: 21,
    name: 'Книга Ремарк Э. М.: На Западном фронте без перемен',
    categoryId: 4,
    price: 1164,
    description: `ISBN: 9785170889402
    Язык издания: русский
    Переплет: мягкий переплет
    Жанр: всемирная классика`,
    rating: 4.8,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/remark-e-m-na-zapadnom-fronte-bez-peremen-100020185/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/hd6/had/63843194863646.jpg?format=gallery-medium"
  },
  {
    id: 22,
    name: 'Книга Жолдыбайұлы Қ.: Кемел адам',
    categoryId: 4,
    price: 5899,
    description: `ISBN: 978-601-7629-44-1
    Возраст: 16+
    Язык издания: казахский
    Переплет: твердый переплет
    Жанр: психология популярная`,
    rating: 4.5,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/zholdybai-ly-kemel-adam-103430816/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/h28/hc3/67252819197982.jpg?format=gallery-medium"
  },
  {
    id: 23,
    name: 'Книга Клир Д.: Атомные привычки. Как приобрести хорошие привычки и избавиться от плохих',
    categoryId: 4,
    price: 4273,
    description: `ISBN: 9785446112166
    Возраст: 16+
    Язык издания: русский
    Переплет: твердый переплет
    Жанр: психология популярная`,
    rating: 4.2,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/klir-d-atomnye-privychki-kak-priobresti-horoshie-privychki-i-izbavit-sja-ot-plohih-100699083/?c=750000000&tab=reviews",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/h3f/hfc/63947225071646.jpg?format=gallery-medium"
  },
  {
    id: 24,
    name: 'Книга Лондон Д.: Мартин Иден',
    categoryId: 4,
    price: 974,
    description: `ISBN: 9785170879854
    Язык издания: русский
    Переплет: мягкий переплет
    Жанр: всемирная классика`,
    rating: 4.6,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/london-d-martin-iden-101137240/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/h47/h4b/64225442988062.jpg?format=gallery-medium"
  },
  {
    id: 25,
    name: 'Книга Кристи А.: Убийство в Восточном экспрессе',
    categoryId: 4,
    price: 1338,
    description: `ISBN: 9785040992478
    Язык издания: русский
    Переплет: мягкий переплет
    Жанр: остросюжетная литература`,
    rating: 4.7,
    likes: 0,
    urlKaspi: "https://kaspi.kz/shop/p/kristi-a-ubiistvo-v-vostochnom-ekspresse-100015045/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/he2/hf8/63844380803102.jpg?format=gallery-medium"
  },
];