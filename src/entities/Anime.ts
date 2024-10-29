export interface Anime {
  id: string;
  attributes: {
    canonicalTitle: string;
    slug: string;
    synopsis: string;
    averageRating: string;
    ageRating: string;
    posterImage: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
      original: string;
    };
  };
}
