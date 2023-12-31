import './index.css'

const TransactionItem = props => {
  const {details, onDelete} = props
  const {id, title, selectedType, amount} = details

  const onClickDetele = () => {
    onDelete(id)
  }

  const type = selectedType === 'INCOME' ? 'Income' : 'Expenses'
  return (
    <li>
      <div className="result-items-order">
        <p className="result-item-a">{title}</p>
        <p className="result-item-a">Rs {amount}</p>
        <p className="result-item">{type}</p>
        <button
          onClick={onClickDetele}
          data-testid="delete"
          type="button"
          className="button-delete"
        >
          <img
            className="aaaa"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default TransactionItem
