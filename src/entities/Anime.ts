export interface Anime {
  id: string;
  attributes: {
    canonicalTitle: string;
    slug: string;
    titles: { en: string; en_jp: string; ja_jp: string };
    synopsis: string;
    startDate: string;
    endDate: string;
    popularityRank: string;
    ratingRank: string;
    averageRating: string;
    ageRating: string;
    posterImage: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
      original: string;
    };
    status: "finished" | "current" | "tba" | "unreleased" | "upcoming";
    showType: "ONA" | "OVA" | "TV" | "movie" | "music" | "special";
  };
}
