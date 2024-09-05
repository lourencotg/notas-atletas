let objAtletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
];

objAtletas.forEach(atleta => {
    atleta.notas.sort((a, b) => b - a);
});

function retiraPriUlt() {
    for (let i = 0; i < objAtletas.length; i++) {
        objAtletas[i].notas.shift();
        objAtletas[i].notas.pop();
    }
}

function calculaMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i];
    }
    return soma / notas.length;
}

function mostraMedias() {
    objAtletas.forEach(atleta => {
        const media = calculaMedia(atleta.notas);
        console.log(`-------------------------------------------`);
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${atleta.notas}`);
        console.log(`Média Válida: ${media.toFixed(2)}`);
        console.log(`-------------------------------------------`);
    });
}

retiraPriUlt();
mostraMedias();
