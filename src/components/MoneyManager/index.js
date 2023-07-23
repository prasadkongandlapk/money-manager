import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const initialTransactionsList = []

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    transactionsList: initialTransactionsList,
  }

  onChangeInput = event => {
    this.setState({title: event.target.value})
  }

  onChangetext = event => {
    this.setState({amount: event.target.value})
  }

  onClickAddBtn = event => {
    event.preventDefault()

    const newTransaction = {
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      transactionsList: [...transactionsList, newTransaction],
      title: '',
      amount: '',
    }))
  }
  render() {
    const {title, amount, transactionsList} = this.state

    return (
      <div className="bg">
        <div className="person-details">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to <span>Money Manager</span>
          </p>
        </div>
        <ul>
          <MoneyDetails />
        </ul>
        <div className="form-item-card">
          <form onSubmit={this.onClickAddBtn}>
            <h1>Add Transaction</h1>
            <div className="label">
              <label htmlFor="title">TITLE</label>
              <input
                onChange={this.onChangeInput}
                placeholder="Title"
                type="text"
                name="title"
              />
            </div>
            <div className="label">
              <label htmlFor="amount">AMOUNT</label>
              <textarea
                onChange={this.onChangetext}
                placeholder="Amount"
                type="text"
                name="amount"
              />
            </div>
            <div className="label">
              <label htmlFor="sss">TYPE</label>
              <select placeholder="Amount" name="sss">
                <option>Income</option>
                <option>Expenses</option>
              </select>
            </div>
            <button type="submit" className="form-button">
              Add
            </button>
          </form>
          <div className="form-item">
            <h1>History</h1>
            <div className="items-container">
              <div className="tititit">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </div>
              <hr />
              <ul>
                {transactionsList.map(each => (
                  <TransactionItem details={each} key={each.id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
