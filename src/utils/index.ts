// types
import { Anime } from "../types/anime.type";
import { Manga } from "../types/manga.type";
import { Producer } from "../types/producer.type";

function trimTitle(title: string, limit = 20) {
  if (title.length > limit) return `${title.substring(0, limit)} ...`;

  return title;
}

function mappingData(data: Anime | Manga) {
  const rating = (genres: any[]) => {
    return genres.some((genre) =>
      genre.name.toLowerCase().includes(atob("aGVudGFp")),
    )
      ? "rx"
      : "";
  };

  return {
    mal_id: data.mal_id || "",
    image: data.images?.jpg?.image_url || "",
    title: data.title || "",
    type: data.type || "",
    rating: "rating" in data ? data.rating : rating(data.genres),
  };
}

function mappingDataInArray(data: Anime[] | Manga[]) {
  return data.map((item) => mappingData(item));
}

function getTitleFromUrl(url: string) {
  return url
    .split("/")
    [url.split("/").indexOf("producer") + 2].replace(/_/g, " ");
}

function mappingDataProducer(data: Producer) {
  return {
    mal_id: data.mal_id || "",
    image: data.images.jpg.image_url || "",
    title: getTitleFromUrl(data.url) || "",
    type: "producer",
  };
}

function mappingDataProducerInArray(data: Producer[]) {
  return data.map((item) => mappingDataProducer(item));
}

export {
  getTitleFromUrl,
  mappingData,
  mappingDataInArray,
  mappingDataProducer,
  mappingDataProducerInArray,
  trimTitle,
};
