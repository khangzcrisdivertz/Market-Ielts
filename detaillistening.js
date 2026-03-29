const UrlParam = new URLSearchParams(window.location.search);  
const id = UrlParam.get('id');
console.log(id);

fetch(`https://697efb7fd1548030ab64df15.mockapi.io/all/${id}`)
.then(Response => Response.json())
.then(data => {
const container = document.getElementById('detail-container');

    container.innerHTML = `
   <div class="detail-container">

    <div class="video-box">
        <iframe 
        src="${data.video}"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen>
        </iframe>
    </div>

    <h1 class="video-title">
        ${data.title}
    </h1>

    <p class="video-desc">
        ${data.content}
    </p>
    <button id="toggle-script" class="script-btn">
  Show Script
</button>
<p id="script" class="listening-script" style="display:none">${data.script}</p>
</div>

    `
const smbutton = document.getElementById('toggle-script');
smbutton.addEventListener('click', doST);


   function doST() {
    const script = document.getElementById('script');
   if(script.style.display === 'none') {
    script.style.display = 'block';
    smbutton.textContent = 'Hide Script';
   } else {
    script.style.display = 'none';
    smbutton.textContent = 'Show Script';
   }
}
});