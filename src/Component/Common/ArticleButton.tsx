import React from "react";

interface ArticleButtonProps {
  onClick: React.MouseEventHandler;
  className?: string;
  children?: React.ReactNode;
  svg?: string;
  svgClassName?: string;
}

const ArticleButton: React.FC<ArticleButtonProps> = ({
  onClick,
  className,
  children,
  svg,
  svgClassName,
}) => {
  return (
    <button onClick={onClick} className={className}>
      {svg && <img src={svg} className={svgClassName} alt="Button Icon" />}
      {children}
    </button>
  );
};

export default ArticleButton;
