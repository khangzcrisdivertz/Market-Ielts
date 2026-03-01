fetch ('https://6975cb8ec0c36a2a994f782f.mockapi.io/allofall')
.then(response => response.json())
.then(allreading => {
    const readingContainer = document.getElementById('list-card');
   
    allreading.forEach(p => {
    const card = document.createElement('div');
    card.className = 'reading-card'
  
    card.innerHTML = `
           <div class="reading-card__content protest-strike-regular">

    <h3 class="reading-card__title">
      ${p.title}
    </h3>

    <p class="reading-card__level protest-strike-regular">
      Band: <span>${p.category}</span>
    </p>

    <a href="Link" class="reading-card__btn rubik-glitch-regular">
      See more
    </a>
  </div>
        `
      readingContainer.appendChild(card);
    });
})