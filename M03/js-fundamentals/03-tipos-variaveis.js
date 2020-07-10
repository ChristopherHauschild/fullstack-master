const num = 10.1;
const str = `Meu número é ${num + 1}`;

console.log(str);

const obj = {
  name: "Nome Sobrenome",
  city: {
    name: "Venâncio",
    state: "RS",
  },
};

console.log(obj);
console.log(obj.city.state);

const key = "name";
console.log(obj[key]);

const arr = [1, 2, 3];

console.log(arr[0]);

// functions -> first-class citizens
const toInt = parseInt;
console.log(toInt("10") + 1);
