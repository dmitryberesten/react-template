import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: 18px;
  color: #333;
  line-height: 1.6;
  max-width: 600px;
  margin: 20px auto;
  text-align: center;
`;

const Paragraph = ({ text }) => {
  return <StyledParagraph>{text}</StyledParagraph>;
};

export default Paragraph;