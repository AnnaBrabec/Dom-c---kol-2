const uzivEmail = {
    jmeno: prompt("Zadejte své jméno bez diakritiky."),
    prijmeni: prompt("Zadejte své příjmení bez diakritiky."),
    domena: '@fit.cvut.cz',
};
const bezMezer = {
     jmenoBez: uzivEmail.jmeno.trim(),
     prijmeniBez: uzivEmail.prijmeni.trim(),
};
const male = {
      jmenoMale: bezMezer.jmenoBez.toLowerCase(),
      prijmeniMale: bezMezer.prijmeniBez.toLowerCase(),
};
const nick = {
    jmenoNick: male.jmenoMale.slice(0,3),
    prijmeniNick: male.prijmeniMale.slice(0,5),
}

document.body.innerHTML =
  `<p>${nick.prijmeniNick}${nick.jmenoNick}${uzivEmail.domena}<p>`;