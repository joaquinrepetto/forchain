import React from "react";
import { TitleH2 } from "../../components/Globals/globalsStyles";
import { CategoriesContainer, CategoryButton } from "./categoriesStyles";

const Categories = () => {
  return (
    <>
      <TitleH2>Categorias</TitleH2>
      <CategoriesContainer>
        <CategoryButton>Educación</CategoryButton>
        <CategoryButton>Networking</CategoryButton>
        <CategoryButton>DAOS</CategoryButton>
      </CategoriesContainer>
    </>
  );
};

export default Categories;
