import styled from 'styled-components';
import { Container as Button } from '../components/Button/styles';
import { Container as Input } from '../components/Input/styles';

export const Background = styled.div`
  flex: 1;
  background-image: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%),  url('/backgroundImage.png');
  background-position-x: center;
  background-size: cover;
`;

export const ContentContainer = styled.div`
  display: flex;
  background-color: #FAF5FF;
  padding-left: 7rem;
  flex: 1;
  align-items: center;
`

export const Content = styled.div`
  min-width: 16rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--navy-500);
  font-weight: 400;
  margin-bottom: 1rem;
`

export const Subtitle = styled.h2`
  font-size: 1rem;
  color: var(--navy-100);
  font-weight: 600;
  margin-bottom: 2.7rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  & ${Input} + ${Input} {
    margin-top: 1rem;
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterMessage = styled.p`
  text-align: center;
  font-size: 1rem;
  color: var(--navy-100);
  margin-top: 2rem;
  a {
    color: var(--purple-650);
  }
`

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;

  @media (max-width: 768px) {
    ${Background} {
      max-width: 327px;
    }

    ${ContentContainer} {
      padding: 1rem;
      justify-content: center;
    }

    ${Content} {
      min-width: 297px;
    }
  }

  @media (max-width: 386px) {
    
    ${ContentContainer} {
      background-image: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%),  url('/backgroundImage.png');
      background-position-x: center;
      background-size: contain;
      /* background-size: 100% 50%; */
      background-repeat: no-repeat; 
    }
    
    ${Content} {
      background-color: #FAF5FF;
      border-radius: 8px;
      padding: 28px 24px 57px;
      min-width: 310px;
      position: relative;
    }

    ${Background} {
      display: none;
    }

    ${Title} {
      font-size: 1.5rem;
      text-align: center;
    }

    ${Subtitle} {
      font-size: 0.75rem;
      text-align: center;
      margin-bottom: 1.25rem;

      br {
        display: none;
      }
    }

    ${Footer} {
      position: absolute;
      align-items: center;;
      bottom: -95px;
      left: 50%;
      margin-left: -121.08px;
    }

    ${FooterMessage} {
      color: var(--white);
      a {
        color: var(--white);
      }
    }

    ${Button} {
      margin: 0;
      width: 168px;
      box-shadow: none;
    }
  }
`;