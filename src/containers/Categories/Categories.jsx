import React from "react";
import {
  TitleH2,
  ComponentSeparator,
} from "../../components/Global/globalStyles";
import { CategoriesContainer, CategoryButton } from "./categoriesStyles";

const Categories = () => {
  return (
    <ComponentSeparator>
      <TitleH2>Categorias</TitleH2>
      <CategoriesContainer>
        <CategoryButton>Educación</CategoryButton>
        <CategoryButton>Networking</CategoryButton>
        <CategoryButton>DAOS</CategoryButton>
      </CategoriesContainer>
    </ComponentSeparator>
  );
};

export default Categories;
