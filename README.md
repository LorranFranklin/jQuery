# jQuery - Studies

## Explorando as diferenças do jQuery e javaScript
[![Generic badge](https://img.shields.io/badge/STATUS-IN_PROGRESS-yellow.svg)](https://shields.io/)

## About 
```
//usando apenas javaScript para selecionar e adicionar eventos
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('clicou no botão');
  })
```
```
  //usando jQuery para selecionar e adicionar eventos
  $('form').on('submit', function(event) {
    event.preventDefault();
    alert('clicou no botão');
  });
```
## Getting Started

Ensure **[jQuery]** make sure jquery is imported correctly in your HTML file:
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>