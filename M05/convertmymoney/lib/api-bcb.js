const axios = require("axios");

// pega url com parâmetros passados
const getUrl = (data) =>
  `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;

// pega dados da api a partir da url passada
const getCotacaoAPI = (url) => axios.get(url);
// res.data.value[0] -> para tirar objeto do vetor
const extractCotacao = (res) => res.data.value[0].cotacaoVenda;

const getToday = () => {
  const today = new Date();
  return (
    today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear()
  );
};

// injetando depedências para testar getCotacao unitariamente
const getCotacao = ({
  getToday,
  getUrl,
  getCotacaoAPI,
  extractCotacao,
}) => async () => {
  try {
    // seta data atual
    const today = getToday();
    // pega url configurada com data atual e atribui à 'url'
    const url = getUrl(today);
    // pega dados da api contida na url passada
    const res = await getCotacaoAPI(url);
    // extrai o valor de cotacaoVenda dessa api
    const cotacao = extractCotacao(res);

    // retornar o valor de cotacaoVenda
    return cotacao;
  } catch (error) {
    // tratamento de erro | caso api não retorne nenhum dado, value do input assume valor vazio
    return "";
  }
};

// exportando todas as funções para teste
module.exports = {
  getCotacaoAPI,
  // getCotacao preparado para index com deps internas já setadas
  // segue da mesma forma que assume sem injeção de deps
  getCotacao: getCotacao({
    getToday,
    getUrl,
    getCotacaoAPI,
    extractCotacao,
  }),
  getToday,
  getUrl,
  extractCotacao,
  // getCotacao pure para ser testado unitariamente
  pure: {
    getCotacao,
  },
};
