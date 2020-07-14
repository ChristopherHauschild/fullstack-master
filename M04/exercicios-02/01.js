/*
  Atribuindo à sleep uma Promise que quando
  executada, chama o setTimeout, que é executado
  após o tempo passado por parâmetro
*/

const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

/* 
  Função que diz que deve-se aguardar a Promise
  ser encerrada antes de continuar
*/

const execute = async () => {
  console.log("Olá");
  await sleep(2000);
  console.log("Depois de 2segs");
};

execute();
