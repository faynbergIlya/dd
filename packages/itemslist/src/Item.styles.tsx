import styled, { css } from "styled-components";

const mixin = css`
  border-radius: 8px;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 5px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ItemLabel = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgb(164, 181, 8);
  ${mixin}
  max-width: 90px;
`;
export const ItemAction = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 5px;
`;
export const ItemPrice = styled.div`
  background-color: rgb(25, 8, 181);
  min-width: 15px;
  ${mixin}
  max-width: 70px;
`;
