/**
 * @author Nathalia Alves Rosário
 */

// Recolher menu na rolagem
// criar evento com -> window.addEventListener
// window (janela do navegador)
window.addEventListener('scroll', () => {
    let menuCheck = document.getElementById('check')
    // Se a caixa estiver selecionada
    if (menuCheck.checked) {
        menuCheck.checked = false
    }
})