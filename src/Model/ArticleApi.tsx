import axios, { AxiosResponse } from "axios";

export interface Article {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
}

const ArticleApi = {
  fetchData: async (): Promise<Article[]> => {
    try {
      const response: AxiosResponse<Article[]> = await axios.get("http://localhost:3000/content");
      return response.data;
    } catch (error) {
      console.error("error:", error);
      return [];
    }
  },

  addArticle: async (article: {
    title: string;
    body: string;
  }): Promise<Article | null> => {
    try {
      const response: AxiosResponse<Article> = await axios.post(
        "http://localhost:3000/content",
        article
      );
      return response.data;
    } catch (error) {
      console.error("error:", error);
      return null;
    }
  },

  updateArticle: async (
    id: number,
    article: { title: string; body: string }
  ): Promise<Article | null> => {
    try {
      const response: AxiosResponse<Article> = await axios.put(
        `http://localhost:3000/content/${id}`,
        article
      );
      return response.data;
    } catch (error) {
      console.error("error:", error);
      return null;
    }
  },

  deleteArticle: async (id: number): Promise<boolean> => {
    try {
      const response: AxiosResponse<any> = await axios.delete(
        `http://localhost:3000/content/${id}`
      );
      return response.status === 200;
    } catch (error) {
      console.error("error:", error);
      return false;
    }
  },
};

export default ArticleApi;
