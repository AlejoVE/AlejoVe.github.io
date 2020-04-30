import User from "./user.js";

const init = () => {
  const buttonEl = document.getElementById("getRepos");
  const favButton = document.getElementById("getFavorites");
  const user = new User();

  function clearButton() {
    let button = document.createElement("button");
    button.textContent = "clear";
    button.className = "btn1";
    button.id = "clear";

    button.addEventListener("click", clear);
    return button;
  }

  function clear() {
    if (favButton.nextElementSibling === null) {
      return false;
    } else {
      favButton.nextElementSibling.remove();
    }
  }

  function renderList() {
    clear();
    let container = user.render();
    let divEl = document.getElementById("repos");
    let button = clearButton();
    container.appendChild(button);
    divEl.appendChild(container);
  }

  buttonEl.addEventListener("click", () => {
    user.getRepos().then(() => renderList());
  });

  favButton.addEventListener("click", () => {
    user.getFavorites().then(() => renderList());
  });
};

init();
