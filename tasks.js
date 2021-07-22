"use strict";

/* 1. Есть функция: 

function cleanRoom() {
  setTimeout(() => console.log("Команата убрана"), 5000);
}

Данная функция отвечает за уборку комнаты, для этого ей надо время 5 секунд, после этого происхожит оповещение что комната убрана. Перепешите используя промисы.*/

let cleanRoom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve (console.log("Команата убрана"));
  }, 5000);
});

cleanRoom
  .then(
    result => console.log(result),
    error => console.log('Ошибка')
  );

//вариант 2
function cleanRoom(){
   return new Promise(resolve => {
    setTimeout(() => 
      resolve("Команата убрана"), 5000);
  });
}

cleanRoom().then(
  result => console.log(result),
  error => console.log('Ошибка')
);

/* 2. Напишите функцию уборки комнаты cleanRoom(dirtyLevel) { ... }, которая принимает на вход числовой показатель загрязнения комнаты (от 0 до 10). В зависимости от этого числа опеределяется сколько времени надо потратить на уборку, это время равно значению dirtyLevel * 1000 в мс. Данная функция возвращает успешно выполненный промис спустя указанное время dirtyLevel * 1000.
Для обработки успешной уборки в then используйте console.log(`Уборка проведена успешно за ${result} секунд`); где result это аргумент
resolve.*/

function cleanRoom(dirtyLevel) {
  return new Promise (function (resolve, reject) {
    if (dirtyLevel > 10) {
      setTimeout(() => reject("Ошибка!"));
    } else {
      setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
    }
  });
}

cleanRoom(3).then(
  (result) => console.log(`Уборка проведена успешно за ${result} секунд`),
  (error) => console.log(`Ошибка!`)
);

/* 3. Расширьте предыдущее задание так, чтобы при передаче в dirtyLevel > 10 вы спустя dirtyLevel * 1000 мс возвращали выполненный с ошибкой промис. Для обработки неуспешной уборки в then используйте console.log(err). Где err это аргумент reject. 
Текст ошибки придумайте сами.*/

function cleanRoom(dirtyLevel) {
  return new Promise(function (resolve, reject) {
    if (dirtyLevel > 10) {
      setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
    } else {
      setTimeout(() => reject('Что-то пошло не так'));
    }
  });
}

cleanRoom(3).then(
  (result) => console.log(`Уборка проведена за ${result} секунд`),
  (error) => console.log(error)
);
