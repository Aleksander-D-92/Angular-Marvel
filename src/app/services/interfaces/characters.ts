import {BaseResponse} from './base-response';

interface CharacterComicItem {
  resourceURI: string;
  name: string;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: CharacterComicItem[];
  };
}

export interface Characters extends BaseResponse {
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[]
  };
}

