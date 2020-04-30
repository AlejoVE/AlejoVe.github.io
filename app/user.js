export default class User {
  constructor() {
    this.name = "Luis Alejandro";
    this.lastName = "Montilla";
    this.username = "AlejoVE";
  }

  getRepos() {
    fetch(`https://api.github.com/users/AlejoVE/repos`)
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Error", error));
  }
}
