// faz uma promessa, que é resolvida após x tempo
function time(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

// then -> necessário após resolução da promise
time(2000).then(() => console.log("opa"));
