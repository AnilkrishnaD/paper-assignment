import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;

  padding: 20px;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`
export const HeaderContainer = styled.div`
  border: 2px solid #ffffff;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  padding: 13px;
  max-height: 170px;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Item = styled.h1`
  color: #ffffff;
  font-weight: 600;
  font-family: Roboto;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  min-width: 170px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const Heading = styled.p`
  color: #223a5f;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600px;
`
export const ScoreCard = styled.p`
  color: #223a5f;
  font-family: Roboto;
  font-size: 27px;
  font-weight: 560;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`
