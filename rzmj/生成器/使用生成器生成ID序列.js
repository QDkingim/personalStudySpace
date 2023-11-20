function* idGenerator() {
  let id = 0;
  while (true) {
    yield ++id;
  }
}

const idIterator = idGenerator();

const ninja = { id: idIterator.next().value };
