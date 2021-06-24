import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Login from "../../pages";

describe('Login Page', () => {
  it('should render error icon in email input', async () => {
    const { getByLabelText, getByText } = render(<Login />);
    
    const emailField = getByLabelText('E-MAIL');
    const passwordField = getByLabelText('SENHA');
    const buttonElement = getByText('ENTRAR');

    act(() => {
      fireEvent.change(emailField, { target: { value: 'not-valid-email' }});
      fireEvent.change(passwordField, { target: { value: '123456' }});
    
      fireEvent.click(buttonElement);
    });
    
    await waitFor(() => {
      screen.getByAltText('erro-email');
    })
  });
})