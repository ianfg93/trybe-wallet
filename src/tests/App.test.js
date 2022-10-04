import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Desenvolva testes para atingir 60% de cobertura total da aplicação', () => {
  test('Teste Requisito 1', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const email = 'trybe@teste.com';
    const senha = '111111';

    const { pathname } = history.location;
    const testEmail = screen.getByTestId('email-input');
    const placePassword = screen.getByPlaceholderText('Senha');
    const placeEmail = screen.getByPlaceholderText('Email');
    const testPassword = screen.getByTestId('password-input');
    const button = screen.getByRole('button', { name: 'Entrar' });

    expect(pathname).toBe('/');
    expect(testEmail).toBeInTheDocument();
    expect(placeEmail).toBeInTheDocument();
    expect(screen.getByText('E-mail:')).toBeInTheDocument();
    expect(testPassword).toBeInTheDocument();
    expect(placePassword).toBeInTheDocument();
    expect(screen.getByText('Senha:')).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();

    userEvent.click(screen.getByRole('button'));
    userEvent.type(testEmail, email);
    userEvent.type(testPassword, senha);
  });

  test('Teste Requisito 2', () => {
    const { history } = renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');

    const testEmail = screen.getByTestId('email-field');
    const testTotal = screen.getByTestId('total-field');
    const testHeadre = screen.getByTestId('header-currency-field');
    const buttonEditar = screen.getByRole('button');
    const buttonDeletar = screen.getByRole('button');
    const buttonAdd = screen.getByRole('button');

    userEvent.click(buttonEditar);
    userEvent.click(buttonDeletar);
    userEvent.click(buttonAdd);

    expect(testEmail).toBeInTheDocument();
    expect(testHeadre).toBeInTheDocument();
    expect(testTotal).toBeInTheDocument();
    expect(buttonDeletar).toBeInTheDocument();
    expect(buttonEditar).toBeInTheDocument();
  });

  test('Teste Requisito 3', async () => {
    const { history } = renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');

    const testValue = screen.getByTestId('value-input');
    const testDescription = screen.getByTestId('description-input');
    const testCurrency = screen.getByTestId('method-input');
    const testTag = screen.getByTestId('tag-input');

    expect(testValue).toBeInTheDocument();
    expect(testDescription).toBeInTheDocument();
    expect(testCurrency).toBeInTheDocument();
    expect(testTag).toBeInTheDocument();
  });

  test('Teste Requisito 3', async () => {
    const { history } = renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');

    const testBtnEditar = await screen.findByTestId('edit-btn');
    const testBtnExclui = await screen.findByTestId('delete-btn');

    expect(testBtnEditar).toBeInTheDocument();
    expect(testBtnExclui).toBeInTheDocument();
  });
});
