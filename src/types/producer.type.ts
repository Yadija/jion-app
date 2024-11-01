// types
import { Pagination } from "./pagination.type";

interface Title {
  type: string;
  title: string;
}

interface Image {
  image_url: string;
}

interface Images {
  jpg: Image;
}
export interface Producer {
  mal_id: number;
  url: string;
  titles: Title[];
  images: Images;
  favorites: number;
  count: number;
  established: string;
  about: string;
}

export interface ProducersList {
  data: Producer[];
  pagination: Pagination;
}

export interface ProducerDetail {
  data: Producer | null;
}
