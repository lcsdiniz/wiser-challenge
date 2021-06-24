import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = ({ label, ...rest } :ButtonProps) => {
  return (
    <Container {...rest}>
      {label}
    </Container>
  )
}

export default Button;
