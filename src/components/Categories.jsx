import { styled } from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div``;

const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem c={category} />
      ))}
    </Container>
  );
};

export default Categories;
