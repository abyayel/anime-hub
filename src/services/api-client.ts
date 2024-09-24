import axios from "axios";

export interface FetchResponse<T> {
  data: T[];
}

export default axios.create({
  baseURL: "https://kitsu.io/api/edge",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
  },
});
