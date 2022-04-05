function getUsers() {
  return fetch(
    "https://www.breakingbadapi.com/api/characters"
  ).then((response) => response.json());
}

export { getUsers };
