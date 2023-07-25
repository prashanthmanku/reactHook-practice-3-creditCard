import styled from 'styled-components'

export const BgCard = styled.div`
  background-color: #ffffff;
  height: 100vh;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const CreditcardBg = styled.div`
  background-color: #3b4b69;
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const WidthCard = styled.div`
  width: 90%;
`

export const CreditcardForm = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 16px 0px #c3cad9;
  margin-top: 40px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin: auto 20px auto 20px;
  }
  border-radius: 10px;
`

export const CardHeading = styled.h1`
  color: #ffffff;
  margin-bottom: 0px;
  text-align: center;
  font-size: 23px;
  font-weight: 500;
`

export const Card = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 250px;
  max-width: 400px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 25px;
  margin: auto;
`

export const CardNo = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
`

export const CardLabel = styled.p`
  margin-bottom: 5px;
  color: #c3cad9;
  font-size: 15px;
`

export const Name = styled.p`
  margin: 0px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
`

export const FormHeading = styled.h1`
  color: #475569;
  font-size: 24px;
  font-weight: 600;
`

export const Input = styled.input`
  border: 1px solid #d3d9e0;
  margin-bottom: 20px;
  height: 35px;
  padding: 8px 16px;
  border-radius: 4px;
  width: 100%;
  max-width: 320px;
  outline: none;
`

export const Line = styled.hr`
  border: 3px solid #ffd773;
  margin-bottom: 60px;
  width: 110px;
`
