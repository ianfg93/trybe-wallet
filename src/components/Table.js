import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../redux/actions';

class Table extends Component {
  delete = (id) => {
    const { expenses, deletar } = this.props;
    const selecionar = expenses.filter((item) => item.id !== id);
    deletar(selecionar);
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </thead>

          <tbody>
            { expenses.map((e) => (
              <tr key={ e.id }>
                <td>{ e.description }</td>
                <td>{e.tag }</td>
                <td>{ e.method }</td>
                <td>{ Number(e.value).toFixed(2) }</td>
                <td>{ e.exchangeRates[e.currency].name }</td>
                <td>{ Number(e.exchangeRates[e.currency].ask).toFixed(2) }</td>
                <td>
                  { Number((e.value) * (e.exchangeRates[e.currency].ask)).toFixed(2) }
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.delete(e.id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deletar: (value) => dispatch(removeExpense(value)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.string.isRequired,
  deletar: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
