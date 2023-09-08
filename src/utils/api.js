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

  async function getDetail(type, id) {
    const response = await fetch(`${BASE_URL}/${type}/${id}/full`);
    const responseJson = await response.json();

    return responseJson;
  }

  async function getBySearch(type, queryParams) {
    const { query = '', page = 1 } = queryParams;

    const response = await fetch(`${BASE_URL}/${type}?q=${query}&page=${page}`);
    const responseJson = await response.json();

    return responseJson;
  }

  return {
    getSeasonNow,
    getSeasonUpcoming,
    getTopAnime,
    getTopManga,
    getDetail,
    getBySearch,
  };
})();

export default api;
