let cardsList = document.querySelector(".cards");
let cards = [];

// look up what an object in JavaScript is, when you find the syntax for an object, include a title and a url link
// Look up how to push an object to an array
const card = { title: "card", link: "" };
cards.push(card);
console.log(cards);

cards.map((item) => {});

cardsList.innerHTML += `<div class="card">
        <div class="card-inner">
          <div class="card-front front1">
            <h2>${card.title}</h2>
          </div>
          <div class="card-back back1">
            <a href="./project_1/index.html">Project Link</a>
          </div>
        </div>
      </div>`;
