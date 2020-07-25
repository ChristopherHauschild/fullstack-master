const juros = require("./juros");

test("jurosSimples", () => {
  const C = 100;
  const i = 0.1;
  const t = 1;
  const jurosEsperados = 10;

  const res = juros.jurosSimples(C, i, t);
  expect(res).toBe(jurosEsperados);
});

test("montanteJurosSimples", () => {
  const C = 100;
  const i = 0.1;
  const t = 1;
  const montanteSimplesEsperado = 110;

  const jurosSimples = jest.fn();
  jurosSimples.mockImplementation(() => 10);
  // jurosSimples.mockImplementation((C, i, t) => C * i * t);

  const montanteJurosSimples = juros.pure.montanteJurosSimples({
    jurosSimples,
  });
  const res = montanteJurosSimples(C, i, t);

  expect(res).toBe(montanteSimplesEsperado);
  expect(jurosSimples.mock.calls[0]).toEqual([C, i, t]);
});

test("montanteJurosCompostos", () => {
  const C = 100;
  const i = 0.1;
  const t = 1;
  const montanteCompostosEsperado = 110.00000000000001;

  const res = juros.montanteJurosCompostos(C, i, t);
  expect(res).toBe(montanteCompostosEsperado);
});

test("jurosCompostos", () => {
  const C = 100;
  const i = 0.1;
  const t = 1;

  const montanteJurosSimples = jest.fn();
  montanteJurosSimples.mockImplementation(() => 110);

  // atribuindo fn à variável, passando como param fn mockada
  const jurosCompostos = juros.pure.jurosCompostos({ montanteJurosSimples });
  // fn retorna somente juros, sem Capital
  const res = jurosCompostos(C, i, t);
  expect(res).toBe(10.000000000000014);
});
