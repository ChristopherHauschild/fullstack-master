const axios = require("axios");

// pega url com parâmetro passado
const getUrl = (date) =>
  `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${date}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;

// pega dados da api a partir da url passada
const getApi = (url) => axios.get(url);

// res.data.value[0] -> retirando objeto do vetor | extrai cotacaoVenda dos dados da api
const extractApi = (res) => res.data.value[0].cotacaoVenda;

const getToday = () => {
  const today = new Date();
  return `${today.getMonth() + 1}-${today.getDay()}-${today.getFullYear()}`;
};

const getCotacao = async () => {
  try {
    // seta data atual
    const date = getToday();
    // pega url configurada com data atual e atribui à 'url'
    const url = getUrl(date);
    // pega dados da api contida na url passada
    const res = await getApi(url);
    // extrai o valor de cotacaoVenda dessa api
    const cotacao = await extractApi(res);

    console.log(cotacao);
    console.log(getToday());
  } catch (err) {
    console.log(err);
  }
};

getCotacao();
