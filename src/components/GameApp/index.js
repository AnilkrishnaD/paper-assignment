import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import './index.css'

import {
  AppContainer,
  HeaderContainer,
  ItemsContainer,
  Item,
  ScoreContainer,
  Heading,
  ButtonsContainer,
  ScoreCard,
} from './styledComponents'

import GameItems from '../GameItems'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameApp extends Component {
  state = {score: 0, gameStatus: 'Initial', userInput: '', gameResult: ''}

  getGameResult = userInput => {
    const opponentChoice = this.generateRandomNumber()
    console.log(opponentChoice)
    const opponentWeapon = choicesList[opponentChoice].id
    const opponentUrl = choicesList[opponentChoice].imageUrl
    // console.log(opponentUrl)

    const gameResult = this.findingGameResults(userInput, opponentWeapon)
    // console.log(gameResult)
    if (gameResult === 'YOU WON') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        gameResult: 'YOU WON',
        gameStatus: 'Result',
      }))
    }
    if (gameResult === 'YOU LOSE') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        gameResult: 'YOU LOSE',
        gameStatus: 'Result',
      }))
    }
    if (gameResult === 'IT IS DRAW') {
      this.setState({gameResult: 'IT IS DRAW', gameStatus: 'Result'})
    }
  }

  onClickRock = () => {
    // this.setState({userInput: 'ROCK', gameStatus: 'Result'})
    const userInput = 'ROCK'
    this.getGameResult(userInput)
  }

  onClickScissors = () => {
    // this.setState({userInput: 'SCISSORS', gameStatus: 'Result'})
    const userInput = 'SCISSORS'
    this.getGameResult(userInput)
  }

  onClickPaper = () => {
    // this.setState({userInput: 'PAPER', gameStatus: 'Result'})
    const userInput = 'PAPER'
    this.getGameResult(userInput)
  }

  renderPlayingView = () => (
    <ButtonsContainer>
      <button
        type="button"
        data-testid="rockButton"
        testid="rockButton"
        onClick={this.onClickRock}
        className="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
          alt="ROCK"
          className="item-image"
        />
      </button>
      <button
        type="button"
        data-testid="scissorsButton"
        testid="scissorsButton"
        onClick={this.onClickScissors}
        className="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
          alt="SCISSORS"
          className="item-image"
        />
      </button>
      <button
        type="button"
        data-testid="paperButton"
        testid="paperButton"
        onClick={this.onClickPaper}
        className="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
          alt="PAPER"
          className="item-image"
        />
      </button>
    </ButtonsContainer>
  )

  // rendering results view

  generateRandomNumber = () => {
    const num = Math.floor(Math.random() * 3)
    return num
  }

  onRestartGame = () => {
    this.setState({userInput: '', gameStatus: 'Initial'})
  }

  findingGameResults = (userInput, opponentWeapon) => {
    let result = ''
    if (userInput === opponentWeapon) {
      result = 'IT IS DRAW'
    } else if (userInput === 'PAPER' && opponentWeapon === 'ROCK') {
      result = 'YOU WON'
    } else if (userInput === 'ROCK' && opponentWeapon === 'SCISSORS') {
      result = 'YOU WON'
    } else if (userInput === 'SCISSORS' && opponentWeapon === 'PAPER') {
      result = 'YOU WON'
    } else {
      result = 'YOU LOSE'
    }
    // console.log(userInput)

    return result
  }

  renderResultView = () => {
    // console.log('results')
    const {userInput, gameResult} = this.state
    const userInputData = choicesList.filter(
      eachItem => eachItem.id === userInput,
    )
    const userImageUrl = userInputData[0].imageUrl

    // const userInputUrl = userInputData.imageUrl

    return (
      <>
        <div className="result-container">
          <div>
            <h1>YOU</h1>
            <img src={userImageUrl} alt="your choice" className="item-image" />
          </div>
          <div>
            <h1>OPPONENT</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
              alt="opponent choice"
              className="item-image"
            />
          </div>
        </div>
        <p>{gameResult}</p>
        <button type="button" onClick={this.onRestartGame}>
          PLAY AGAIN
        </button>
      </>
      // <p>Ok</p>
    )
  }

  renderViews = () => {
    const {gameStatus} = this.state

    switch (gameStatus) {
      case 'Initial':
        return this.renderPlayingView()
      case 'Result':
        return this.renderResultView()
      default:
        return null
    }
  }

  renderPopup = () => (
    <div className="popup-container">
      <Popup modal trigger={<button type="button">RULES</button>}>
        {close => (
          <>
            <div>
              <RiCloseLine
                className="closeButton"
                type="button"
                onClick={() => close()}
              />
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                  className="popup_image"
                />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )

  render() {
    const {score, userInput} = this.state
    // console.log(userInput)
    console.log(score)

    return (
      <AppContainer>
        <HeaderContainer>
          <ItemsContainer>
            <Item>Rock Paper Scissors</Item>
          </ItemsContainer>
          <ScoreContainer>
            <Heading>Score</Heading>
            <ScoreCard>{score}</ScoreCard>
          </ScoreContainer>
        </HeaderContainer>
        {this.renderViews()}
        {this.renderPopup()}
      </AppContainer>
    )
  }
}

export default GameApp
