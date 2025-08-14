export const mockRooms = [
  {
    id: 101,
    name: '岚霏',
    basePath: '/images/rooms/101--岚霏/',   // 只存目录
    price: 399,
    booked: 1,
    desc: '舒适大床，含早餐，独立卫浴。',
    photos: Array.from({ length: 10 }, (_, i) => `/images/rooms/101--岚霏/${String(i + 1).padStart(2, '0')}.jpg`)
  },
  {
    id: 102,
    name: '晴霏',
    basePath: '/images/rooms/102--晴霏/',
    price: 459,
    booked: 0,
    desc: '舒适大床小床，含早餐，独立卫浴。',
    photos: Array.from({ length: 9 }, (_, i) => `/images/rooms/102--晴霏/${String(i + 1).padStart(2, '0')}.jpg`)
  },
  {
    id: 201,
    name: '清宵',
    basePath: '/images/rooms/201--清宵/',
    price: 599,
    booked: 0,
    desc: '201描述',
    photos: Array.from({ length: 8 }, (_, i) => `/images/rooms/201--清宵/${String(i + 1).padStart(2, '0')}.jpg`)
  },
  {
    id: 202,
    name: '山带',
    basePath: '/images/rooms/202--山带/',
    price: 699,
    booked: 1,
    desc: '202描述',
    photos: Array.from({ length: 8 }, (_, i) => `/images/rooms/202--山带/${String(i + 1).padStart(2, '0')}.jpg`)
  },
  {
    id: 203,
    name: '纤凝',
    basePath: '/images/rooms/203--纤凝/',
    price: 799,
    booked: 0,
    desc: '203描述',
    photos: Array.from({ length: 10 }, (_, i) => `/images/rooms/203--纤凝/${String(i + 1).padStart(2, '0')}.jpg`)
  },
  {
    id: 205,
    name: '夕霏',
    basePath: '/images/rooms/205--夕霏/',
    price: 899,
    booked: 0,
    desc: '205描述',
    photos: Array.from({ length: 8 }, (_, i) => `/images/rooms/205--夕霏/${String(i + 1).padStart(2, '0')}.jpg`)
  },
  {
    id: 301,
    name: '飞烟',
    basePath: '/images/rooms/301--飞烟/',
    price: 999,
    booked: 0,
    desc: '301描述',
    photos: Array.from({ length: 9 }, (_, i) => `/images/rooms/301--飞烟/${String(i + 1).padStart(2, '0')}.jpg`)
  },
  {
    id: 302,
    name: '岚烟',
    basePath: '/images/rooms/302--岚烟/',
    price: 899,
    booked: 0,
    desc: '302描述',
    photos: Array.from({ length: 9 }, (_, i) => `/images/rooms/302--岚烟/${String(i + 1).padStart(2, '0')}.jpg`)
  },
  {
    id: 303,
    name: '紫烟',
    basePath: '/images/rooms/303--紫烟/',
    price: 899,
    booked: 0,
    desc: '303描述',
    photos: Array.from({ length: 10 }, (_, i) => `/images/rooms/303--紫烟/${String(i + 1).padStart(2, '0')}.jpg`)
  },
  {
    id: 305,
    name: '碧汉',
    basePath: '/images/rooms/305--碧汉/',
    price: 899,
    booked: 0,
    desc: '305描述',
    photos: Array.from({ length: 10 }, (_, i) => `/images/rooms/305--碧汉/${String(i + 1).padStart(2, '0')}.jpg`)
  },
  {
    id: 401,
    name: '麟云',
    basePath: '/images/rooms/401--麟云/',
    price: 999,
    booked: 0,
    desc: '401描述',
    photos: Array.from({ length: 8 }, (_, i) => `/images/rooms/401--麟云/${String(i + 1).padStart(2, '0')}.jpg`)
  },
  {
    id: 402,
    name: '沐泽',
    basePath: '/images/rooms/402--沐泽/',
    price: 999,
    booked: 0,
    desc: '402描述',
    photos: Array.from({ length: 8 }, (_, i) => `/images/rooms/402--沐泽/${String(i + 1).padStart(2, '0')}.jpg`)
  },
  {
    id: 403,
    name: '倾曦',
    basePath: '/images/rooms/403--倾曦/',
    price: 999,
    booked: 0,
    desc: '403描述',
    photos: Array.from({ length: 9 }, (_, i) => `/images/rooms/403--倾曦/${String(i + 1).padStart(2, '0')}.jpg`)
  }
];

export default mockRooms;