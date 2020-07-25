const axios = require("axios");

// definindo com a data passada como param a url onde se encontra api
const getUrl = (date) =>
  `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${date}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;

// pegando a api da url informada como param
const getApi = (url) => axios.get(url);

// extraindo a cotacaoVenda a api | res.data.value[0] -> retirando objeto do vetor
const extractCotacao = (res) => res.data.value[0].cotacaoVenda;

const getToday = () => {
  const today = new Date();
  return `${today.getMonth() + 1}-${today.getDay()}-${today.getFullYear()}`;
};

const getCotacao = async () => {
  try {
    // atribuindo a data atual à today
    const today = getToday();
    // configurando a url com a data atual
    const url = getUrl(today);
    // pegando api desta url configurada com a data atual
    const res = await getApi(url);
    // extraindo cotacaoVenda da api
    const cotacao = await extractCotacao(res);

    console.log(today, cotacao);
  } catch (err) {
    console.log(err);
  }
};

getCotacao();
