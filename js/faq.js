let lastChecked = null;

document.querySelectorAll('.faq input[type="radio"]').forEach(radio => {
    radio.addEventListener('click', function () {
        const label = this.nextElementSibling;
        const resposta = label.nextElementSibling;

        // Se clicou no mesmo já marcado, desmarca
        if (this === lastChecked) {
            this.checked = false;
            lastChecked = null;
        } else {
            lastChecked = this;
        }

        // // Atualiza todos os estados de acessibilidade
        // document.querySelectorAll('.faq input[type="radio"]').forEach(input => {
        //     const lbl = input.nextElementSibling;
        //     const resp = lbl.nextElementSibling;

        //     if (input.checked) {
        //         input.setAttribute('aria-expanded', 'true');
        //         resp.setAttribute('aria-hidden', 'false');
        //     } else {
        //         input.setAttribute('aria-expanded', 'false');
        //         resp.setAttribute('aria-hidden', 'true');
        //     }
        // });
    });
});




const buttons = document.querySelectorAll('button');
const faqSections = document.querySelectorAll('.container-faq');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Remove .ativo de todos os botões
        buttons.forEach(btn => btn.classList.remove('ativo'));

        // Adiciona .ativo ao botão clicado
        this.classList.add('ativo');

        // Esconde todas as seções de FAQ
        faqSections.forEach(section => section.classList.remove('ativado'));

        // Mostra a seção correspondente ao botão clicado
        const id = this.id;
        const sectionToShow = document.getElementById(`container-${id}`);
        if (sectionToShow) {
            sectionToShow.classList.add('ativado');
        }
    });
});
