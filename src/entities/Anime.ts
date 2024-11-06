export interface Anime {
  id: string;
  attributes: {
    canonicalTitle: string;
    slug: string;
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
