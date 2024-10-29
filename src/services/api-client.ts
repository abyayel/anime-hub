import axios, { AxiosRequestConfig } from "axios";
const apiClient = axios.create({
  baseURL: "https://kitsu.io/api/edge",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
  },
});

interface FetchArrayResponse<T> {
  data: T[];
  meta: { count: number };
  links: { next: string | undefined };
}

interface FetchObjectResponse<T> {
  data: T;
}

class APIClient<T> {
  private endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  public getAll(config: AxiosRequestConfig) {
    return apiClient
      .get<FetchArrayResponse<T>>(this.endpoint, config)
      .then((response) => response.data);
  }
  public get(id: string) {
    return apiClient
      .get<FetchObjectResponse<T>>(this.endpoint + "/" + id)
      .then((response) => response.data);
  }
}

export { APIClient };
