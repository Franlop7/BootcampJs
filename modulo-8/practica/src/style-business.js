// style-business.js

function getNodeStyle(account) {
  if (account.money < 0) {
    return "color: red";
  }

  return "color: blue";
}

// Exportar

export { getNodeStyle };
