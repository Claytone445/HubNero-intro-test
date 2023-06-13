// 1. Напишите функцию, которая берет список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными числами.
// 2.  Напишите функцию accum:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// 3.  Напишите функцию, которая выдаёт сумму выручки на основании входного формата данных
// const products = [
//   { name: 'Футболка', price: 20, quantity: 2 },
//   { name: 'Джинсы', price: 50, quantity: 1 },
//   { name: 'Носки', price: 5, quantity: 10 },
//   { name: 'Штаны', price: 30, quantity: 1 }
// ];

//1 Задача
const anylist = [1, 5, 12, 'hey', 25, 'whether', 29, 'cappuchino'];

const filteredList = (list) => {
  return list.filter(item => typeof item === 'number' )
}

console.log(filteredList(anylist))


//2 Задача
const accum = letters => [...letters] //тоже самое что split(' ')
  .map((letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index))
  .join('-');

console.log(accum("RqaEzty"));

//3 задача
const products = [
  { name: 'Футболка', price: 20, quantity: 2 },
  { name: 'Джинсы', price: 50, quantity: 1 },
  { name: 'Носки', price: 5, quantity: 10 },
  { name: 'Штаны', price: 30, quantity: 1 }
];


const totalPrice = (items) => {
  return items.map(item => item.price * item.quantity).reduce((income, item) => income += item)
}

console.log(totalPrice(products))



