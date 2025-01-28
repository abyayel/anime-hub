export interface Episode {
  id: string;
  attributes: {
    canonicalTitle: string;
    synopsis: string;
    thumbnail: {
      original: string;
    } | null;
    titles: {
      en_jp: string | null;
      en_us: string | null;
      ja_jp: string | null;
    };
    number: string;
    length: string | null;
    airdate: string | null;
  };
}
