$(document).ready(function() {
  //usando jQuery para selecionar e adicionar eventos
  $('header button').click(function() {
    $('form').slideDown();
  });

  $('#btn-Cancelar').click(function() {
    $('form').slideUp();
  });
  //usando jQuery para selecionar e adicionar eventos
  $('form').on('submit', function(event) {
    event.preventDefault();
    const newImgAddress = $('#new-img-address').val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src="${newImgAddress}"/>`).appendTo(novoItem);
    $(`
      <div class="overlay-img-link">
        <a href="${newImgAddress}" title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a>
      </div>
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);
    $('#new-img-address').val('');
  });
});