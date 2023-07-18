import { Add, Remove } from "@mui/icons-material";
import { styled } from "styled-components";

const Container = styled.div``;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProductColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 5px;
`;

const ProductSize = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 24px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductPriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-left: 5px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const CartItem = () => {
  return (
    <Container>
      <Product>
        <ProductDetails>
          <Image src="/media/Cart/1.png" />
          <Details>
            <ProductName>
              <b>Product:</b> NIKE JORDAN AIR
            </ProductName>
            <ProductId>
              <b>ID:</b> 900399283
            </ProductId>
            <ProductColorContainer>
              <b>Color: </b>
              <ProductColor color="lightpink" />
            </ProductColorContainer>
            <ProductSize>
              <b>Size:</b> 38(M)
            </ProductSize>
          </Details>
        </ProductDetails>
        <PriceDetails>
          <ProductAmountContainer>
            <b>Amount: </b>
            <Add />
            <ProductAmount>2</ProductAmount>
            <Remove />
          </ProductAmountContainer>
          <ProductPriceContainer>
            <b>Price: </b>
            <ProductPrice>$ 100.00</ProductPrice>
          </ProductPriceContainer>
        </PriceDetails>
      </Product>
      <Hr />
    </Container>
  );
};

export default CartItem;
