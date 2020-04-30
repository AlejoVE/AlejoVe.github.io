export default class User {
  constructor() {
    this.name = "Luis Alejandro";
    this.lastName = "Montilla";
    this.username = "AlejoVE";
    this.repos = [];
  }

  getRepos() {
    fetch(`https://api.github.com/users/AlejoVE/repos`)
      .then((resp) => resp.json())
      .then((data) => this.repos.push(data))
      .catch((error) => console.log("Error", error));
  }
}
