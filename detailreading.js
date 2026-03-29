const urlParam = new URLSearchParams(window.location.search);
const id = urlParam.get('id');


fetch(`https://6975cb8ec0c36a2a994f782f.mockapi.io/all/${id}`)
.then(response => response.json())
.then(data => {
  
    const container = document.getElementById('detail-container');
container.innerHTML = `
 <h1 class="reading-title">${data.title}</h1>

  <div class="reading-passage">
    ${data.passage}
  </div>

  <div class="reading-question-title">Questions</div>

  <div class="reading-questions">
    <div class="reading-question">
      <p id="q1">${data.q1}</p>
      <input type="text" placeholder="Your answer..." />
        <p style="display: none;" id="a1">The correct answer is: ${data.a1}</p>
    </div>
  

    <div class="reading-question">
      <p id="q2">${data.q2}</p>
      <input type="text" placeholder="Your answer..." />
       <p style="display: none;" id="a2">The correct answer is: ${data.a2}</p>
    </div>
   

  <button class="reading-submit-btn" id="submit-btn">Submit Answers</button>
`

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', doST);

function doST() {
    const answer1 = document.getElementById("a1");
    const answer2 = document.getElementById("a2");

    answer1.style.display = "block";
    answer2.style.display = "block";

}
});







fetch(`https://6975cb8ec0c36a2a994f782f.mockapi.io/all`)
.then(response => response.json())
.then(data2 => {

const ContainerRead = document.getElementById('suggest-list');
data2.forEach(data2 => {
  const card = document.createElement('div');
  card.className = 'reading-suggest-card';
card.innerHTML = `
<a class="reading-suggest-card" href="detailreading.html?id=${data2.id}">
  <h3>${data2.title}</h3>
  <span>${data2.category}</span>
</a>`;

ContainerRead.appendChild(card);
})
;});

