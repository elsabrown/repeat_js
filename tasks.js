/* 1. Дан массив var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4]; На основании этого массива создать новый массив arrUnique который будет представлять собой массив arr но без дублирующихся по своим значениям элементам. Использовать методы reduce и indexOf.*/

let arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];

let arrUnique = arr.reduce((nums, num) => {
  if (nums.indexOf(num) === -1) {
    nums.push(num);
  }
  return nums;
}, []);

console.log(arrUnique);

/* 2. Дан массив пользователей. var users = [
 						  {id: 1, name: "Вася", age: 19},
  						  {id: 2, name: "Петя", age: 18},
  						  {id: 3, name: "Маша", age: 17},
  						  {id: 4, name: "Света", age: 18},
  						  {id: 5, name: "Наташа", age: 17},
						  {id: 6, name: "Женя", age: 12},
						  {id: 7, name: "Коля", age: 30},
						  {id: 8, name: "Настя", age: 16},
						  {id: 9, name: "Антон", age: 19},
						  {id: 10, name: "Иван", age: 20},
						  {id: 11, name: "Павел", age: 16},
						  {id: 12, name: "Денис", age: 20}
						];
На основании этого массива сформировать новы массив usersAfterYear где все пользователи повзрсолели на год и являются совершенолетними (повзрослевших на год, но оставшимися все еще несовершенолетних пользователей в новый массив usersAfterYear не включать). Сам массив users должен остаться неизменным. Использовать метод map.*/

let users = [
  { id: 1, name: "Вася", age: 19 },
  { id: 2, name: "Петя", age: 18 },
  { id: 3, name: "Маша", age: 17 },
  { id: 4, name: "Света", age: 18 },
  { id: 5, name: "Наташа", age: 17 },
  { id: 6, name: "Женя", age: 12 },
  { id: 7, name: "Коля", age: 30 },
  { id: 8, name: "Настя", age: 16 },
  { id: 9, name: "Антон", age: 19 },
  { id: 10, name: "Иван", age: 20 },
  { id: 11, name: "Павел", age: 16 },
  { id: 12, name: "Денис", age: 20 },
];

let usersAfterYear = users
  .map((user) => {
    user.age += 1;
    return user;
  })
  .filter((user) => user.age >= 18);

console.log(usersAfterYear);

/* 3. На основании массива usersAfterYear, полученного на основании предыдущего задания создать новый массив usersAfterYearUniqueAge, в котором нет пользователей с одинаковым возрастом. Если у вас есть два пользователя ({id: 2, name: "Петя", age: 19} и {id: 4, name: "Света", age: 19}, то вы должны оставить только Петю или Свету одного а не их двоих). (Это задание похоже на первое задания про массив arr и arrUnique)*/

let users = [
  { id: 1, name: "Вася", age: 19 },
  { id: 2, name: "Петя", age: 18 },
  { id: 3, name: "Маша", age: 17 },
  { id: 4, name: "Света", age: 18 },
  { id: 5, name: "Наташа", age: 17 },
  { id: 6, name: "Женя", age: 12 },
  { id: 7, name: "Коля", age: 30 },
  { id: 8, name: "Настя", age: 16 },
  { id: 9, name: "Антон", age: 19 },
  { id: 10, name: "Иван", age: 20 },
  { id: 11, name: "Павел", age: 16 },
  { id: 12, name: "Денис", age: 20 },
];

let usersAfterYear = users
  .map((user) => {
    user.age += 1;
    return user;
  })
  .filter((user) => user.age >= 18);

console.log(usersAfterYear);

let usersAfterYearUniqueAge = usersAfterYear.reduce(
  (a, b) => {
    if (a.find((item) => item.age === b.age) === undefined) {
      a.push(b);
    }
    return a;
  },
  [{}]
);

console.log(usersAfterYearUniqueAge);

/* 4. Посчитать первые 8 чисел Фибоначчи использую рекурсию. Например: fibonachi(n); (При вызове функции положите n = 8); */

let fibonachi = (n) => {
  return n <= 1 ? n : fibonachi(n - 1) + fibonachi(n - 2);
};
console.log(fibonachi(8));

/* 5. Посчитать с помощью рекурсии факториал числа 10. Например: factorial(n); (При выозове полжите n = 10); */

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

console.log(factorial(10));

/* 6. Напишите функцию func(), которая при каждом своем вызове будет возвращать количество своих вызовов (сколько раз ее вызызвали до этого плюс этот вызов) Используйте замыкание;*/

function a() {
  let i = 1;
  return function () {
    return i++;
  };
}

let func = a();

console.log(func());
console.log(func());
console.log(func());

/* 7. Создайте функцию-конструктор, которая позволяет создавать объект пользователя с полями first_name, second_name, age, city.
	  С помощью данной функции создайте два объекта пользователей (два пользователя), имя, фамилию, возраст, город проживания задайте сами. */

function User(first_name, second_name, age, city) {
  this.first_name = first_name;
  this.second_name = second_name;
  this.age = age;
  this.city = city;
}

let mike = new User("Mike", "Brown", "22", "LA");
let nadya = new User("Nadya", "Adamoyska", "21", "Gdansk");

console.log(mike);
console.log(nadya.city);

/* 8. Создайте функцию, которая позовляет вывести полную информацию о каждом из двух пользователей созданных в предыдущем задании. Функция должна выполнять вывод информации и не принимать аргументов. По сути нужно одну функцию привязать два объекта.*/

User.prototype.info = function () {
  console.log(this.first_name, this.second_name, this.age, this.city);
};

mike.info();
nadya.info();
