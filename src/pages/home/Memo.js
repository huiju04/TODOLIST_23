import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  p {
    color: #002257;
    margin-left: 400px;
    margin-bottom: 10px;
  }
`;

const Title = styled.h3`
  width: 550px;
  margin: 50px auto;
  font-size: 50px;
  font-weight: 400;
  color: #002257;
`;

const InputWrap = styled.div`
  width: 640px;
  height: 477px;
  border: 1px solid #002257;
  margin: 0 auto;
  text-align: left;

  div {
    width: 100%;
    height: 40px;
    background-color: #002257;
  }
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 640px;
  height: 45px;
  border-bottom: 1px solid #002257;
  padding: 0 15px;
`;

const StarWrap = styled.div`
  width: 200px;
  font-size: 18px;
  margin-top: 10px;
  margin-left: 400px;
  display: flex;
  justify-content: space-between;
  /* float: ; */

  .star {
  }
  .star:hover {
    color: aliceblue;
  }
`;

export const Memo = () => {
  return (
    <Wrap>
      <Title>타이틀{/* {listData[i].title} */}</Title>

      <p>한 칸당 40자까지 작성해주세요.</p>

      <InputWrap>
        <div></div>
        <Input type="text" maxlength="40" />
        <Input type="text" maxlength="40" />
        <Input type="text" maxlength="40" />
        <Input type="text" maxlength="40" />
        <Input type="text" maxlength="40" />
        <Input type="text" maxlength="40" />
        <Input type="text" maxlength="40" />
        <Input type="text" maxlength="40" />
        <Input type="text" maxlength="40" />
      </InputWrap>

      <StarWrap>
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
      </StarWrap>
    </Wrap>
  );
};
