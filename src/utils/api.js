const BASE_URL = 'https://api.jikan.moe/v4';

async function getSeasonNow(page = 1) {
  const response = await fetch(`${BASE_URL}/seasons/now?page=${page}`);
  const responseJson = await response.json();

  return responseJson;
}

async function getSeasonUpcoming(page = 1) {
  const response = await fetch(`${BASE_URL}/seasons/upcoming?page=${page}`);
  const responseJson = await response.json();

  return responseJson;
}

export { getSeasonNow, getSeasonUpcoming };
