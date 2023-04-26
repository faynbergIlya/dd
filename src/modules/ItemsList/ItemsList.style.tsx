import styled from "styled-components";

export const ItemsWrapper = styled.div`
  grid-template-columns: repeat(3, 200px);
  column-gap: 10px;
  row-gap: 10px;
  display: grid;
`;
export const ItemsListOutterWrapper = styled.div`
  position: relative;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ItemsListHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const ExternalModulesWrapper = styled.div`
  display: flex;
  align-items: center;
`;
