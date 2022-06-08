import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((cate) => (
        <CategoryItem key={cate.id} category={cate} />
      ))}
    </div>
  );
};

export default Directory;
