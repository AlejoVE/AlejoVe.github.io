import User from "./user.js";

const init = () => {
  const buttonEl = document.getElementById("getRepos");
  buttonEl.addEventListener("click", () => {
    debugger;
    const user = new User();
    user.getRepos();
    console.log(user);
    user.getRepos().then(() => {
      let container = user.render();
      let divEl = document.getElementById("repos");
      divEl.appendChild(container);
    });
  });
};

init();
