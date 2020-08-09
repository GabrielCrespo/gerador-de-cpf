function gerarDigitosIniciaisCPF(){
    
    const digitosIniciais = [];
    for(let i = 0; i < 9; i++) {
        digitosIniciais.push((Math.floor(Math.random()*10)));
    }
    return digitosIniciais;
}

function multiplicarPrimeiroDigitoVerificador(digitosPrimeiroDV){
   
    const digitosPrimeiroDvMultiplicados = [];
    let fatorMultiplicativo = 10;

    for(digito of digitosPrimeiroDV) {
        digitosPrimeiroDvMultiplicados.push(digito*fatorMultiplicativo);
        fatorMultiplicativo -= 1;
    }
    return digitosPrimeiroDvMultiplicados;
}

function multiplicarSegundoDigitoVerificador(digitosSegundoDV){
   
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

    const multiplicacaoPrimeiroDigitoVerificador = multiplicarPrimeiroDigitoVerificador(digitos)
    const somaPrimeiroDigitoVerificador = somarDigitosCPF(multiplicacaoPrimeiroDigitoVerificador)
    const primeiroDigitoVerificador = calcularDigitoVerficador(somaPrimeiroDigitoVerificador)
    digitos.push(primeiroDigitoVerificador)

    const multiplicacaoSegundoDigitoVerificador = multiplicarSegundoDigitoVerificador(digitos)
    const somaSegundoDigitoVerificador = somarDigitosCPF(multiplicacaoSegundoDigitoVerificador)
    const segundoDigitoVerificador = calcularDigitoVerficador(somaSegundoDigitoVerificador)
    digitos.push(segundoDigitoVerificador)

    return digitos.join('')
}

function apresentarCPF(){

    const opcaoCPF = document.querySelector('#com-pontuacao');
    const mascaraCPF = /(\d{3})(\d{3})(\d{3})(\d{2})/
    const resultado = document.querySelector('#resultado');
    const item = document.createElement('p')

    resultado.innerHTML = ''

    if (opcaoCPF.checked) {

        item.innerHTML = `CPF gerado: ${estruturarCPF().replace(mascaraCPF, '$1.$2.$3-$4')}`
        item.style.color = '#CE1A1A'
        resultado.appendChild(item)
        
    } else {
     
        item.innerHTML = `CPF gerado: ${estruturarCPF()}`
        item.style.color = '#CE1A1A'
        resultado.appendChild(item)

    }  
}