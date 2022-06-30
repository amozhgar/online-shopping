import { useContext, Fragment } from "react";
import ButtonBack from "../../component/button-back/button-back";
import CategoryPreview from "../../component/category-preview/category-preview";
import { CategoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      <ButtonBack />
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
