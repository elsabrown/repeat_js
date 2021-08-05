/* 1. Перепишите цепочку промисов из предыдущего задания, используя async/await*/

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

function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
  cleanRoom(dirtyLevel_1)
    .then((result) => {
      console.log(`Уборка комнаты №1 проведена успешно за ${result} секунд`);
      return cleanRoom(dirtyLevel_2);
    })
    .then((result) => {
      console.log(`Уборка комнаты №2 проведена успешно за ${result} секунд`);
      return cleanRoom(dirtyLevel_3);
    })
    .then((result) =>
      console.log(`Уборка комнаты №3 проведена успешно за ${result} секунд`)
    )
    .catch((error) => console.error(error));
}

cleanRooms(3, 2, 7);