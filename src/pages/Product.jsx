import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import SingleProduct from "../components/SingleProduct";

const Container = styled.div``;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <SingleProduct />
      <Footer />
    </Container>
  );
};

export default Product;
