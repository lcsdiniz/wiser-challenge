import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ label, ...rest } :ButtonProps) {
  return (
    <Container {...rest}>
      {label}
    </Container>
  )
}