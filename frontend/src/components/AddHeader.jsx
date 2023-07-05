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

function AddHeader() {
  const navigate = useNavigate();

  const navigateHome = () => {  
    navigate('/');
    setTimeout(() => {
      window.location.reload(); // Reload the page after a delay
    }, 50);
  };


  return (
    <HeaderContainer>
      <Title>Add Product</Title>
      <div>
        <Button  type="submit" form="product_form">
          Save
        </Button>
        <Button onClick={navigateHome} type="button">
          Cancel
        </Button>
      </div>
    </HeaderContainer>
  );
}

export default AddHeader;
