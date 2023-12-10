import { Link } from "react-router-dom";
import styled from "styled-components";
const Wrap = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 50px 0;

  b {
    font-weight: 600;
    color: #002257;
  }
`;

const Title = styled.h3`
  width: 550px;
  margin: 0 auto 50px auto;
  font-size: 50px;
  font-weight: 400;
  color: #002257;
`;

const LoginWrap = styled.form`
  input {
    all: unset;
    box-sizing: border-box;
    width: 500px;
    height: 50px;
    border: 1px solid #002257;
    border-radius: 10px;
    margin: 15px 0;
  }
`;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  width: 500px;
  height: 50px;
  background-color: #002257;
  border-radius: 10px;
  color: white;
  margin-top: 20px;
`;

const Separ = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    display: block;
    width: 45%;
    height: 1px;
    background-color: #677da1;
  }
  b {
    font-size: 15px;
    font-weight: 800;
    color: #002257;
  }
`;

export const Login = () => {
  return (
    <Wrap>
      <Title>로그인</Title>

      <LoginWrap>
        <input type="text" placeholder="아이디를 입력해주세요." />
        <input type="password" placeholder="비밀번호를 입력해주세요." />
      </LoginWrap>

      <Button>로그인</Button>

      <Separ>
        <span></span>
        <b>또는</b>
        <span></span>
      </Separ>

      <p>
        회원이 아니신가요?{" "}
        <Link to="/signup">
          <b>가입하기</b>
        </Link>
      </p>
    </Wrap>
  );
};
