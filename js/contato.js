const formulario = document.querySelector('form');
const iptNome = document.querySelector('#idNome');
const iptEmail = document.querySelector('#idEmail');
const iptTel = document.querySelector('#idTel');
const iptMensagem = document.querySelector('#mensagem');
const mensagemFlutuante = document.querySelector('#mensagem-flutuante');


const mensagensSalvas = JSON.parse(localStorage.getItem('mensagens')) || [];

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const dadosFormulario = {
        nome : iptNome.value,
        email : iptEmail.value,
        telefone : iptTel.value,
        mensagem : iptMensagem.value
    }

    console.log(dadosFormulario);
    mensagensSalvas.push(dadosFormulario);
    localStorage.setItem('mensagens', JSON.stringify(mensagensSalvas));

    mensagemFlutuante.classList.add('mostrar');
    setTimeout(() => {
        mensagemFlutuante.classList.remove('mostrar');
    }, 3000);
})