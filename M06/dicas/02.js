// Debug de NodeJS com VS Code

// setar breakpoint e rodar debugger

// Step Into -> entra na declaração da função do breakpoint

// Botão direito breakpoint > Editbreakpoint > Condição para debuggar linha de código (ex: req.query.test)

function test1() {
  console.log("opa");
  test2("calling *from* test 1");
}

function test2(param) {
  console.log(param);
}

test1();
