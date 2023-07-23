import './index.css'
const TransactionItem = props => {
  const {details} = props

  return (
    <li>
      <p>A</p>
      <p>A</p>
      <p>A</p>
      <button type="button">
        <img
          className="aaaa"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
      <hr />
    </li>
  )
}

export default TransactionItem
