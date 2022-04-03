const DataBusiness = require("./data-business");
const ClientBusiness = require("./client-business");

// client-list-business.js

function printClientsAccounts() {
  const clients = DataBusiness.getClients();
  const ul = document.createElement("ul");
  for (let client of clients) {
    const element = ClientBusiness.getClientElement(client);
    ul.appendChild(element);
  }

  document.getElementById("root").appendChild(ul);
}

// exportamos para que puedan utilizarla desde otro archivo. ejemplo desde index.js

module.exports = { printClientsAccounts };