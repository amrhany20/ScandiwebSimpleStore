import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  margin:0px 0px 5px 5px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

function Header({ onSendToServer }) {
  const navigate = useNavigate();

  const navigateAdd = () => {
    navigate("/add-product");
  };

  const handleButtonClick = () => {
    onSendToServer();
   window.location.reload();
  };

  return (
    <HeaderContainer>
      <Title>Product List</Title>
      <div>
        <Button onClick={navigateAdd} type="button">
          ADD
        </Button>
        <Button onClick={handleButtonClick} type="button">
          MASS DELETE
        </Button>
      </div>
    </HeaderContainer>
  );
}

export default Header;
