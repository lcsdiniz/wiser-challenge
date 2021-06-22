import { InputHTMLAttributes } from 'react';
import { FieldError } from "react-hook-form";
import { Container, InputError } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  inputError?: FieldError;
}

export function Input({ label, placeholder, inputError, ...rest }:InputProps) {
  return (
    <Container errorMessage>
      <label>{label}</label>
      <input placeholder={placeholder} {...rest} />
      {inputError && <InputError>{inputError.message}</InputError>}
    </Container>
  )
}