// 4) O que sairá no console neste exemplo a seguir:

var a = 1;
function b() {
  a = 10;
  return;
  // hoisting
  // foi alterado 'a' function
  function a() {}
}
b();
console.log(a);
