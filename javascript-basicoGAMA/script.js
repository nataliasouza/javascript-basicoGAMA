console.log('JavaScript Carregado');

function validaCPF(cpf) {
    console.log(cpf.length)
    if (cpf.length != 11) {
        return false;
    }
}

function validacao(){
    console.log('Carregando Validação');
    var cpf = document.getElementById('cpf_digitado').value;
    
    var resultadoValidacao = validaCPF(cpf);
    if (resultadoValidacao==true) {
        document.getElementById('success').style.display = 'block';
    }else {
        document.getElementById('error').style.display = 'block';
    }
}