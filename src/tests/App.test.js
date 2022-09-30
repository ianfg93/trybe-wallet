import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Desenvolva testes para atingir 60% de cobertura total da aplicação', () => {
  test('Teste Requisito 5', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const email = 'trybe@teste.com';
    const senha = '111111';

    const { pathname } = history.location;
    const testEmail = screen.getByTestId('email-input');
    const testPassword = screen.getByTestId('password-input');
    const button = screen.getByRole('button', { name: 'Entrar' });

    expect(pathname).toBe('/');
    expect(testEmail).toBeInTheDocument();
    expect(testPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    userEvent.click(screen.getByRole('button'));
    userEvent.type(testEmail, email);
    userEvent.type(testPassword, senha);
  });
});
