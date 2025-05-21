function mostrarPasso(n) {
    document.querySelectorAll('.passo').forEach(el => el.classList.remove('ativo'));
    document.getElementById('passo' + n).classList.add('ativo');
}