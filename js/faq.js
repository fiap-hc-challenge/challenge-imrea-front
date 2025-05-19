// Controle de acordeon: permite desmarcar a resposta aberta
let lastChecked = null;

document.querySelectorAll('.faq input[type="radio"]').forEach(radio => {
    radio.addEventListener('click', function () {
        const label = this.nextElementSibling;
        const resposta = label.nextElementSibling;

        // Se clicar novamente no mesmo item, desmarca
        if (this === lastChecked) {
            this.checked = false;
            lastChecked = null;

            // Acessibilidade: atualizar aria-expanded para false
            if (label) label.setAttribute('aria-expanded', 'false');
        } else {
            // Atualiza referência para o novo item
            lastChecked = this;

            // Acessibilidade: marcar todos os outros como fechados
            document.querySelectorAll('.faq label').forEach(lbl => lbl.setAttribute('aria-expanded', 'false'));

            // Atualiza o novo label como aberto
            if (label) label.setAttribute('aria-expanded', 'true');
        }
    });
});





// Controle das categorias (abas)
const buttons = document.querySelectorAll('button');
const faqSections = document.querySelectorAll('.container-faq');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const selectedId = this.id;

        // Remove classe ativo e atributos ARIA de todos os botões
        buttons.forEach(btn => {
            btn.classList.remove('ativo');
            btn.setAttribute('aria-selected', 'false');
        });

        // Marca o botão clicado
        this.classList.add('ativo');
        this.setAttribute('aria-selected', 'true');

        // Esconde todas as seções de FAQ
        faqSections.forEach(section => {
            section.classList.remove('ativado');
            section.setAttribute('hidden', 'true');
        });

        // Mostra a seção correspondente ao botão clicado
        const sectionToShow = document.getElementById(`container-${selectedId}`);
        if (sectionToShow) {
            sectionToShow.classList.add('ativado');
            sectionToShow.removeAttribute('hidden');
        }
    });
});

