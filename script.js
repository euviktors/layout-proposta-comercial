// Função para verificar se o usuário desceu a página
function checkScroll() {
    var shapeRodape = document.getElementById('shape-rodape');
    var alturaPagina = window.innerHeight;
    var posicaoScroll = window.scrollY;
    
    // Se a posição de rolagem for maior que a altura da página, mostra o shape do rodapé
    if (posicaoScroll > alturaPagina) {
      shapeRodape.style.display = 'block';
    } else {
      shapeRodape.style.display = 'none';
    }
  }
  
  // Adiciona o evento de rolagem (scroll) ao documento
  window.addEventListener('scroll', checkScroll);
  