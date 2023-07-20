import { Add, AddShoppingCart, Remove } from "@mui/icons-material";
import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 50px;
  display: flex;

  ${mobile({
    padding: "10px",
    display: "flex",
    flexDirection: "column",
  })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;

  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
`;

const ProductDesc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;

  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-left: 10px;
`;

const FilterColor = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddItemContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ${mobile({
    width: "100%",
    alignItems: "center",
  })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin: 5px auto;

  ${mobile({ margin: "0px" })}
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  width: 70%;
  padding: 15px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: whitesmoke;
  border-radius: 10px;
  background-color: #000000;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: #161616;
  }

  ${mobile({ margin: "0px" })}
`;

const ButtonText = styled.span`
  font-weight: 500;
  margin-right: 10px;
`;

const SingleProduct = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="/media/SingleProduct/Sundress2.png" />
      </ImageContainer>
      <InfoContainer>
        <Title>Sundress</Title>
        <ProductDesc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          fugit fugiat eveniet! Debitis aperiam esse consectetur tenetur
          deleniti, fuga ea sit sint doloremque magni distinctio, qui, doloribus
          cum molestiae? Optio.
        </ProductDesc>
        <Price>$30.00</Price>
        <FilterContainer>
          <Filter>
            <FilterTitle>Color: </FilterTitle>
            <FilterColor color="black" />
            <FilterColor color="grey" />
            <FilterColor color="pink" />
          </Filter>
          <Filter>
            <FilterTitle>Size:</FilterTitle>
            <FilterSize>
              <FilterSizeOption>XS</FilterSizeOption>
              <FilterSizeOption>S</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
              <FilterSizeOption>XL</FilterSizeOption>
              <FilterSizeOption>XXL</FilterSizeOption>
            </FilterSize>
          </Filter>
        </FilterContainer>
        <AddItemContainer>
          <AmountContainer>
            <Remove />
            <Amount>1</Amount>
            <Add />
          </AmountContainer>
          <Button>
            <ButtonText>ADD TO CART</ButtonText>
            <AddShoppingCart />
          </Button>
        </AddItemContainer>
      </InfoContainer>
    </Container>
  );
};

export default SingleProduct;
