import { styled } from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product p={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
