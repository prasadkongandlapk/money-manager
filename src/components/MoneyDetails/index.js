import './index.css'

const MoneyDetails = () => {
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
          <p>Rs 0</p>
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
          <p>Rs 0</p>
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
          <p>Rs 0</p>
        </div>
      </div>
    </li>
  )
}

export default MoneyDetails
