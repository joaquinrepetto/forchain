import styled from "styled-components";
import theme from "../../theme";

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 10px;
  white-space: nowrap;
  scrollbar-width: none; /* Para Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari y Opera */
  }
  margin-left: -20px;
  margin-right: -20px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  overflow: hidden;
  overflow-x: auto;
`;

export const CategoryButton = styled(({ active, ...rest }) => (
  <button {...rest} />
))`
  background-color: ${(props) =>
    props.active ? `${theme.colors.white}` : `${theme.colors.purpleButton}`};
  color: ${(props) =>
    props.active ? `${theme.colors.darkBlue}` : `${theme.colors.white}`};
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
`;
