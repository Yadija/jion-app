// types
import { AnimeDetail, AnimeList } from "../types/anime.type";
import { MangaDetail, MangaList } from "../types/manga.type";
import { ProducerDetail, ProducersList } from "../types/producer.type";

const api = (() => {
  const BASE_URL = "https://api.jikan.moe/v4";
  const LIMIT = 24;

  async function getSeasonNow(page: number = 1): Promise<AnimeList> {
    const response = await fetch(
      `${BASE_URL}/seasons/now?page=${page}&limit=${LIMIT}`,
    );
    const responseJson: AnimeList = await response.json();

    return responseJson;
  }

  async function getSeasonUpcoming(page: number = 1): Promise<AnimeList> {
    const response = await fetch(
      `${BASE_URL}/seasons/upcoming?page=${page}&limit=${LIMIT}`,
    );
    const responseJson: AnimeList = await response.json();

    return responseJson;
  }

  async function getTopAnime(page: number = 1): Promise<AnimeList> {
    const response = await fetch(
      `${BASE_URL}/top/anime?page=${page}&limit=${LIMIT}`,
    );
    const responseJson: AnimeList = await response.json();

    return responseJson;
  }

  async function getTopManga(page: number = 1): Promise<MangaList> {
    const response = await fetch(
      `${BASE_URL}/top/manga?page=${page}&limit=${LIMIT}`,
    );
    const responseJson: MangaList = await response.json();

    return responseJson;
  }

  async function getDetail(
    type: string,
    id: number,
  ): Promise<AnimeDetail | MangaDetail | ProducerDetail> {
    const response = await fetch(`${BASE_URL}/${type}/${id}/full`);
    const responseJson: AnimeDetail | MangaDetail | ProducerDetail =
      await response.json();

    return responseJson;
  }

  async function getBySearch(
    type: string,
    queryParams: { query: string; page: number },
  ): Promise<AnimeList | MangaList> {
    const { query = "", page = 1 } = queryParams;

    const response = await fetch(
      `${BASE_URL}/${type}?q=${query}&page=${page}&limit=${LIMIT}`,
    );
    const responseJson: AnimeList | MangaList = await response.json();

    return responseJson;
  }

  async function getProducers(page: number = 1): Promise<ProducersList> {
    const response = await fetch(
      `${BASE_URL}/producers?page=${page}&limit=${LIMIT}`,
    );
    const responseJson: ProducersList = await response.json();

    return responseJson;
  }

  return {
    getSeasonNow,
    getSeasonUpcoming,
    getTopAnime,
    getTopManga,
    getDetail,
    getBySearch,
    getProducers,
  };
})();

export default api;
