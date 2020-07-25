const juros = require("./juros");

// boa prática -> declarar variáveis e 'mockar' resultado manualmente

test("jurosSimples", () => {
  const C = 100;
  const i = 0.1;
  const t = 3;
  const jurosEsperados = 30;

  const res = juros.jurosSimples(C, i, t);
  expect(res).toBe(jurosEsperados);
});

test("montanteJurosSimples", () => {
  const C = 100;
  const i = 0.1;
  const t = 3;

  // mockando fn jurosSimples e sua funcionalidade
  const jurosSimples = jest.fn();
  // definindo retorno de jurosSimples p/ facilitar teste
  jurosSimples.mockImplementation(() => 30);

  // atribuindo à variável a função montanteJurosSimples passando como param a fn mockada
  const montanteJurosSimples = juros.pure.montanteJurosSimples({
    jurosSimples,
  });

  // atribuindo à variável o retorno da fn montanteJurosSimples já configurada, baseado nos params passados
  const res = montanteJurosSimples(C, i, t);
  expect(res).toBe(130);
  // testando se variáveis estão sendo corretamente passadas como param para a fn jurosSimples
  expect(jurosSimples.mock.calls[0]).toEqual([C, i, t]);
});

test("montanteJurosCompostos", () => {
  const C = 100;
  const i = 0.10;
  const t = 1;
  const montanteEsperado = 110.00000000000001;

  const res = juros.montanteJurosCompostos(C, i, t);
  expect(res).toBe(montanteEsperado);
});

test("juros", () => {
  const C = 100;
  const i = 0.1;
  const t = 1;

  const montanteJurosCompostos = jest.fn();
  montanteJurosCompostos.mockImplementation(() => 110.00000000000001);

  // chamando fn juros, passando como param fn mockada que deve ser utilizada
  const jurosFN = juros.pure.juros({ montanteJurosCompostos });
  const res = jurosFN(C, i, t);
  expect(res).toBe(10.000000000000014);
});
