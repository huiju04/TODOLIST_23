import styled from "styled-components";

const SErrorMessage = styled.span`
  font-size: 15px;
  color: crimson;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const ErrorMessage = ({ text }) => {
  return <SErrorMessage>{text}</SErrorMessage>;
};
