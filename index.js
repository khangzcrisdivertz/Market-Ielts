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

    <a href="detailreading.html?id=${p.id}" class="reading-card__btn rubik-glitch-regular">
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
     listCard.className = 'reading-card'
     listCard.innerHTML = `
    <div class="reading-card__content protest-strike-regular">
  <div class="reading-card__image">
    <img src="${l.img}" alt="IELTS Reading">
  </div>



    <h3 class="reading-card__title">
      ${l.title}
    </h3>

    <p class="reading-card__level protest-strike-regular">
      Band: <span>${l.category}</span>
    </p>

    <a href="detailLis.html?id=${l.id}" class="reading-card__btn rubik-glitch-regular">
      See more
    </a>
  </div>
     `
     listContainer.appendChild(listCard);
    });
    
  })
  
const button = document.getElementById('facebook');
button.addEventListener('click', doST);

function doST(){
  alert("Hong be oi!");
}

fetch ('https://69b5096bbe587338e714d274.mockapi.io/all')
.then(response => response.json())
.then(sdata => {
  const scContainer = document.getElementById('list-card3');
  sdata.forEach(d => {
    const card = document.createElement('div');
    card.className = 'university-card'
    card.innerHTML = `
 
    <div class="card-content">
        <h3 class="country">${d.country}</h3>

        <p class="university">
            <strong>University:</strong> ${d.university}
        </p>

        <p class="requirement">
            <strong>Requirement:</strong> ${d.requirement}
        </p>

        <button class="see-more" id="seeMoreBtn" >See more </button>
      </div>

  `
  scContainer.appendChild(card);


});

});


function goToSection(){
document.getElementById('target').scrollIntoView({ behavior: 'smooth' });

}
function goToSection2(){
  document.getElementById('target2').scrollIntoView({ behavior: 'smooth' }); 
}