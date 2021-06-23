import Image from 'next/image';
import { InputHTMLAttributes } from 'react';
import { FieldError } from "react-hook-form";
import { Container, InputContainer, InputError } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  inputError?: FieldError;
}

export function Input({ label, placeholder, inputError, ...rest }:InputProps) {
  return (
    <Container>
      <label>{label}</label>
      <InputContainer hasError={inputError !== undefined}>
        <input placeholder={placeholder} {...rest} />
        
        {inputError && 
          <Image
            src='/closeIcon.svg'
            alt="erro"
            width={16}
            height={16}
          />
        }
      </InputContainer>
      {inputError && <InputError>{inputError.message}</InputError>}
    </Container>
  )
}