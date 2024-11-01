// types
import { Pagination } from "./pagination.type";

interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface Images {
  jpg: Image;
  webp: Image;
}

interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
}

interface Title {
  type: string;
  title: string;
}

interface Aired {
  from: string;
  to: string;
  prop: {
    from: DateProp;
    to: DateProp;
  };
  string: string;
}

interface DateProp {
  day: number;
  month: number;
  year: number;
}

interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

interface Producer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Licensor {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Studio {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface ExplicitGenre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Theme {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Demographic {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Anime {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string; // e.g., "TV"
  source: string;
  episodes: number;
  status: string; // e.g., "Finished Airing"
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string; // e.g., "G - All Ages"
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string; // e.g., "summer"
  year: number;
  broadcast: Broadcast;
  producers: Producer[];
  licensors: Licensor[];
  studios: Studio[];
  genres: Genre[];
  explicit_genres: ExplicitGenre[];
  themes: Theme[];
  demographics: Demographic[];
}

export interface AnimeList {
  data: Anime[];
  pagination: Pagination;
}

export interface AnimeListState {
  data: AnimeList | null;
  isLoading: boolean;
  error: string | null;
}

export interface AnimeDetail {
  data: Anime | null;
}

export interface AnimeDetailState {
  data: AnimeDetail | null;
  isLoading: boolean;
  error: string | null;
}
