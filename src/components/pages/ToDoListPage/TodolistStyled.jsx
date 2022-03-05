import styled from "styled-components";

const Root = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  border: 3px solid #ccc;
  padding: 5px;
`;
const ITEM = styled.div`
  height: 15px;
  min-width: 80px;
  text-align: center;
`;

export const Styled = { Root, ITEM };
