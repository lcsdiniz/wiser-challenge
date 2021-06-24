import { render } from '@testing-library/react';
import React from 'react';
import Input from "../../components/Input/";

describe('Input component', () => {
  const mockedRegister = jest.fn();

  jest.mock('react-hook-form', () => {
    return {
      useForm() {
        return {
          register: mockedRegister,
        }
      }
    }
  });

  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input
        label="E-MAIL"
        placeholder="user.name@mail.com"
        name="email"
        register={mockedRegister}
      />
    );
    
    expect(getByPlaceholderText('user.name@mail.com')).toBeTruthy();
  });
})