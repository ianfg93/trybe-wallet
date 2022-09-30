import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    btnDesabilitado: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.verifica);
  };

  handleClick = () => {
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(getUser(email));
    history.push('/carteira');
  };

  verifica = () => {
    const { email, password } = this.state;
    const minSenha = 5;
    const testValidation = /\S+@\S+\.\S+/;
    const emailValidation = testValidation.test(email);

    if (emailValidation && password.length > minSenha) {
      this.setState({ btnDesabilitado: false });
    } else {
      this.setState({ btnDesabilitado: true });
    }
  };

  render() {
    const { email, password, btnDesabilitado } = this.state;

    return (
      <div>
        <p>Login</p>
        <label htmlFor="email">
          E-mail:
          <input
            data-testid="email-input"
            id="email"
            type="text"
            value={ email }
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            data-testid="password-input"
            id="password"
            type="password"
            value={ password }
            name="password"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ btnDesabilitado }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default connect()(Login);
