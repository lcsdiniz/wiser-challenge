import styled from 'styled-components';

export const Container = styled.div<{errorMessage: boolean}>`
  display: flex;
  flex-direction: column;
  
  label {
    font-size: 0.625rem;
    color: var(--navy-500);
    margin: 0 0 8px 11px;
  }

  input {
    border-radius: 8px;
    /* border: 1px solid ${props => props.errorMessage ? '#FF377F' : '#383E71' };; */
    border: 1px solid var(--navy-500);
    background-color: transparent;
    padding: 1rem;

    ::placeholder {
      color: var(--navy-100);;
      opacity: 1;
    }
  }
`

export const InputError = styled.p`
  font-size: 0.625rem;
  color: var(--magenta);
  margin: 0.5rem 0 0 1rem;
`