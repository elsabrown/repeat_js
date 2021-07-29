/* 1. Расширьте предыдущее задание так, чтобы можно было осуществить последовательную уборку трех комнат. 
	Для этого создайте цепочку промисов. Только после того как уборка комнаты завершена, пользователь может начать убирать новую. Если одна из комнат оказалась слишком грязной, то пекращаем уборку полностью. Для этого функция cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три аргемента, каждый из кторых описывает 
	уровень загрязнения каждой комнаты.*/

function cleanRoom(dirtyLevel) {
  return new Promise(function (resolve, reject) {
    if (dirtyLevel < 10) {
      setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
    } else {
      setTimeout(
        () => reject("Поздно, мы потеряли эту комнату. Здесь слишком грзно")
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

/* 2. На основанни задачи из прошлого дамашнего задания сделайте так, чтобы можно было осуществить параллельную уборку трех   комнат. Только после того как уборка всех комнат завершена, пользователь может заявить об окончании уборки. Если одна из комнат оказалась слишком грязной(условие при котором такое происхожит описано в предыдущем ДЗ), 
	то пекращаем уборку полностью. Для этого функция cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } 
	должна принимать три аргемента, каждый из кторых описывает уровень загрязнения каждой комнаты.*/

function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
 if (dirtyLevel_1 < 10 && dirtyLevel_2 < 10 && dirtyLevel_3 < 10) {
   cleanRoom(dirtyLevel_1)
    .then((result) => {
      return console.log(
        `Уборка комнаты №1 проведена успешно за ${result} секунд`
      );
    })
    .catch((error) => console.error(error));
  cleanRoom(dirtyLevel_2)
    .then((result) => {
      return console.log(
        `Уборка комнаты №2 проведена успешно за ${result} секунд`
      );
    })
    .catch((error) => console.error(error));
  cleanRoom(dirtyLevel_3)
    .then((result) => {
      return console.log(
        `Уборка комнаты №3 проведена успешно за ${result} секунд`
      );
    })
    .catch((error) => console.error(error));
  } else {
    console.log('Здесь слишком грязно');
  }
}

cleanRooms(3, 11, 4);
cleanRooms(3, 1, 4);
