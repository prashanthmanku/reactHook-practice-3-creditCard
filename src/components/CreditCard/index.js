import {useState} from 'react'
import {
  BgCard,
  WidthCard,
  CreditcardBg,
  CreditcardForm,
  CardHeading,
  Card,
  CardNo,
  CardLabel,
  Name,
  FormHeading,
  Input,
  Line,
} from './styledComponents'

const CreditCard = () => {
  const [cardNo, setCardNo] = useState('')
  const [name, setName] = useState('')

  const onChangeCardNo = e => {
    setCardNo(e.target.value)
  }

  const onChangeName = e => {
    setName(e.target.value)
  }

  return (
    <BgCard>
      <CreditcardBg>
        <WidthCard>
          <CardHeading>CREDIT CARD</CardHeading>
          <Line />
          <Card data-testid="creditCard">
            <CardNo>{cardNo}</CardNo>
            <CardLabel>CARDHOLDER NAME</CardLabel>
            <Name>{name.toUpperCase()}</Name>
          </Card>
        </WidthCard>
      </CreditcardBg>
      <CreditcardForm>
        <FormHeading>Payment Method</FormHeading>
        <Input
          type="text"
          placeholder="Card Number"
          value={cardNo}
          onChange={onChangeCardNo}
        />
        <Input
          type="text"
          placeholder="Cardholder Name"
          value={name}
          onChange={onChangeName}
        />
      </CreditcardForm>
    </BgCard>
  )
}
export default CreditCard
