// Fetch API

const appElement = document.querySelector("#app");

const addToPage = ({ name, price, image, type }, appElement) => {
  appElement.innerHTML += `
    <div class="name" id="${name}">
        <div class="priceTpye">${name} - ${type} - £${price} </div>
        <div class="img"><img src="https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/images/${image}" alt="${image}"></div>
    </div>
    `;
};

fetch("/assets/json/storeItems.json")
  .then((res) => res.json())
  .then((name) => {
    appElement.innerHTML = "";
    name.forEach((name) => addToPage(name, appElement));
  });
