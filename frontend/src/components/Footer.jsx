import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 20px;
`;

const HorizontalRule = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
`;

const Text = styled.p`
  text-align: center;
  font-size: 14px;
  color: #999;
`;

function Footer() {
  return (
    <FooterContainer>
      <HorizontalRule />
      <Text>Scandiweb Assessment</Text>
    </FooterContainer>
  );
}

export default Footer;
