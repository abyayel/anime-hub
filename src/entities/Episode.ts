export interface Episode {
  id: string;
  attributes: {
    canonicalTitle: string;
    synopsis: string;
    thumbnail: {
      original: string;
    };
    titles: {
      en_jp: string;
      en_us: string;
      ja_jp: string;
    };
    number: string;
  };
}
