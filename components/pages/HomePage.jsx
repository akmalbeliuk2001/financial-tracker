
import ButtonBase from "../atoms/ButtonBase"
import InputBase from "../atoms/InputBase"
import LabelBase from "../atoms/LabelBase"

import TransactionForm from "../molecules/TransactionForm"
// import TransactionItem from "../molecules/TransactionItem"

export default function HomePage () {
  return(
    <>
      <ButtonBase>Button Base</ButtonBase>
      <InputBase />
      <LabelBase>Label Input</LabelBase>

      <TransactionForm></TransactionForm>
      {/* <TransactionItem></TransactionItem> */}
    
    </>
  )
}

