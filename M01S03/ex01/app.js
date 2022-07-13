var object = {
  name: 'Dante',
  surname: 'Hargrave',
  age: 37,
  petOwner: false,
  carOwner: true,
};

console.log(object.name);
console.log(object.surname);
console.log(object.age.toString());

console.warn(
  `Afiseaza fraza “Ma numesc xxx yyy si am xx ani.” in consola folosind operatorul de concatenare`,
);

console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' ' +
    'si am ' +
    object.age +
    ' ani.',
);

console.warn(`
Afiseaza anul in care te-ai nascut scazand varsta pe care ai trecut-o in obiect din anul curent (un proces numit hardcodare)
`);

console.log((2022 - object.age).toString());

console.warn(`
Adauga o cheie noua de tip boolean cu numele petOwner (observa capitalizarea)
`);

console.log(
  object.name + ' ' + object.surname + ' are ' + object.age + ' ani.',
);

console.warn(`
Afiseaza fraza “xxx s-a nascut in aaaa.” Foloseste tot anul curent pentru a scadea varsta.
`);

console.log(object.name + ' s-a nascut in ' + (2022 - object.age) + '.');
