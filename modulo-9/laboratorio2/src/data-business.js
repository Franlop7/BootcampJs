function getUsers() {
  return fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.results;
    });
}

export { getUsers };
