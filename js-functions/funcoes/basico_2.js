function bomDia() {
    console.log('Bom dia!');
}

const boaTarde = function() {
    console.log('Boa tarde!');
}

// Passar uma função como parametro pra outra função
// 7:09
function executarQualquerCoisa(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);