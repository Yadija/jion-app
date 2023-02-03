const api = (() => {
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

  async function getTopAnime(page = 1) {
    const response = await fetch(`${BASE_URL}/top/anime?page=${page}`);
    const responseJson = await response.json();

    return responseJson;
  }

  async function getTopManga(page = 1) {
    const response = await fetch(`${BASE_URL}/top/manga?page=${page}`);
    const responseJson = await response.json();

    return responseJson;
  }

  return {
    getSeasonNow,
    getSeasonUpcoming,
    getTopAnime,
    getTopManga,
  };
})();

export default api;
