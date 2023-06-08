import { Article } from "../../Model/ArticleApi";
import styles from "../../Style/articletitle.module.css";
import ArticleButton from "../Common/ArticleButton";
import deleteIcon from "../../assets/icon/delete.svg";

interface ArticleTitleProps {
  article: Article;
  handleTitleClick: (article: Article) => void;
  handleDeleteClick: (article: Article) => void;
  isEditing: boolean;
  isSelected?: boolean | null;
}

const ArticleTitle: React.FC<ArticleTitleProps> = ({
  article,
  handleTitleClick,
  handleDeleteClick,
  isEditing,
  isSelected,
}) => {
  const handleClick = () => {
    handleTitleClick(article);
  };

  const handleDelete = () => {
    handleDeleteClick(article);
  };

  return (
    <div
      className={`${styles.articleTitleContainer} ${
        isSelected
          ? styles["articleTitleContainer-selected"]
          : ["articleTitleContainer"]
      }`}
    >
      <h2 className={styles.articleTitle} onClick={handleClick}>
        {article.title}
      </h2>
      {isEditing && (
        <ArticleButton
          onClick={handleDelete}
          className={styles["button-delete-normal"]}
          svg={deleteIcon}
        />
      )}
    </div>
  );
};

export default ArticleTitle;
