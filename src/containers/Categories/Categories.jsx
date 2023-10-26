import React from "react";
import {
  TitleH2,
  ComponentSeparator,
} from "../../components/Global/globalStyles";
import { CategoriesContainer, CategoryButton } from "./categoriesStyles";
import { categories } from "../../utils/data/categories/categories";

const Categories = () => {
  return (
    <ComponentSeparator>
      <TitleH2>Categorias</TitleH2>
      <CategoriesContainer>
        {categories?.map((category, index) => (
          <CategoryButton key={index} active={index === 0}>
            {category}
          </CategoryButton>
        ))}
      </CategoriesContainer>
    </ComponentSeparator>
  );
};

export default Categories;
