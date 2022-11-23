import './index.css'

const GameItems = props => {
  const {choicesList, onChangeUserInput} = props

  const onClickButton = event => {
    onChangeUserInput(event.target.value)
  }

  return (
    <div className="items-container">
      {choicesList.map(eachItem => (
        <li key={eachItem.id}>
          <button
            type="button"
            className="button"
            onClick={onClickButton}
            value={eachItem.id}
          >
            <img src={eachItem.imageUrl} className="item-image" alt="items" />
          </button>
        </li>
      ))}
    </div>
  )
}

export default GameItems
