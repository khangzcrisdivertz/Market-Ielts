fetch ('https://6975cb8ec0c36a2a994f782f.mockapi.io/all')
.then(response => response.json())
.then(data => {
    const readingContainer = document.getElementById('list-card');
   data.forEach(p => {
  
        const card = document.createElement('div');
        card.className = 'reading-card'
        card.innerHTML = `
        <div class="reading-card__content protest-strike-regular">
  <div class="reading-card__image">
    <img src="${p.img}" alt="IELTS Reading">
  </div>



    <h3 class="reading-card__title">
      ${p.title}
    </h3>

    <p class="reading-card__level protest-strike-regular">
      Band: <span>${p.category}</span>
    </p>

    <a href="details.html?id=${p.id}" class="reading-card__btn rubik-glitch-regular">
      See more
    </a>
  </div>
        `
      readingContainer.appendChild(card);
    });
  })

  fetch ('https://697efb7fd1548030ab64df15.mockapi.io/all')
  .then(response => response.json())
  .then(lisdata => { 
    
    const listContainer = document.getElementById('list-card2');
    lisdata.forEach(l => {
      const listCard = document.createElement('div');
     listCard.className = 'card'
     listCard.innerHTML = `
     <div class="neo-card">
 <div class="neo-card__image">   
            <img src="${l.img}" alt="Card Image">
          </div>

  <div class="neo-card__body">
    <h3 class="neo-card__title">${l.title}</h3>
    <p class="neo-card__desc">
      ${l.category}
    </p>

    <a href="#" class="neo-card__btn">Explore now</a>
  </div>
</div>
     `
     listContainer.appendChild(listCard);
    });
    
  })
  
const button = document.getElementById('facebook');
button.addEventListener("click", doST);

function doST(){
  alert("Hong be oi!");
}