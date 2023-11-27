function Folder() {
  return new Proxy(
    {},
    {
      get: (target, property) => {
        if (!(property in target)) {
          target[property] = new Folder();
        }
        console.log(target[property]);
        return target[property];
      },
    }
  );
}

const rootFolder = new Folder();

try {
  rootFolder.ninjasDir.firstNinjaDir.ninjaFile = "yoshi.txt";
} catch (e) {
  console.log(e);
}
