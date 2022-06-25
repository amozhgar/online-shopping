import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductCard from "../../component/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
  }
`;

const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
