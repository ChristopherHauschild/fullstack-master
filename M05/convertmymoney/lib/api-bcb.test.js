const api = require("./api-bcb");
const axios = require("axios");

/*
  -> mockando axios, para utilizar versão aqui definida do axios,
  ao invés do axios 'verdadeiro'
  -> para fazer teste unitário ao invés de teste de integração
*/

jest.mock("axios");

test("getCotacaoAPI", () => {
  const res = {
    data: {
      value: [{ cotacaoVenda: 3.9 }],
    },
  };
  /*
    quando axios for chamado, como ocorre na função da api,
    'res' é mockado como resposta | mantendo teste unitário
    simulando valor retornado pelo axios.get
  */
  axios.get.mockResolvedValue(res);
  api
    .getCotacaoAPI("url")
    .then((resp) => {
      // metodo axios.get de getCotacaoAPI tem valor mockado (resp como res)
      expect(resp).toEqual(res);
      // testando se chama axios.get passando a url informada nos param
      expect(axios.get.mock.calls[0][0]).toBe("url");
    })
    .catch((err) => console.log(err));
});

test("extractCotacao", () => {
  // metodo que extrai 'cotacaoVenda' da api passada como param
  const cotacao = api.extractCotacao({
    data: {
      value: [{ cotacaoVenda: 3.9 }],
    },
  });
  expect(cotacao).toBe(3.9);
});

// método para agrupar testes
describe("getToday", () => {
  // copiando global Date, para RealDate para guardá-lo
  const RealDate = Date;

  // fn que fixa valor para data para não utilizar do Date() global
  function mockDate(date) {
    // sobreescrevendo global Date
    global.Date = class extends RealDate {
      constructor() {
        // new Date() passa a gerar data passada como param
        return new RealDate(date);
      }
    };
  }
  afterEach(() => {
    // depois que rodar cada teste, retorna global Date para
    // o que era antes, para que não siga sempre um date falso
    global.Date = RealDate;
  });

  test("getToday", () => {
    // fixando valor para Date
    mockDate("2019-01-01T12:00:00z");
    // getToday() -> funcao que formata data passada como param
    const today = api.getToday();
    expect(today).toBe("1-1-2019");
  });
});

test("getURL", () => {
  // fn que retorna URL com data passada como param
  const url = api.getUrl("MINHA-DATA");
  expect(url).toBe(
    "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27MINHA-DATA%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao"
  );
});

test("getCotacao", () => {
  const res = {
    data: {
      value: [{ cotacaoVenda: 3.9 }],
    },
  };

  // criando versões falsas para deps
  // mockando valores falsos

  const getToday = jest.fn();
  getToday.mockReturnValue("01-01-2019");

  const getUrl = jest.fn();
  getUrl.mockReturnValue("url");

  const getCotacaoAPI = jest.fn();
  getCotacaoAPI.mockReturnValue(3.9);

  const extractCotacao = jest.fn();
  // valor extraído de cotacaoVenda da api de getCotacaoAPI
  extractCotacao.mockReturnValue(3.9);

  // () -> executa outra fn retornada (promise) -> requisição assincrona
  api.pure
    .getCotacao({ getToday, getUrl, getCotacaoAPI, extractCotacao })()
    .then((res) => {
      expect(res).toBe(3.9);
    });
});

// testando possibilidade de quebra -> return ""

test("getCotacao", () => {
  const res = {};

  // criando versões falsas para deps
  // mockando valores falsos

  const getToday = jest.fn();
  getToday.mockReturnValue("01-01-2019");

  const getUrl = jest.fn();
  getUrl.mockReturnValue("url");

  const getCotacaoAPI = jest.fn();
  getCotacaoAPI.mockReturnValue(Promise.reject("error"));

  const extractCotacao = jest.fn();
  // valor extraído de cotacaoVenda da api de getCotacaoAPI
  extractCotacao.mockReturnValue(3.9);

  // () -> executa outra fn retornada (promise) -> requisição assincrona
  api.pure
    .getCotacao({ getToday, getUrl, getCotacaoAPI, extractCotacao })()
    .then((res) => {
      expect(res).toBe("");
    });
});
