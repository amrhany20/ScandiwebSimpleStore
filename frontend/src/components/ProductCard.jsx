import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
text-align: center;
display: inline-block;
  width: 250px;   
  height: 250px;
  margin: 10px; 
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  word-wrap: break-word;
  overflow: hidden; 
`;

const Checkbox = styled.input`
  margin-bottom: 10px;
`;

const SKU = styled.h2`
  margin-bottom: 5px;
`;

const Name = styled.h2`
  margin-bottom: 5px;
`;

const Price = styled.h2`
  margin-bottom: 5px;
`;

const Value = styled.h2`
  margin-bottom: 5px;
`;

const ProductCard = ({ sku, name, price, value, checked, onCheckboxChange }) => {
  const handleCheckboxChange = () => {
    onCheckboxChange(sku);
  };

  return (
    <CardContainer>
      <Checkbox type="checkbox" className='delete-checkbox' class="delete-checkbox" checked={checked} onChange={handleCheckboxChange} />
      <SKU value={sku}>{sku}</SKU>
      <Name value={name}>{name}</Name>
      <Price value={price}>{price}$</Price>
      <Value value={value}>{value}</Value>
    </CardContainer>
  );
};

export default ProductCard;
