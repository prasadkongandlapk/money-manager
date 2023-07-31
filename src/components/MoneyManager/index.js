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

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    transactionsList: [],
    selectedType: transactionTypeOptions[0].displayText,
  }

  onChangeInput = event => {
    this.setState({title: event.target.value})
  }

  onChangetext = event => {
    this.setState({amount: event.target.value})
  }

  onClickAddBtn = event => {
    event.preventDefault()

    const {
      title,
      amount,
      income,
      balance,
      expenses,
      transactionsList,
      selectedType,
    } = this.state
    if (title.length > 0 && amount.length > 0) {
      const newTransaction = {
        id: v4uuid(),
        title,
        amount,
        income,
        balance,
        expenses,
        selectedType,
      }

      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
        title: '',
        amount: '',
        balance: prevState.balance + parseInt(amount),
        selectedType,
      }))

      if (selectedType === 'Income') {
        this.setState(prevState => ({
          income: prevState.income + parseInt(amount),
        }))
      } else if (selectedType === 'Expenses') {
        this.setState(prevState => ({
          expenses: prevState.expenses + parseInt(amount),
        }))
      }
    }
  }

  onSelectType = event => {
    this.setState({selectedType: event.target.value})
  }

  onDelete = id => {
    const {income, balance, expenses, selectedType, amount} = this.state

    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(eachOne => {
        if (eachOne.id === id && selectedType === 'Income') {
          this.setState({
            income: prevState.income - parseInt(amount),
            balance: prevState.balance - parseInt(amount),
          })
        } else if (eachOne.id === id && selectedType === 'Expenses') {
          this.setState({
            expenses: prevState.expenses - parseInt(amount),
            balance: prevState.balance - parseInt(amount),
          })
        }
        return eachOne.id !== id
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
            Welcome back to your <span>Money Manager</span>
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
                id="title"
              />
            </div>
            <div className="label">
              <label htmlFor="amount">AMOUNT</label>
              <input
                value={amount}
                onChange={this.onChangetext}
                placeholder="Amount"
                id="amount"
              />
            </div>
            <div className="label">
              <label htmlFor="sss">TYPE</label>
              <select
                onChange={this.onSelectType}
                placeholder="Amount"
                id="sss"
              >
                {transactionTypeOptions.map(eachoption => (
                  <option value={eachoption.optionId}>
                    {eachoption.displayText}
                  </option>
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
