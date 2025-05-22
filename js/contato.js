const formulario = document.querySelector('form');
const iptNome = document.querySelector('#idNome');
const iptEmail = document.querySelector('#idEmail');
const iptTel = document.querySelector('#idTel');
const iptMensagem = document.querySelector('#mensagem');


const mensagens = [];

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const dadosFormulario = {
        nome : iptNome.value,
        email : iptEmail.value,
        telefone : iptTel.value,
        mensagem : iptMensagem.value
    }

    console.log(dadosFormulario);
    mensagens.push(dadosFormulario);
})