export default class User {
  constructor() {
    this.name = "Luis Alejandro";
    this.lastName = "Montilla";
    this.username = "AlejoVE";
    this.repos = {};
  }

  getRepos() {
    return fetch(`https://api.github.com/users/${this.username}/repos`)
      .then((resp) => resp.json())
      .then((data) => (this.repos = data))
      .catch((error) => console.log("Error", error));
  }

  getFavorites() {
    return fetch(`https://api.github.com/users/${this.username}/starred`)
      .then((resp) => resp.json())
      .then((data) => (this.repos = data))
      .catch((error) => console.log("Error", error));
  }

  render() {
    let container = document.createElement("ul");
    this.repos.forEach((item) => {
      const liEl = document.createElement("li");
      const aEl = document.createElement("a");
      aEl.textContent = item.name;
      aEl.href = item.html_url;
      aEl.target = "_blank";

      const brEl = document.createElement("br");
      liEl.appendChild(aEl);

      container.appendChild(liEl);
      container.appendChild(brEl);
    });

    return container;
  }
}
