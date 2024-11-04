// types
import { AnimeDetail, AnimeList } from "@/types/anime.type";
import { MangaDetail, MangaList } from "@/types/manga.type";
import { ProducerDetail, ProducersList } from "@/types/producer.type";

const api = (() => {
  const BASE_URL = "https://api.jikan.moe/v4";
  const LIMIT = 24;

  async function getSeasonNow({
    page = 1,
    sfw = true,
  }: {
    page?: number;
    sfw?: boolean;
  }): Promise<AnimeList> {
    const response = await fetch(
      `${BASE_URL}/seasons/now?page=${page}&sfw=${sfw}&limit=${LIMIT}`,
    );
    const responseJson: AnimeList = await response.json();

    return responseJson;
  }

  async function getSeasonUpcoming({
    page = 1,
    sfw = true,
  }: {
    page?: number;
    sfw?: boolean;
  }): Promise<AnimeList> {
    const response = await fetch(
      `${BASE_URL}/seasons/upcoming?page=${page}&sfw=${sfw}&limit=${LIMIT}`,
    );
    const responseJson: AnimeList = await response.json();

    return responseJson;
  }

  async function getTopAnime({
    page = 1,
    sfw = true,
  }: {
    page?: number;
    sfw?: boolean;
  }): Promise<AnimeList> {
    const response = await fetch(
      `${BASE_URL}/top/anime?page=${page}&sfw=${sfw}&limit=${LIMIT}`,
    );
    const responseJson: AnimeList = await response.json();

    return responseJson;
  }

  async function getTopManga({
    page = 1,
  }: {
    page?: number;
  }): Promise<MangaList> {
    const response = await fetch(
      `${BASE_URL}/top/manga?page=${page}&limit=${LIMIT}`,
    );
    const responseJson: MangaList = await response.json();

    return responseJson;
  }

  async function getAnime({
    query = "",
    page = 1,
    sfw = true,
  }: {
    query?: string;
    page?: number;
    sfw?: boolean;
  }): Promise<AnimeList> {
    const response = await fetch(
      `${BASE_URL}/anime?q=${query}&page=${page}&sfw=${sfw}&limit=${LIMIT}`,
    );
    const responseJson: AnimeList = await response.json();

    return responseJson;
  }

  async function getManga({
    query = "",
    page = 1,
    sfw = true,
  }: {
    query?: string;
    page?: number;
    sfw?: boolean;
  }): Promise<MangaList> {
    const response = await fetch(
      `${BASE_URL}/manga?q=${query}&page=${page}&sfw=${sfw}&limit=${LIMIT}`,
    );
    const responseJson: MangaList = await response.json();

    return responseJson;
  }

  async function getProducers(page: number = 1): Promise<ProducersList> {
    const response = await fetch(
      `${BASE_URL}/producers?page=${page}&limit=${LIMIT}`,
    );
    const responseJson: ProducersList = await response.json();

    return responseJson;
  }

  async function getDetailAnime(id: string): Promise<AnimeDetail> {
    const response = await fetch(`${BASE_URL}/anime/${id}`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Anime not found");
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseJson: AnimeDetail = await response.json();
    return responseJson;
  }

  async function getDetailManga(id: string): Promise<MangaDetail> {
    const response = await fetch(`${BASE_URL}/manga/${id}`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Manga not found");
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseJson: MangaDetail = await response.json();
    return responseJson;
  }

  async function getDetailProducer(id: string): Promise<ProducerDetail> {
    const response = await fetch(`${BASE_URL}/producers/${id}`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Producer not found");
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseJson: ProducerDetail = await response.json();
    return responseJson;
  }

  return {
    getSeasonNow,
    getSeasonUpcoming,
    getTopAnime,
    getTopManga,
    getAnime,
    getManga,
    getProducers,
    getDetailAnime,
    getDetailManga,
    getDetailProducer,
  };
})();

export default api;
