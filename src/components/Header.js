import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  somaValor = () => {
    const { expenses } = this.props;
    const soma = expenses.reduce((acc, curr) => {
      const moeda = curr.currency;
      const valor = Number(curr.exchangeRates[moeda].ask) * Number(curr.value);
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
          0
          {/* { this.somaValor() } */}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
