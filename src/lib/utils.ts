import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// types
import { Anime } from "@/types/anime.type";
import { Card } from "@/types/card.type";
import { Manga } from "@/types/manga.type";
import { Producer } from "@/types/producer.type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getProducerTitleFromUrl(url: string) {
  return url
    .split("/")
    [url.split("/").indexOf("producer") + 2].replace(/_/g, " ");
}

export function mapAnimeData(data: Anime): Card {
  return {
    id: data.mal_id || 0,
    title: data.title || "",
    image: data.images?.jpg?.image_url || "",
    type: "anime",
    link: `/anime/${data.mal_id}`,
    rating: data.rating,
  };
}

export function mapMangaData(data: Manga): Card {
  const nsfw = data.genres.some((genre) => {
    return genre.name.toLowerCase().includes(atob("aGVudGFp"));
  });

  return {
    id: data.mal_id || 0,
    title: data.title || "",
    image: data.images?.jpg?.image_url || "",
    type: "manga",
    link: `/manga/${data.mal_id}`,
    rating: nsfw ? "rx" : "",
  };
}

export function mapProducerData(data: Producer): Card {
  return {
    id: data.mal_id || 0,
    title: getProducerTitleFromUrl(data.url),
    image: data.images?.jpg?.image_url || "",
    type: "producer",
    link: `/producers/${data.mal_id}`,
  };
}

export function mapAnimeArray(data: Anime[]): Card[] {
  return data.map(mapAnimeData);
}

export function mapMangaArray(data: Manga[]): Card[] {
  return data.map(mapMangaData);
}

export function mapProducerArray(data: Producer[]): Card[] {
  return data.map(mapProducerData);
}

export function getCurrentSeason() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  if (month >= 3 && month <= 5) {
    return `Spring ${year}`;
  } else if (month >= 6 && month <= 8) {
    return `Summer ${year}`;
  } else if (month >= 9 && month <= 11) {
    return `Fall ${year}`;
  } else if (month >= 12 && month <= 2) {
    return `Winter ${year}`;
  } else {
    return "";
  }
}
