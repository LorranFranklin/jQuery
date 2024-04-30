# jQuery - Studies

## Explorando as diferenças do jQuery e javaScript
[![Generic badge](https://img.shields.io/badge/STATUS-IN_PROGRESS-yellow.svg)](https://shields.io/)

# Table of Contents

1. [About](#about)
2. [Getting Started](#getting-started)
3. [Project Details](#project-details)
4. [Training Results](#training-results)

## About 
//usando apenas javaScript para selecionar e adicionar eventos
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('clicou no botão');
  })
  
  //usando jQuery para selecionar e adicionar eventos
  $('form').on('submit', function(event) {
    event.preventDefault();
    alert('clicou no botão');
  });

## Getting Started

Ensure **[jQuery]** make sure jquery is imported correctly in your HTML file:
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>