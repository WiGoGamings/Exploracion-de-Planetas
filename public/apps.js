// Busca os planetas do backend
fetch('/planetas')
  .then(res => res.json())
  .then(planetas => {
    const grid = document.getElementById('grid');

    planetas.forEach(planeta => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${planeta.imagem}" alt="${planeta.nome}">
        <div class="nome">${planeta.nome}</div>
        <div class="descricao">${planeta.descricao}</div>
      `;

      grid.appendChild(card);
    });
  })
  .catch(err => console.error('Erro ao carregar planetas:', err));
