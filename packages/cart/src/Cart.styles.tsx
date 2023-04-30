import styled from "styled-components";

export const CartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow-y: auto;
`;

export const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  border: 1px #444fff solid;
  padding: 10px;
  &:hover {
    background-color: #444eee;
  }
`;
