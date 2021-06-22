import styled from 'styled-components';

export const Container = styled.button`
  height: 3rem;
  color: var(--white);
  font-weight: 600;
  font-size: 1rem;
  margin-top: 2rem;
  border-radius: 8px;
  border-width: 0;
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  box-shadow: 0px 10px 25px 0px #CF99DB;
  transition: 0.2s;

  &:hover{
    filter: brightness(0.8);
  }
`
