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

interface Title {
  type: string;
  title: string;
}

interface Date {
  day: number;
  month: number;
  year: number;
}

interface Published {
  from: string;
  to: string;
  prop: {
    from: Date;
    to: Date;
  };
  string: string;
}

interface Author {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Serialization {
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

export interface Manga {
  mal_id: number;
  url: string;
  images: Images;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  type: string;
  chapters: number;
  volumes: number;
  status: string;
  publishing: boolean;
  published: Published;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  authors: Author[];
  serializations: Serialization[];
  genres: Genre[];
  explicit_genres: ExplicitGenre[];
  themes: Theme[];
  demographics: Demographic[];
}

export interface MangaList {
  data: Manga[];
  pagination: Pagination;
}

export interface MangaDetail {
  data: Manga | null;
}
