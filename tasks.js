"use strict";

/* 1. Дан объект let user = { name: "Ivan", years: 19, car: "Subaru", telePhone: "iPhone", city: "Minsk" }.
Запишите поле name в переменную userName, поле year в переменную userName, поле car в переменную userCar, остальные поля
записать в объект userOtherInfo;*/

let user = {
  name: "Ivan",
  years: 19,
  car: "Subaru",
  telePhone: "iPhone",
  city: "Minsk",
};

let { name: userName, years: userYear, car: userCar, ...userOtherInfo } = user;

console.log(userName);
console.log(userYear);
console.log(userCar);
console.log(userOtherInfo);

/* 2. Дан массив let arr = [1, "str", 24, {name: "Ivan"}, 89, undeifined, "10"]. Используя оператор расширение и соответсвие порядка следования элементов запишите первые два элемента массива в переменные firstElement, secondElement, число 89 (четвертый элемент массива) в переменную fifthElement. Остальные элементы после 89 запишите в массив otherElements;*/

let arr = [1, "str", 24, { name: "Ivan" }, 89, "undeifined", "10"];

let [firstElement, secondElement, , , fifthElement, ...otherElements] = arr;

console.log(firstElement);
console.log(secondElement);
console.log(fifthElement);
console.log(otherElements);

/* 3. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого 
есть все элементы входных массивов. Например:
		var arrays = [[1, 2, 3], [4, 5], [6]];
		// Ваш код тут
		// → [1, 2, 3, 4, 5, 6]	*/

let arrays = [[1, 2, 3], [4, 5], [6]];

let newArr = arrays.reduce((a, b) => {
  return a.concat(b);
});

console.log(newArr);

/* 4. Создайте функцию-конструктор houseBuilder, которая позволяет создавать объект дачного дома с параметрами ширины длины и количества этажей. Создайте два объекта firstHouse и secondHouse на основании этой функции конструктора. (Длина, ширина, количество этажей - числовой тип данных, значения придумайте сами). */

function HouseBuilder(length, width, floors) {
  this.length = length;
  this.width = width;
  this.floors = floors;
}

let firstHouse = new HouseBuilder(1000, 2000, 2);
let secondHouse = new HouseBuilder(5000, 2500, 3);

console.log(firstHouse);
console.log(secondHouse);

/* 5. Создайте метод calcArea который будет возвращать суммарную площадь всех этажей дома. Данный метод занести в прототип конструктора. Вызвать данный метод на каждом созданном объекте и результат записать в поле totalArea каждого объекта.*/

HouseBuilder.prototype.calcArea = function () {
  this.totalArea = this.length * this.width * this.floors;
};

firstHouse.calcArea();
secondHouse.calcArea();
