import React, { useState, useEffect } from "react";
import { Article } from "../../Model/ArticleApi";
import editIcon from "../../assets/icon/edit.svg";
import cancel from "../../assets/icon/cancel.svg";
import save from "../../assets/icon/save.svg";
import styles from "../../Style/articleedit.module.css";
import buttonStyles from "../../Style/common.module.css";
import ArticleButton from "../Common/ArticleButton";
interface ArticleEditProps {
  article: Article;
  handleSaveTitleClick: (id: number, title: string) => void;
  handleSaveBodyClick: (id: number, body: string) => void;
}

const ArticleEdit: React.FC<ArticleEditProps> = ({
  article,
  handleSaveTitleClick: handleSaveTitle,
  handleSaveBodyClick: handleSaveBody,
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingBody, setIsEditingBody] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedBody, setEditedBody] = useState("");

  useEffect(() => {
    setEditedTitle(article.title || "");
    setEditedBody(article.body || "");
  }, [article]);

  const handleEditTitleClick = () => {
    setIsEditingTitle(true);
  };

  const handleEditBodyClick = () => {
    setIsEditingBody(true);
  };

  const handleSaveTitleClick = () => {
    handleSaveTitle(article.id, editedTitle);
    setIsEditingTitle(false);
  };

  const handleSaveBodyClick = () => {
    handleSaveBody(article.id, editedBody);
    setIsEditingBody(false);
  };

  const handleCancelClick = () => {
    setIsEditingTitle(false);
    setIsEditingBody(false);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(event.target.value);
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedBody(event.target.value);
  };

  return (
    <div className={styles["article-edit"]}>
      <h2>
        {isEditingTitle ? (
          <div className={styles["title-edit"]}>
            <input
              type="text"
              value={editedTitle}
              className={styles["article-title"]}
              onChange={handleTitleChange}
            />
            <div className={styles["title-edit-button"]}>
              <ArticleButton
                onClick={handleCancelClick}
                className={buttonStyles["button-cancel-normal"]}
                svgClassName={buttonStyles["icon-normal"]}
                svg={cancel}
              >
                Cancel
              </ArticleButton>
              <ArticleButton
                onClick={handleSaveTitleClick}
                className={buttonStyles["button-secondary"]}
                svgClassName={buttonStyles["icon-save"]}
                svg={save}
              >
                Save
              </ArticleButton>
            </div>
          </div>
        ) : (
          <div className={styles["title-edit"]}>
            <span className={styles["article-title"]}>
              {editedTitle || "Title Here"}
            </span>

            <ArticleButton
              onClick={handleEditTitleClick}
              className={buttonStyles["button-primary"]}
              svg={editIcon}
            >
              Edit
            </ArticleButton>
          </div>
        )}
      </h2>

      {isEditingBody ? (
        <div className={styles["body-edit"]}>
          <textarea
            value={editedBody}
            className={styles["article-textarea"]}
            onChange={handleBodyChange}
          ></textarea>

          <div className={styles["body-edit-button"]}>
            <ArticleButton
              onClick={handleCancelClick}
              className={buttonStyles["button-cancel-normal"]}
              svgClassName={styles["icon-normal"]}
              svg={cancel}
            >
              Cancel
            </ArticleButton>
            <ArticleButton
              onClick={handleSaveBodyClick}
              className={buttonStyles["button-secondary"]}
              svgClassName={styles["icon-save"]}
              svg={save}
            >
              Save
            </ArticleButton>
          </div>
        </div>
      ) : (
        <div className={styles["body-edit"]}>
          <span className={styles["article-body"]}>
            {editedBody || "Body "}
          </span>
          <ArticleButton
            onClick={handleEditBodyClick}
            className={buttonStyles["button-primary"]}
            svg={editIcon}
          >
            Edit
          </ArticleButton>
        </div>
      )}
    </div>
  );
};

export default ArticleEdit;
