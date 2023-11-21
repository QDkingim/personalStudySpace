async(function* () {
  try {
    const ninjas = yield getJSON("data/ninjas.json");
    const mission = yield getJSON(ninjas[0].missionUrl);
    const missionDescription = yield getJSON(mission[0].detailUrl);
  } catch (e) {
    // 报错了
  }
});

function async(generator) {
  let iterator = generator();
  function handle(iteratorResult) {
    if (iteratorResult.done) return;

    const iteratorValue = iterator.value;
    if (iteratorValue instanceof Promise) {
      iteratorValue
        .then((res) => iterator.next(res))
        .catch((e) => iterator.throw(e));
    }
  }

  try {
    handle(iterator.next());
  } catch (e) {
    iterator.throw(e);
  }
}
