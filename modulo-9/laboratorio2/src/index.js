import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils";

DataBusiness.getUsers().then((users) => {
  // limpiamos el loading escrito en el html antes de añadirle la lista
  document.getElementById("root").innerHTML = "";
  const nodes = [];

  for (let user of users) {
    nodes.push(Utils.createCharacterRow(user));
    // funciona igual pero asi ahoramos codigo
    // const node = Utils.createCharacterRow(user);
    // nodes.push(node);
  }

  for (let node of nodes) {
    document.getElementById("root").append(node);
    node.addEventListener("click", () => {
      Utils.showCharacter(users[nodes.indexOf(node)]);
    });
  }
});
