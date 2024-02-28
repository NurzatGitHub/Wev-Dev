export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  urlKaspi: string;
}

export const products = [
  {
    id: 1,
    name: 'Ноутбук Apple MacBook Air 13 MGN93 серебристый',
    price: 414808,
    description: `Диагональ экрана: 13.3 дюйм
    Процессор: Apple M1
    Видеокарта: Apple M1
    Размер оперативной памяти: 8.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 256.0 Гб`,
    rating: 4.7,
    urlKaspi: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-medium"
  },
  {
    id: 2,
    name: 'Ноутбук ASUS K3504V-MA220HW 90NB10A1-M00HW0 черный',
    price: 419000,
    description: `Диагональ экрана: 15.6 дюйм
    Процессор: Intel Core i5-1340P
    Видеокарта: Intel Iris Xe Graphics
    Размер оперативной памяти: 16.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 1000.0 Гб`,
    rating: 4.6,
    urlKaspi: "https://kaspi.kz/shop/p/asus-k3504v-ma220hw-90nb10a1-m00hw0-chernyi-116198367/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/h6b/hc2/85009051582494.jpg?format=gallery-medium"
  },
  {
    id: 3,
    name: 'Ноутбук Acer Nitro 5 AN515-58-54FA NH.QMZER.003 черный',
    price: 378888,
    description: `Диагональ экрана: 15.6 дюйм
    Процессор: Intel Core i5-12450H
    Видеокарта: NVIDIA GeForce RTX 2050
    Размер оперативной памяти: 16.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 512.0 Гб`,
    rating: 4.3,
    urlKaspi: "https://kaspi.kz/shop/p/acer-nitro-5-an515-58-54fa-nh-qmzer-003-chernyi-114301994/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/hec/h5d/84435235242014.jpg?format=gallery-medium"
  },
  {
    id: 4,
    name: 'Ноутбук HP Victus 15-fa0065ci 809P6EA серый',
    price: 398885,
    description: `Диагональ экрана: 15.6 дюйм
    Процессор: Intel Core i5-12450H
    Видеокарта: NVIDIA GeForce RTX 3050
    Размер оперативной памяти: 16.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 512.0 Гб`,
    rating: 4.2,
    urlKaspi: "https://kaspi.kz/shop/p/hp-victus-15-fa0065ci-809p6ea-seryi-112028385/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/h35/hc7/82154328588318.jpg?format=gallery-medium"
  },
  {
    id: 5,
    name: 'Ноутбук ASUS TUF Gaming F15 90NR0724-M00ZU0 черный',
    price: 449890,
    description: `Диагональ экрана: 15.6 дюйм
    Процессор: Intel Core i7-11800H
    Видеокарта: NVIDIA GeForce RTX 3050
    Размер оперативной памяти: 16.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 512.0 Гб`,
    rating: 4.6,
    urlKaspi: "https://kaspi.kz/shop/p/asus-tuf-gaming-f15-90nr0724-m00zu0-chernyi-114696615/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/hd7/h75/84526795292702.jpg?format=gallery-medium"
  },
  {
    id: 6,
    name: 'Ноутбук Apple MacBook Air 15 2023 MQKW3 синий',
    price: 599988,
    description: `Диагональ экрана: 15.3 дюйм
    Процессор: Apple M2
    Видеокарта: Apple M2
    Размер оперативной памяти: 8.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 256.0 Гб`,
    rating: 4.8,
    urlKaspi: "https://kaspi.kz/shop/p/apple-macbook-air-15-2023-mqkw3-sinii-111217728/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/h65/h41/81547557240862.jpg?format=gallery-medium"
  },
  {
    id: 7,
    name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H800LBRU серый',
    price: 229990,
    description: `Диагональ экрана: 15.6 дюйм
    Процессор: Intel Core i3-1115G4
    Видеокарта: Intel UHD Graphics
    Размер оперативной памяти: 8.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 256.0 Гб`,
    rating: 4.3,
    urlKaspi: "https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h800lbru-seryi-102238867/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/h4f/h42/64157907288094.jpg?format=gallery-medium"
  },
  {
    id: 8,
    name: 'Ноутбук Lenovo LOQ 15IRH8 82XV00S9RK темно-серый',
    price: 419989,
    description: `Диагональ экрана: 15.6 дюйм
    Процессор: Intel Core i5-12450H
    Видеокарта: NVIDIA GeForce RTX 3050
    Размер оперативной памяти: 8.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 512.0 Гб`,
    rating: 4.0,
    urlKaspi: "https://kaspi.kz/shop/p/lenovo-loq-15irh8-82xv00s9rk-temno-seryi-114860953/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/hb6/h73/84576764461086.jpg?format=gallery-medium"
  },
  {
    id: 9,
    name: 'Ноутбук Huawei Matebook D14 MendelF-W3821 53013RHL серый',
    price: 255489,
    description: `Диагональ экрана: 14.0 дюйм
    Процессор: Intel Core i3-1215U
    Видеокарта: Intel UHD Graphics
    Размер оперативной памяти: 8.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 256.0 Гб`,
    rating: 4.4,
    urlKaspi: "https://kaspi.kz/shop/p/huawei-matebook-d14-mendelf-w3821-53013rhl-seryi-113403361/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/hbc/h58/83883547164702.jpg?format=gallery-medium"
  },
  {
    id: 10,
    name: 'Ноутбук HP 15s-fq2008ci 9L6S8EA черный',
    price: 189699,
    description: `Диагональ экрана: 15.6 дюйм
    Процессор: Intel Core i3-1115G4
    Видеокарта: Intel UHD Graphics
    Размер оперативной памяти: 8.0 Гб
    Тип жесткого диска: SSD
    Общий объем накопителей: 512.0 Гб`,
    rating: 4.3,
    urlKaspi: "https://kaspi.kz/shop/p/hp-15s-fq2008ci-9l6s8ea-chernyi-115507093/?c=750000000",
    landingImage: "https://resources.cdn-kaspi.kz/img/m/p/h83/h39/84755125469214.png?format=gallery-medium"
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/