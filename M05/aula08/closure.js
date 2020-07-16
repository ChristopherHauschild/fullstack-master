// forma de uma variável lembrar de onde foi executada/criada
// forma de 'travar' contexto

function func1(initial) {
  let count = initial;

  return function () {
    count++;
    return count;
  };
}

const func = func1(10);
const funcB = func1(20);

console.log(func());
console.log(func());
console.log(funcB(), funcB(), func(), funcB());

function animal(name) {
  let count = 0;

  return {
    getCount: function () {
      return count;
    },
    increment: function () {
      count++;
    },
    getName: function () {
      return name;
    },
  };
}

const cat = animal("cat");
cat.increment();
console.log(cat.getCount(), cat.getName());

const dog = animal("dog");
dog.increment();
console.log(dog.getCount(), dog.getName());
