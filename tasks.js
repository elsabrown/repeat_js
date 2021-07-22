/* 1. Расширьте предыдущее задание так, чтобы можно было осуществить последовательную уборку трех комнат. 
	Для этого создайте цепочку промисов. Только после того как уборка комнаты завершена, пользователь может начать убирать новую. Если одна из комнат оказалась слишком грязной, то пекращаем уборку полностью. Для этого функция cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три аргемента, каждый из кторых описывает 
	уровень загрязнения каждой комнаты.*/

function cleanRoom(dirtyLevel, dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
  return new Promise(function (resolve, reject) {
    if (dirtyLevel < 10) {
      setTimeout(() => resolve(dirtyLevel_1), dirtyLevel * 1000);
      setTimeout(() => resolve(dirtyLevel_2), dirtyLevel * 1000);
      setTimeout(() => resolve(dirtyLevel_3), dirtyLevel * 1000);
    } else {
      setTimeout(() => reject("Ошибка"), dirtyLevel);
    }
  });
}

function cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
  return new Promise(function (resolve, reject) {
    if (dirtyLevel_1 < 10 && dirtyLevel_2 < 10 && dirtyLevel_3 < 10) {
      setTimeout(() => resolve(dirtyLevel_1), dirtyLevel_1 * 1000);
      setTimeout(() => resolve(dirtyLevel_2), dirtyLevel_2 * 1000);
      setTimeout(() => resolve(dirtyLevel_3), dirtyLevel_3 * 1000);
    } else {
      setTimeout(() => reject("Ошибка"));
    }
  });
}

cleanRoom(3, 2, 3).then(function (result) { 
  console.log(`Уборка 1-й команты проведена за ${result} секунд`);
  return result;
}).then (function (result) {
  console.log(`Уборка 2-й команты проведена за ${result} секунд`);
  return result;
}).then (function (result) {
   console.log(`Уборка 3-й команты проведена за ${result} секунд`);
  return result;
}).then (function (error) {
  console.log(error);
  return error;
});

/* 2. На основанни задачи из прошлого дамашнего задания сделайте так, чтобы можно было осуществить параллельную уборку трех   комнат. Только после того как уборка всех комнат завершена, пользователь может заявить об окончании уборки. Если одна из комнат оказалась слишком грязной(условие при котором такое происхожит описано в предыдущем ДЗ), 
	то пекращаем уборку полностью. Для этого функция cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } 
	должна принимать три аргемента, каждый из кторых описывает уровень загрязнения каждой комнаты.*/
