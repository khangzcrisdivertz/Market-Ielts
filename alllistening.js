// alllistening.js – Render danh sách bài Listening
// Dữ liệu hardcode (basic), mỗi item có title, band, YouTube embed URL và link chi tiết

const listeningData = [
  {
    title: "IELTS Listening – Academic Test 1",
    band: "Band 5-6",
    thumb: "https://i.postimg.cc/vBdsC3bZ/Gemini-Generated-Image-961rsr961rsr961r.png",
    link: "detailLis.html?id=1"
  },
  {
    title: "IELTS Listening – Academic Test 2",
    band: "Band 5-6",
    thumb: "https://i.postimg.cc/vBdsC3bZ/Gemini-Generated-Image-961rsr961rsr961r.png",
    link: "detailLis.html?id=2"
  },
  {
    title: "IELTS Listening – Academic Test 3",
    band: "Band 6-7",
    thumb: "https://i.postimg.cc/vBdsC3bZ/Gemini-Generated-Image-961rsr961rsr961r.png",
    link: "detailLis.html?id=3"
  },
  {
    title: "IELTS Listening – Academic Test 4",
    band: "Band 6-7",
    thumb: "https://i.postimg.cc/vBdsC3bZ/Gemini-Generated-Image-961rsr961rsr961r.png",
    link: "detailLis.html?id=4"
  },
  {
    title: "IELTS Listening – General Test 1",
    band: "Band 4-5",
    thumb: "https://i.postimg.cc/vBdsC3bZ/Gemini-Generated-Image-961rsr961rsr961r.png",
    link: "detailLis.html?id=5"
  },
  {
    title: "IELTS Listening – General Test 2",
    band: "Band 4-5",
    thumb: "https://i.postimg.cc/vBdsC3bZ/Gemini-Generated-Image-961rsr961rsr961r.png",
    link: "detailLis.html?id=6"
  },
  {
    title: "IELTS Listening – Cambridge 16 Test 1",
    band: "Band 7-8",
    thumb: "https://i.postimg.cc/vBdsC3bZ/Gemini-Generated-Image-961rsr961rsr961r.png",
    link: "detailLis.html?id=7"
  },
  {
    title: "IELTS Listening – Cambridge 17 Test 2",
    band: "Band 7-8",
    thumb: "https://i.postimg.cc/vBdsC3bZ/Gemini-Generated-Image-961rsr961rsr961r.png",
    link: "detailLis.html?id=8"
  }
];

const container = document.getElementById('list-card-listening');

listeningData.forEach(item => {
  const card = document.createElement('div');
  card.className = 'listening-card';

  card.innerHTML = `
    <img class="listening-card__thumb" src="${item.thumb}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/320x180/2b2b2b/aaa?text=Listening'">
    <div class="listening-card__body">
      <h3 class="listening-card__title">${item.title}</h3>
      <p class="listening-card__level protest-strike-regular">Band: <span>${item.band}</span></p>
      <a href="#" class="listening-card__btn">See more</a>
    </div>
  `;

  container.appendChild(card);
});
