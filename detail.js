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
      <p>${data.q1}</p>
      <input type="text" placeholder="Your answer..." />
    </div>

    <div class="reading-question">
      <p>${data.q2}</p>
      <input type="text" placeholder="Your answer..." />
    </div>
  </div>

  <button class="reading-submit-btn" id="submit-btn">Submit Answers</button>
`
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', doST);

function doST() {
    alert(`The correct answers are:\n 1. ${data.a1}\n 2. ${data.a2}`);
}
});

