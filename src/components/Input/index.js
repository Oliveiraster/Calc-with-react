import { InputContainer } from "./style"

const Input = ({value}) => {
  return (
    <InputContainer>
    <input type="text" disabled value={value} placeholder='0' />
    </InputContainer>
  )
}
export default Input