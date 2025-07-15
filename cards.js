let cardsList = document.querySelector(".cards");
let cards = [];

const card = {
  title: "MarioClub",
  link: "https://avalonslake.github.io/Mario-Club/",
};
cards.push(card);

const cats = {
  title: "Cat Photos",
  link: "https://avalonslake.github.io/CatAppWebsite/",
};
cards.push(cats);

const weather = {
  title: "MyWeather",
  link: "https://avalonslake.github.io/Weather-App-Project/",
};
cards.push(weather);

cards.map((item) => {});

cardsList.innerHTML += `<div class="card">
        <div class="card-inner">
          <div class="card-front front1">
            <h2>${card.title}</h2>
          </div>
          <div class="card-back back1">
            <a href=${card.link}>Project Link</a>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card-inner">
          <div class="card-front front1">
            <h2>${cats.title}</h2>
          </div>
          <div class="card-back back1">
            <a href=${cats.link}>Project Link</a>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card-inner">
          <div class="card-front front1">
            <h2>${weather.title}</h2>
          </div>
          <div class="card-back back1">
            <a href=${weather.link}>Project Link</a>
          </div>
        </div>
      </div>`;
