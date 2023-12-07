import { useRef, useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 50px 150px;
`;

const Title = styled.h3`
  width: 550px;
  margin: 0 auto 50px auto;
  font-size: 50px;
  font-weight: 400;
  color: #002257;
`;

const ListBox = styled.div`
  input {
    all: unset;
    box-sizing: border-box;
    background-color: #fff;
    width: 500px;
    height: 50px;
    border: 1.5px solid #002257;
    border-radius: 10px;
    margin-right: 10px;
    font-size: 18px;
  }
`;

const CheckBox = styled.div``;

const Check = styled.ul`
  margin: 50px auto;
  width: 560px;
  display: flex;
  justify-content: space-between;

  .button {
    width: 35px;
    height: 35px;
  }
`;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  background-color: #002257;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

export const List = () => {
  const [listData, setListData] = useState([
    {
      id: 0,
      title: "오늘은 투두리스트를 만들었어요",
    },
  ]);

  const [input, setInput] = useState({
    list: "",
  });

  let Ref = useRef(1);
  const { list } = input;

  const onChange = (e) => {
    const title = e.target.name;
    setInput({
      ...input,
      [title]: e.target.value,
    });
  };

  const onClick = () => {
    const RefData = [
      {
        id: Ref.current,
        title: list,
      },
    ];

    setListData(listData.concat(RefData));
    Ref.current += 1;
  };

  return (
    <Wrap>
      <Title>To Do List</Title>

      <ListBox>
        <input
          onChange={onChange}
          type="text"
          placeholder="할 일을 입력해하세요."
          name="list"
        />
        <Button onClick={onClick}>추가</Button>
      </ListBox>

      <CheckBox>
        {listData.map(function (a, i) {
          return (
            <Check key={i}>
              <input type="checkbox" />
              <li>{listData[i].title}</li>
              <Button className="button">삭제</Button>
            </Check>
          );
        })}
      </CheckBox>
    </Wrap>
  );
};
