import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  somaValor = () => {
    const { expenses } = this.props;
    const soma = expenses.reduce((acc, curr) => {
      console.log(expenses);
      const valor = Number(curr.exchangeRates[curr.currency].ask) * Number(curr.value);
      // console.log(valor);
      return acc + Number(valor);
    }, 0);
    return Number(soma).toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <div>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">
          {this.somaValor()}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.shape(),
}.isRequired;

export default connect(mapStateToProps)(Header);
