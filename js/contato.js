const btnSubmeterFormulario = document.querySelector('#btnEnviar');
const iptNome = document.querySelector('#idNome');
const iptEmail = document.querySelector('#idEmail');
const iptTel = document.querySelector('#idTel');
const iptMensagem = document.querySelector('#mensagem');


btnSubmeterFormulario.addEventListener('submit', (event) => {
    const dadosFormulario = {
        'nome' : iptNome.value,
        'email' : iptEmail.value,
        'telefone' : iptTel.value,
        'mensagem' : iptMensagem.value
    }
})