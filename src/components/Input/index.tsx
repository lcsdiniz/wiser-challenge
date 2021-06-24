import Image from 'next/image';
import { InputHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Container, InputContainer, InputError } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  inputError?: FieldError;
  name: string;
  register: (arg0: string) => UseFormRegisterReturn;
}

const Input = ({ label, placeholder, inputError, name, register, ...rest }:InputProps) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <InputContainer hasError={inputError !== undefined}>
        <input
          id={label}
          placeholder={placeholder}
          {...register(name)}
          {...rest}
        />
        
        {inputError && 
          <Image
            src='/closeIcon.svg'
            alt={`erro-${name}`}
            width={16}
            height={16}
          />
        }
      </InputContainer>
      {inputError && <InputError>{inputError.message}</InputError>}
    </Container>
  )
}

export default Input;

