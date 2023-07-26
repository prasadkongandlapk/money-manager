import {Component} from 'react'
import {v4 as v4uuid} from 'uuid'

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
    balance: '',
    income: '',
    expenses: '',
    title: '',
    amount: '',
    type: 'INCOME',
    transactionsList: initialTransactionsList,
    selectedType: transactionTypeOptions[0].displayText,
  }

  onChangeInput = event => {
    this.setState({title: event.target.value})
  }

  onChangetext = event => {
    this.setState({amount: event.target.value})
  }

  onClickAddBtn = event => {
    const {
      title,
      amount,
      income,
      balance,
      expenses,
      type,
      transactionsList,
      selectedType,
    } = this.state
    event.preventDefault()
    if (title.length > 0 && amount.length > 0) {
      const newTransaction = {
        id: v4uuid(),
        title,
        amount,
        type,
        income,
        balance,
        expenses,
      }

      this.setState(prevState => ({
        transactionsList: [...transactionsList, newTransaction],
        title: '',
        amount: '',
        balance: prevState.balance + amount,
      }))

      if (selectedType === 'Income') {
        this.setState(prevState => ({
          income: prevState.income + amount,
          type: 'INCOME',
        }))
      } else if (selectedType === 'Expenses') {
        this.setState(prevState => ({
          expenses: prevState.expenses + amount,
          type: 'EXPENSES',
        }))
      }
    }
  }

  onSelectType = event => {
    const {income, amount, selectedType} = this.state

    this.setState({selectedType: event.target.value})
  }

  onDelete = id => {
    const {income, balance, expenses, amount, selectedType} = this.state
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.map(eachOne => {
        if (eachOne.id !== id) {
          return eachOne
        }
        if (eachOne.id === id && selectedType === 'Income') {
          this.setState({
            income: prevState.income - amount,
            balance: prevState.balance - amount,
          })
        } else if (eachOne.id === id && selectedType === 'Expenses') {
          this.setState({
            expenses: prevState.expenses - amount,
            balance: prevState.balance - amount,
          })
        }
      }),
    }))
  }

  render() {
    const {
      title,
      amount,
      transactionsList,
      income,
      expenses,
      selectedType,
      balance,
    } = this.state

    return (
      <div className="bg">
        <div className="person-details">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to <span>Money Manager</span>
          </p>
        </div>
        <ul>
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
        </ul>
        <div className="form-item-card">
          <form onSubmit={this.onClickAddBtn}>
            <h1>Add Transaction</h1>
            <div className="label">
              <label htmlFor="title">TITLE</label>
              <input
                onChange={this.onChangeInput}
                value={title}
                placeholder="Title"
                type="text"
                name="title"
              />
            </div>
            <div className="label">
              <label htmlFor="amount">AMOUNT</label>
              <textarea
                value={amount}
                onChange={this.onChangetext}
                placeholder="Amount"
                type="number"
                name="amount"
              />
            </div>
            <div className="label">
              <label htmlFor="sss">TYPE</label>
              <select
                onClick={this.onSelectType}
                placeholder="Amount"
                name="sss"
              >
                {transactionTypeOptions.map(eachoption => (
                  <option>{eachoption.displayText}</option>
                ))}
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
                <p className="pp">Title</p>
                <p className="pp">Amount</p>
                <p className="pp">Type</p>
              </div>
              <hr />
              <ul>
                {transactionsList.map(each => (
                  <TransactionItem
                    onDelete={this.onDelete}
                    details={each}
                    key={each.id}
                  />
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
