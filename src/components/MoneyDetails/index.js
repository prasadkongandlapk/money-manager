import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <li className="money-card">
      <div className="balance">
        <div>
          <img
            className="m-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
        </div>
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balance}</p>
        </div>
      </div>

      <div className="income">
        <div>
          <img
            className="m-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
        </div>

        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {income}</p>
        </div>
      </div>

      <div className="expenses">
        <div>
          <img
            className="m-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
        </div>
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expenses}</p>
        </div>
      </div>
    </li>
  )
}

export default MoneyDetails
