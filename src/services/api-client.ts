import axios, { AxiosRequestConfig } from "axios";
const apiClient = axios.create({
  baseURL: "https://kitsu.io/api/edge",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
  },
});

interface FetchResponse<T> {
  data: T[];
  meta: { count: number };
  links: { next: string | undefined };
}

class APIClient<T> {
  private endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  public getAll(config: AxiosRequestConfig) {
    return apiClient
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((response) => response.data);
  }
}

export { APIClient };
