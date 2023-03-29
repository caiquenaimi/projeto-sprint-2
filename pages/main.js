function openModal() {
    const nome = document.getElementById('nome-box').value;
    const email = document.getElementById('email-box').value;
    const telefone = document.getElementById('nome-box').value;
    
    if (nome === '' || email === '' || telefone === '') {
      alert('Por favor, preencha todos os campos antes de enviar o formulário.');
    } else {
      const modal = document.getElementById('modal-container');
      modal.classList.add('mostrar');
    }
    
    const fechar = document.getElementById('fechar');
    fechar.addEventListener('click', () => {
      const modal = document.getElementById('modal-container');
      modal.classList.remove('mostrar');
    });

    // Seleciona o formulário
const form = document.querySelector('form');

// Adiciona o evento de validação
form.addEventListener('submit', function(event) {
  // Seleciona os campos do formulário
  const nomeBox = document.getElementById('nome-box');
  const emailBox = document.getElementById('email-box');
  const telefoneBox = document.getElementById('telefone-box');

  // Verifica se algum campo está vazio
  if (nomeBox.value === '' || emailBox.value === '' || telefoneBox.value === '') {
    // Define uma mensagem personalizada para cada campo vazio
    if (nomeBox.value === '') {
      nomeBox.setCustomValidity('Por favor, preencha seu nome.');
    }
    if (emailBox.value === '') {
      emailBox.setCustomValidity('Por favor, preencha seu e-mail.');
    }
    if (telefoneBox.value === '') {
      telefoneBox.setCustomValidity('Por favor, preencha seu telefone.');
    }
    // Previne o envio do formulário
    event.preventDefault();
  }
});
  }
  