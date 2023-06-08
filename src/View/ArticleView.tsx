import React, { useEffect, useState } from "react";
import { Article } from "../Model/ArticleApi";
import ArticleEdit from "../Component/Article/ArticleEdit";
import ArticleTitle from "../Component/Article/ArticleTitle";
import styles from "../Style/articleview.module.css";
import editIcon from "../assets/icon/edit.svg";
import addIcon from "../assets/icon/+.svg";
import done from "../assets/icon/done.svg";
import logo from "../assets/icon/logo.svg";
import ButtonStyles from "../Style/common.module.css";
import ArticleButton from "../Component/Common/ArticleButton";

interface ArticleViewProps {
  data: Article[];
  handleAddArticle: () => void;
  handleUpdateArticle: (id: number, title: string, body: string) => void;
  handleDeleteArticle: (id: number) => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({
  data,
  handleAddArticle,
  handleUpdateArticle,
  handleDeleteArticle,
}) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isTitleEditing, setIsTitleEditing] = useState(false);

  useEffect(() => {
    // Set the selected article to the first article in the list when the data changes
    if (!selectedArticle && !isTitleEditing && data.length > 0) {
      const firstArticle = data[0];
      setSelectedArticle(firstArticle);
      setIsEditing(false);
    }
  }, [data, selectedArticle, isTitleEditing]);

  const handleTitleClick = (article: Article) => {
    setSelectedArticle(article);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsTitleEditing(true);
  };

  const handleDeleteClick = (article: Article) => {
    handleDeleteArticle(article.id);
  };

  const handleSaveClick = (id: number, title: string, body: string) => {
    // Save the updated title and body of an article when the save button is clicked
    handleUpdateArticle(id, title, body);
    setSelectedArticle((updatedArticle) => {
      // Update the selected article with the new title and body
      if (updatedArticle && updatedArticle.id === id) {
        return { ...updatedArticle, title, body };
      }
      return updatedArticle;
    });
    setIsEditing(false); // Disable editing mode
  };

  const handleNewPageClick = () => {
    handleAddArticle();
  };

  return (
    <div className={styles["articleView"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["titleHeader"]}>
          <img src={logo} alt="Logo" className={ButtonStyles["logo"]} />
          <p className={styles["serviceName"]}>ServiceName</p>
        </div>
        <div className={styles["articleList"]}>
          {data.map((article) => (
            <ArticleTitle
              key={article.id}
              article={article}
              handleTitleClick={handleTitleClick}
              handleDeleteClick={handleDeleteClick}
              isEditing={isTitleEditing}
              isSelected={selectedArticle?.id === article.id}
            />
          ))}
        </div>

        <div className={styles["titleFooter"]}>
          {!isTitleEditing && (
            <div className={styles["buttonEdit"]}>
              <ArticleButton
                onClick={handleEditClick}
                className={ButtonStyles["button-primary"]}
                svg={editIcon}
              >
                Edit
              </ArticleButton>
            </div>
          )}

          {isTitleEditing && (
            <div className={styles["buttonContainer"]}>
              <ArticleButton
                onClick={handleNewPageClick}
                className={ButtonStyles["button-add"]}
                svgClassName={ButtonStyles["icon-add"]}
                svg={addIcon}
              >
                New Page
              </ArticleButton>

              <ArticleButton
                onClick={() => setIsTitleEditing(false)}
                className={ButtonStyles["button-primary"]}
                svg={done}
              >
                Done
              </ArticleButton>
            </div>
          )}
        </div>
      </div>

      <div className={styles["articleEdit"]}>
        {selectedArticle && !isEditing && (
          <ArticleEdit
            article={selectedArticle}
            handleSaveTitleClick={(id, title) =>
              handleSaveClick(id, title, selectedArticle.body)
            }
            handleSaveBodyClick={(id, body) =>
              handleSaveClick(id, selectedArticle.title, body)
            }
          />
        )}
        <div className={styles["copyRight"]}>Copyright © 2021 Sample</div>
        <div className={styles["companyInfo"]}>運営会社</div>
      </div>
    </div>
  );
};

export default ArticleView;
