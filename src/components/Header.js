import { Link } from "react-router-dom";
import styled from "styled-components";

const Headers = styled.header`
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 19px;
  font-weight: 400;
  background-color: #002257;
  display: flex;
  justify-content: space-between;
  padding: 0 150px;
  a {
    color: white;
  }
`;

const Logo = styled.div``;

const Menu = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`;

export const Header = () => {
  return (
    <Headers>
      <Logo>
        <Link to="/">로고</Link>
      </Logo>

      <Menu>
        <Link to="/">홈</Link>
        <Link to="/Login">로그인</Link>
        <Link to="/SignUp">회원가입</Link>
      </Menu>
    </Headers>
  );
};
