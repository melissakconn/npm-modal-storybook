import styled from 'react-emotion'

export const Container = styled('div')`
  position: absolute;
  top: 0;
  left 0;
  background-color: grey;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled('div')`
  background-color: white;
  border-radius: 10px;
  z-index: 10;
  width: 400px;
  height: 400px;
`

