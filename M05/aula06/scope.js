// scope -> visibilidade uma variável no código

// global scope && local scope

// entre {} há um novo escopo
const scopeGlobal = 1;

function test() {
  // local scope #1
  const var0 = 20;

  function otherTest() {
    // scope #2
    const var1 = 10;
    console.log(var0, var1);
  }

  if (var0 === 200) {
    // scope #3
    const var3 = 1222;
  }
  // console.log(var3) -> erro

  for (let i = 0; i < 10; i++) {
    // scope #4
    console.log(i); // i -> pode ser acessado dentro do for
  }
  otherTest(); // existe dentro da function test
}

test();
