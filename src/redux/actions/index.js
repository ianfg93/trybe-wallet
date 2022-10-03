export const GET_USER = 'GET_USER';
export const GET_WALLET = 'GET_WALLET';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST = 'REQUEST';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const getUser = (payload) => ({
  type: GET_USER,
  payload,
});

export const requestApi = () => ({
  type: REQUEST_API,
});

export const request = (moedas) => ({
  type: REQUEST,
  payload: Object.keys(moedas).filter((currency) => currency !== 'USDT'),
});

export const reqApi = () => async (dispatch) => {
  dispatch(requestApi());
  const endpoint = await fetch('https://economia.awesomeapi.com.br/json/all');
  const retorno = await endpoint.json();
  dispatch(request(retorno));
};

export const addExpense = (expense, exchange) => ({
  type: ADD_EXPENSE,
  payload: {
    ...expense,
    exchangeRates: exchange,
  },
});

export const reqAddExpense = (expense) => async (dispatch) => {
  const endpoint = await fetch('https://economia.awesomeapi.com.br/json/all');
  const retorno = await endpoint.json();
  dispatch(addExpense(retorno, expense));
};
