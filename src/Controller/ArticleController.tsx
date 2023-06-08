import React, { useEffect, useState } from "react";
import ArticleModel, { Article } from "../Model/ArticleApi";
import ArticleView from "../View/ArticleView";

const ArticleController: React.FC = () => {
  const [data, setData] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const articles = await ArticleModel.fetchData();
      setData(articles);
    };

    fetchData();
  }, []);

  const handleUpdateArticle = async (
    id: number,
    title: string,
    body: string
  ) => {
    await ArticleModel.updateArticle(id, { title, body });
    const articles = await ArticleModel.fetchData();
    setData(articles);
  };

  const handleAddArticle = async () => {
    await ArticleModel.addArticle({
      title: "New Article",
      body: "New Article Body",
    });
    const articles = await ArticleModel.fetchData();
    setData(articles);
  };

  const handleDeleteArticle = async (id: number) => {
    await ArticleModel.deleteArticle(id);
    const articles = await ArticleModel.fetchData();
    setData(articles);
  };

  return (
    <ArticleView
      data={data}
      handleAddArticle={handleAddArticle}
      handleUpdateArticle={handleUpdateArticle}
      handleDeleteArticle={handleDeleteArticle}
    />
  );
};

export default ArticleController;
