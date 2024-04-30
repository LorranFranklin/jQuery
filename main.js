$(document).ready(function() {
  //usando jQuery para selecionar e adicionar eventos
  $('header button').click(function() {
    alert('clicou no botão');
  });
  //usando apenas javaScript para selecionar e adicionar eventos
  //form.addEventListener('submit', function(event) {
  //  event.preventDefault();
  // alert('clicou no botão');
  //})
  
  //usando jQuery para selecionar e adicionar eventos
  $('form').on('submit', function(event) {
    event.preventDefault();
    alert('clicou no botão');
  });
});