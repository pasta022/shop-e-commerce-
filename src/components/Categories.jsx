import { styled } from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr;
  row-gap: 10px;
  padding: 20px;
  justify-content: space-between;

  ${mobile({
    display: "flex",
    flexDirection: "column",
    padding: "0px",
  })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((category, index) => (
        <CategoryItem c={category} key={category.id} />
      ))}
    </Container>
  );
};

export default Categories;
