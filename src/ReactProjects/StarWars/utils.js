export const getPeople = async () => {
  const response = await fetch("https://www.swapi.tech/api/people");
  return response.json();
};

export const getPerson = async (url) => {
  const response = await fetch(url);
  return response.json();
};
