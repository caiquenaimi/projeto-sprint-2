
function openModal(){
    const modal = document.getElementById('modal-container')
    modal.classList.add('mostrar')
  

/* constante da janela modal */
function openModal(){
    const modal = document.getElementById('modal-container')
    modal.classList.add('mostrar')
 }
/* configuração para abrir e fechar janela modal */    
    modal.addEventListener('click', (e) =>{
        if (e.target.id == 'modal-container' || e.target.id == "fechar"){
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container'
        }
    })
  }
