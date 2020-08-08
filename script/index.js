function gerarDigitosIniciaisCPF(){
    
    const digitosIniciais = [];
    for(let i = 0; i < 9; i++) {
        digitosIniciais.push((Math.floor(Math.random()*10)));
    }
    return digitosIniciais;
}

function multiplicacaoParaPrimeiroDigitoVerificador(digitosPrimeiroDV){
   
    const digitosPrimeiroDvMultiplicados = [];
    let fatorMultiplicativo = 10;

    for(digito of digitosPrimeiroDV) {
        digitosPrimeiroDvMultiplicados.push(digito*fatorMultiplicativo);
        fatorMultiplicativo -= 1;
    }
    return digitosPrimeiroDvMultiplicados;
}

function multiplicacaoParaSegundoDigitoVerificador(digitosSegundoDV){
   
    const digitosSegundoDvMultiplicados = [];
    let fatorMultiplicativo = 11;

    for(digito of digitosSegundoDV) {
        digitosSegundoDvMultiplicados.push(digito*fatorMultiplicativo);
        fatorMultiplicativo -= 1;
    }
    return digitosSegundoDvMultiplicados;
}

function somarDigitosCPF(digitos) {
    return digitos.reduce((sum, value) => sum + value, 0);
}

function calcularDigitoVerficador(somaDigitos) {
    const restoDaDivisaoPorOnze = somaDigitos % 11;
    return restoDaDivisaoPorOnze % 11 < 2 ? 0 : 11 - restoDaDivisaoPorOnze;
}

function estruturarCPF(){

    const digitos = gerarDigitosIniciaisCPF()

    const somaPrimeiroDigitoVerificador = somarDigitosCPF(multiplicacaoParaPrimeiroDigitoVerificador(digitos))
    const primeiroDigitoVerificador = calcularDigitoVerficador(somaPrimeiroDigitoVerificador)
    digitos.push(primeiroDigitoVerificador)

    const somaSegundoDigitoVerificador = somarDigitosCPF(multiplicacaoParaSegundoDigitoVerificador(digitos))
    const segundoDigitoVerificador = calcularDigitoVerficador(somaSegundoDigitoVerificador)
    digitos.push(segundoDigitoVerificador)

    return digitos.join('')
}

function apresentarCPF(){

    let resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    let item = document.createElement('p')
    item.innerHTML = `CPF gerado: ${estruturarCPF()}`
    item.style.color = '#CE1A1A'
    resultado.appendChild(item)
    
}