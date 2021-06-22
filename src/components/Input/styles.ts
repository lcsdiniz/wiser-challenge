import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  label {
    font-size: 0.625rem;
    color: var(--navy-500);
    margin: 0 0 8px 11px;
  }
`

export const InputContainer = styled.div<{hasError: boolean}>`
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid ${props => props.hasError ? '#FF377F' : '#383E71' };
  background-color: transparent;
  padding: 1rem;

  input {
    flex: 1;
    border: none;
    background-color: green;
    margin-right: 8px;
    background-color: transparent;
    
    :focus{
      outline: none;
    }
      
    ::placeholder {
      color: var(--navy-100);;
      opacity: 1;
    }
  
    :-webkit-autofill,
    :-webkit-autofill:hover, 
    :-webkit-autofill:focus, 
    :-webkit-autofill:active {
      background-color: transparent !important;
      -webkit-box-shadow: 0 0 0 50px var(--gray-100) inset;
    }
  }
`

export const InputError = styled.p`
  font-size: 0.625rem;
  color: var(--magenta);
  margin: 0.5rem 0 0 1rem;
`