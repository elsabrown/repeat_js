/* 1. Перепишите цепочку промисов из предыдущего задания, используя async/await*/


﻿
function cleanRoom(dirtyLevel) {
  return new Promise(function (resolve, reject) {
    if (dirtyLevel < 10) {
      setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
    } else {
      setTimeout(() =>
        reject("Поздно, мы потеряли эту комнату. Здесь слишком грзно")
      );
    }
  });
}

async function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
try {
let r1 = await cleanRoom(dirtyLevel_1);
      console.log(`Уборка комнаты №1 проведена успешно за ${dirtyLevel_1} секунд`);

let r2 = await cleanRoom(dirtyLevel_2);
      console.log(`Уборка комнаты №2 проведена успешно за ${dirtyLevel_2} секунд`);

let r3 = await cleanRoom(dirtyLevel_3);
      console.log(`Уборка комнаты №3 проведена успешно за ${dirtyLevel_3} секунд`);
}catch(err) {
    console.error("Error:", err);
 }
}

cleanRooms(3, 2, 7);
cleanRooms(3, 2, 11);