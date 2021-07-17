"use strict";

// 1. Напишите функцию hello1(), которая при вызове будет возвращать строку «Привет, JavaScript!».

function hello1() {
  return "Привет, JavaScript!";
}

hello1();

/* 2. Напишите функцию hello2(), которая при вызове будет принимать переменную name (например, «Василий») 
   и выводить строку (в нашем случае «Привет, Василий»).  В случае отсутствующего аргумента выводить «Привет, гость».*/

function hello2(greeting, name = "гость") {
  console.log(`${greeting}, ${name}`);
}
hello2("Привет", "Василий");
hello2("Привет");

/* 3. Напишите функцию mul(n,m), которая принимает два аргумента и возвращает 
    произведение этих аргументов. Проверьте ее работу. */

function mul(n, m) {
  if (
    typeof n === "number" &&
    typeof m === "number" &&
    !isNaN(n) &&
    !isNaN(m)
  ) {
    return n * m;
  } else {
    return console.log("This is not a number");
  }
}

mul(5, 10);
mul(5, "q");

/* 4. Создайте функцию repeat(str, n), которая возвращает строку, состоящую из n повторений строки str.
	  n — по умолчанию 2, str — пустая строка. */

function repeat(str = "", n = 2) {
  return str.repeat(n);
}

repeat();

/* 5. Создайте функцию rgb(a, b, c), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». 
	  Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных.*/

function rgb(a, b, c) {
  return `rgb(${a ? a : 0}, ${b ? b : 0}, ${c ? c : 0})`;
}

rgb(100, 200, 255);

/* 6. Создайте функцию avg() , которая будет находить среднее значение арифмитическое значение своих аргументов.*/

function avg(nums) {
  return nums.reduce((a, b) => a + b) / nums.length;
}

avg([20, 10]);
avg([20, 10, 20]);
avg([20, 10, 20, 10]);

// или

function sum3(...nums) {
  let sum = 0;
  for (let num of nums) sum += num;
  return sum / nums.length;
}
sum3(1, 2, 9);

/* 7. Напишите функцию words(n), которая в зависимости от переданного в нее целочисленного аргумента n, будет выводить слово «товар» в нужной форме («12 товаров», но «22 товара»). По умолчанию аргумент n должен иметь значение 0.*/

function words(n) {
  n = Math.round(n);
  if (
    n == 1 ||
    n == 21 ||
    n == 31 ||
    n == 41 ||
    n == 51 ||
    n == 61 ||
    n == 71 ||
    n == 81 ||
    n == 91
  ) {
    console.log(`В корзине ${n} товар`);
  } else {
    if (n >= 2 && n <= 4) {
      console.log(`В корзине ${n} товара`);
    } else if (n >= 5 && n <= 20) {
      console.log(`В корзине ${n} товаров`);
    }
  }
}

words(1);

/* 8. Задание со звездочкой. Пишем функцию решения квадратного уравнения через дискриминант:
		ax² + bx + c = 0 (общий вид уравнения)
		D = b2 – 4ac
		D > 0
		x1 = (-b + √D ) / 2a
		x2 = (-b – √D ) / 2a
		D = 0
		x = -b / 2a
		D < 0 - прекращаем решать уравнение; */

/* 9. Есть функция function f(x) {
				//Тело функции (ваш код здесь должен быть)
			}
	  1) Научиться отличать отсутсвие аргументов у функции или то что первый аргумент undefined. 
	  2) Если аргментов нет то функция возвращает 0, если аргмент undefined то возвращает 0. 
	  3) Дополнительное задание: реализовать функцию function f(x) как стрелочную.*/

function f(x) {
  return 0;
}
console.log(f());

function f() {
  return "0";
}
console.log(f());

let f = (x) => 0;
console.log(f());

let f = () => 0;
console.log(f());

/* 10. Написать функцию  sum(a, b), которая возвращает сумму переданных ей аргументов. Реализовать с помощью function declaration и с помощью стрелочной функции. !!!Использовать цикл "for in" если это возможно.*/

// 1 вариант

function sum1(a, b) {
  return a + b;
}
sum1(1, 9);

// 2 вариант

let sum2 = (a, b) => a + b;
sum2();

// for in

let sumA = {
  a: 10,
  b: 60,
};

let sum = 0;
for (let key in sumA) {
  sum += sumA[key];
}

console.log(sum);

/* 11. Дан массив [1, 2, 56, 28, 90, 5, 6]. Отсортировать массив в порядке возрастания его элементов. В отсортированном массиве используя метод indexof вывести индекс элемента со значением "6". */

let arr = [1, 2, 56, 28, 90, 5, 6];
arr.sort((a, b) => a - b);
console.log(arr);

arr.indexOf(6);

/* 12. Задание с прошлых занятий. Создать массив объектов для юзеров [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {name: ‘Pavel’, age: 24}, {name: ‘Sasha’, age: 29}]
Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними. !Использовать метод filter. Полученные на выходе два массива отсортировать (каждый из них в отдельности) по старшинству членов (от самого старшего к самому младшему).*/

let users = [
  { name: "Ivan", age: 18 },
  { name: "Petr", age: 12 },
  { name: "Sidor", age: 25 },
  { name: "Pavel", age: 24 },
  { name: "Sasha", age: 29 },
];

let adults = users.filter((user) => user.age >= 18);
console.log(adults);

adults.sort((a, b) => b.age - a.age);
console.log(adults);

let underage = users.filter((user) => user.age < 18);
console.log(underage);

/* 13. Расширить предыдущее задание так чтобы из исходного массива удалялись все несовершенолетние пользователи. */

let users = [
  { name: "Ivan", age: 18 },
  { name: "Petr", age: 12 },
  { name: "Sidor", age: 25 },
  { name: "Pavel", age: 24 },
  { name: "Sasha", age: 29 },
];

let underage = users.filter((user) => user.age >= 18);
console.log(underage);

/* 14. Дан массив var arr = [1, 10, 25, 67, 87, 56]. Добавить в конец массива число 4. Вывести полученный массив и в переменную leng сохранить его новую длину. Из полученного массива извлечь последний элемент. Извлеченный элемент добавить вначало массива.*/

let arr = [1, 10, 25, 67, 87, 56];
let leng = arr.push(4);
console.log(arr);
console.log(leng);

let lastElement = arr.pop();
arr.unshift(lastElement);
console.log(arr);

/* 15. Дан массив var arr1 = [2, 5, 90, 4]. Объединить данный массив с массивом из предыдущего задания (с учетом тех изменений, которые вы с ним уже произвели в том задании ) и записать результат в переменную arr2. Сами массивы arr и arr1 должны остаться неизмененными.*/

let arr = [1, 10, 25, 67, 87, 56];
let leng = arr.push(4);
let lastElement = arr.pop();
arr.unshift(lastElement);

// + действия по условию
let arr1 = [2, 5, 90, 4];
let arr2 = arr.concat(arr1);
console.log(arr2);

/* 16. В образовавшемся массиве arr2 определить положение числа 90 (ее индекс) и удалить ее из массива. Вместо 90 добавить в массив числа 19, 2, 91.*/

let arr = [1, 10, 25, 67, 87, 56];
let leng = arr.push(4);
let lastElement = arr.pop();
arr.unshift(lastElement);

let arr1 = [2, 5, 90, 4];

let arr2 = arr.concat(arr1);
console.log(arr2);
arr2.indexOf(90);

// + действия по условию
arr2.splice(9, 1, 19, 2, 91);
console.log(arr2);

/* 17. В измененном массиве arr2 извлечь последние 4 элемента с конца и записать их в массив arr3. Сам массив arr2 не должен
измениться (извлеченные из него элементы должны в нем остаться). Массив arr3 отсортировать по возрастанию.*/

let arr = [1, 10, 25, 67, 87, 56];
let leng = arr.push(4);
let lastElement = arr.pop();
arr.unshift(lastElement);

let arr1 = [2, 5, 90, 4];

let arr2 = arr.concat(arr1);
console.log(arr2);
arr2.indexOf(90);

arr2.splice(9, 1, 19, 2, 91);
console.log(arr2);

// + действия по условию
let arr3 = arr2.slice(-4);
console.log(arr3);

arr3.sort((a, b) => a - b);
console.log(arr3);

/* 18. Отсортировать массив arr2 по убыванию. Посчитать сумму его элементов. (Попробуйте использовать метод reduce в статье про методы есть его описание).*/

let arr = [1, 10, 25, 67, 87, 56];
let leng = arr.push(4);
let lastElement = arr.pop();
arr.unshift(lastElement);

let arr1 = [2, 5, 90, 4];

let arr2 = arr.concat(arr1);
console.log(arr2);
arr2.indexOf(90);

arr2.splice(9, 1, 19, 2, 91);
console.log(arr2);

// + действия по условию
arr2.sort((a, b) => b - a);
console.log(arr2);

let sumArr2 = arr2.reduce((a, b) => a + b);
console.log(sumArr2);

/* 19. Дан массив пользователей. var users = [
{id: 1, name: "Вася", age: 20},
{id: 2, name: "Петя", age: 19},
{id: 3, name: "Маша", age: 18}
];
Добавить в этот маccив еще одного пользователя {id: 4, name: "Дима", age: 17}. Инвертируйте данный массив и выведите возраст пользователя с именем "Петя".*/

let users = [
  { id: 1, name: "Вася", age: 20 },
  { id: 2, name: "Петя", age: 19 },
  { id: 3, name: "Маша", age: 18 },
];

users.push({ id: 4, name: "Дима", age: 17 });
console.log(users);

users.reverse();
console.log(users);
let p = users.find((user) => user.name == "Петя");
console.log(p.age);

/* 20. В массиве users посчитайте общий суммарный возраст всех пользователей.*/

let users = [
  { id: 1, name: "Вася", age: 20 },
  { id: 2, name: "Петя", age: 19 },
  { id: 3, name: "Маша", age: 18 },
];

users.push({ id: 4, name: "Дима", age: 17 });
console.log(users);

users.reduce((a, user) => a + user.age, 0);
