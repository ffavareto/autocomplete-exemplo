const campo = document.querySelector('.campo');
const sugestoes = document.querySelector('.sugestoes');

campo.addEventListener('input', (e) => {
    const dadosDoCampo = e.target.value;

    if (dadosDoCampo != '') {
        const autoCompleteValores = autoComplete(dadosDoCampo);
        sugestoes.innerHTML = `
            ${autoCompleteValores.map(valor => (`<li>${valor}</li>`)).join('')}
        `
    } else {
        sugestoes.innerHTML = '';
    };

});

function autoComplete(cidade) {
    const destino = [
        'Salvador',
        'Vitória',
        'Maceió',
        'Ceará',
        'Rio Branco',
        'Macapá',
        'Porto Velho',
        'Olinda',
        'Aracaju',
        'Capitólio',
        'São Paulo',
        'Paraty'
    ];

    return destino.filter(valor => {
        const valorMinusculo = valor.toLowerCase();
        const cidadeMinusculo = cidade.toLowerCase();

        return valorMinusculo.includes(cidadeMinusculo);
    });
};